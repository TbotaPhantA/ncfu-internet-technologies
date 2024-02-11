<template>
  <div class="shopping-list-wrapper">
    <h2 class="text-center mt-5">Список покупок</h2>

    <!-- Input -->
    <div class="d-flex">
      <input v-model="itemName" type="text" placeholder="Введите покупку" class="form-control">
      <input v-model="itemQuantity" type="text" placeholder="Количество" class="form-control">
      <input v-model="itemPrice" type="text" placeholder="Стоиость" class="form-control">
      <button @click="addItem" class="btn btn-warning rounded-1">Добавить</button>
    </div>

    <!-- Task table -->
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Продукт</th>
        <th scope="col">Количество</th>
        <th scope="col">Стоимость</th>
        <th scope="col">Сумма</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ rows.reduce((acc, row) => acc + row.total, 0)}}</td>
      </tr>
      <tr v-for="(row, index) in rows" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ row.name }}</td>
        <td>{{ row.quantity }}</td>
        <td>{{ row.price }}</td>
        <td>{{ row.total }}</td>
        <td>
          <div class="text-center btn-icon" @click="increaseQuantity(index)">
            <span class="fa fa-plus"></span>
          </div>
        </td>
        <td>
          <div class="text-center btn-icon" @click="decreaseQuantity(index)">
            <span class="fa fa-minus"></span>
          </div>
        </td>
        <td>
          <div class="text-center btn-icon" @click="deleteItem(index)">
            <span class="fa fa-trash"></span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- save-->
    <div class="mb-3">
      <input @change="selectFile" class="form-control" type="file" id="formFile">
    </div>
    <button @click="load" class="btn btn-info rounded-1">Загрузить</button>
    <button @click="save" class="btn btn-info rounded-1">Сохранить</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        itemName: '',
        itemQuantity: 0,
        itemPrice: 0,
        selectedFile: null,
        rows: [],
      }
    },
    methods: {
      addItem() {
        const doesItemAlreadyExists = this.rows.find(row => row.name === this.itemName);
        if (this.itemName.length === 0 || this.itemQuantity === 0 || doesItemAlreadyExists) return;

        this.rows.push(getRowByItem({
          name: this.itemName,
          quantity: this.itemQuantity,
          price: this.itemPrice,
        }));
      },
      deleteItem(index) {
        this.rows.splice(index, 1);
      },
      increaseQuantity(index) {
        const row = this.rows[index];
        row.quantity++;
        row.total = row.quantity * row.price;
      },
      decreaseQuantity(index) {
        const row = this.rows[index];
        if (row.quantity > 0) { row.quantity--; }
        row.total = row.quantity * row.price;
      },
      selectFile(event) {
        this.selectedFile = event.target.files[0];
      },
      load() {
        if (this.selectedFile) {
          const reader = new FileReader();
          reader.readAsText(this.selectedFile);
          reader.onload = () => {
            const itemsFromFile = JSON.parse(reader.result.toString());
            const newItems = itemsFromFile.filter(item => this.rows.every(row => row.name !== item.name));
            this.rows = this.rows.concat(newItems.map(getRowByItem))
          }
          reader.onerror = () => {
            alert('Error while loading the file!');
          }
        }
      },
      save() {
        const itemsToSaveOnFile = this.rows.map(row => ({
          name: row.name,
          quantity: row.quantity,
          price: row.price,
        }));

        const data = JSON.stringify(itemsToSaveOnFile, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = Date.now() + '-shopping-list.json'
        link.click();
        URL.revokeObjectURL(url);
      },
    }
  }

  function getRowByItem(item) {
    return {
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      total: item.quantity * item.price,
    }
  }
</script>

<style>
.shopping-list-wrapper button {
 margin-left: 5px;
}

.shopping-list-wrapper span {
  cursor: pointer;
}

.shopping-list-wrapper .btn-icon {
  cursor: pointer;
}
</style>
<script setup>
</script>

let isLastNameValid = true;
let isFirstNameValid = true;
let isPatronymicNameValid = true;
let isAddressNameValid = true;
let isIssuedDateValid = true;
let isPhoneValid = true;
let isSeriesValid = true;
let isNumberValid = true;
let isIssuedByValid = true;
let isSnilsValid = true;

validateForm();

function validateForm() {
    console.log('Validation!');
    const isValid = (
        applyLastNameValidation() &&
        applyFirstNameValidation() &&
        applyPatronymicNameValidation() &&
        applyAddressValidation() &&
        applyIssuedDateValidation() &&
        applyPassportIssuedByValidation() &&
        applyPhoneNumberValidation() &&
        applySeriesValidation() &&
        applyNumberValidation() &&
        applyIssuedByValidation() &&
        applySnilsValidation()
    )
    console.log({ isValid });

    return isValid;
}

// masks
applyPhoneMask();
applyPassportSeriesMask();
applyPassportNumberMask();
applySubdivisionMask();
applySnilsMask();

function applyLastNameValidation() {
    document.getElementById("surname").addEventListener("input", () => {
        let surname = document.getElementById("surname").value;
        let errorDiv = document.getElementById("surname-error");

        if (surname.length > 50) {
            errorDiv.textContent = "Максимальная длина фамилии - 50 символов";
            isLastNameValid = false;
        } else if (!/^[А-Яа-яЁёA-Za-z]+$/.test(surname)) {
            errorDiv.textContent = "Введите корректную фамилию (не должно быть пусто, только буквы)";
            isLastNameValid = false;
        } else {
            errorDiv.textContent = "";
            isLastNameValid = true;
        }

        if (isLastNameValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isLastNameValid;
    });

    return isLastNameValid;
}

function applyFirstNameValidation() {
    document.getElementById("name").addEventListener("input", () => {
        let name = document.getElementById("name").value;
        let errorDiv = document.getElementById("name-error");

        if (name.length > 50) {
            errorDiv.textContent = "Максимальная длина имени - 50 символов";
            isFirstNameValid = false;
        } else if (!/^[А-Яа-яЁёA-Za-z]+$/.test(name)) {
            errorDiv.textContent = "Введите корректную имени (не должно быть пусто, только буквы)";
            isFirstNameValid = false;
        } else {
            errorDiv.textContent = "";
            isFirstNameValid = true;
        }

        if (isFirstNameValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isFirstNameValid;
    });

    return isFirstNameValid;
}

function applyPatronymicNameValidation() {
    document.getElementById("patronymic").addEventListener("input", () => {
        let patronymic = document.getElementById("patronymic").value;
        let errorDiv = document.getElementById("patronymic-error");

        if (patronymic.length > 50) {
            errorDiv.textContent = "Максимальная длина отчества - 50 символов";
            isPatronymicNameValid = false;
        } else if (!/^[А-Яа-яЁёA-Za-z]+$/.test(patronymic)) {
            errorDiv.textContent = "Введите корректную отчества (не должно быть пусто, только буквы)";
            isPatronymicNameValid = false;
        } else {
            errorDiv.textContent = "";
            isPatronymicNameValid = true;
        }

        if (isPatronymicNameValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isPatronymicNameValid;
    });

    return isPatronymicNameValid;
}

function applyAddressValidation() {
    document.getElementById("address").addEventListener("input", () => {
        let patronymic = document.getElementById("address").value;
        let errorDiv = document.getElementById("address-error");

        if (patronymic.length > 200) {
            errorDiv.textContent = "Максимальная длина адреса - 200 символов";
            isAddressNameValid = false;
        } else {
            errorDiv.textContent = "";
            isAddressNameValid = true;
        }

        if (isAddressNameValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isAddressNameValid;
    });

    return isAddressNameValid;
}

function applyIssuedDateValidation() {
    document.getElementById("passport_issued_date").addEventListener("change", () => {
        let pickedDateString = document.getElementById("passport_issued_date").value;
        console.log({ pickedDateString });
        const pickedDate = new Date(pickedDateString).getTime();
        let errorDiv = document.getElementById("passport_issued_date_error");

        if (pickedDate < 0 || pickedDate > Date.now()) {
            errorDiv.textContent = "Дата должна быть не в будущем и не менее чем 1970 г.";
            isIssuedDateValid = false;
        } else {
            errorDiv.textContent = "";
            isIssuedDateValid = true;
        }

        if (isIssuedDateValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isIssuedDateValid;
    });

    return isIssuedDateValid;
}

function applyPassportIssuedByValidation() {
    document.getElementById("passport_issued_by").addEventListener("input", () => {
        let patronymic = document.getElementById("passport_issued_by").value;
        let errorDiv = document.getElementById("passport_issued_by_error");

        if (patronymic.length > 200) {
            errorDiv.textContent = "Максимальная длина - 200 символов";
            isIssuedByValid = false;
        } else {
            errorDiv.textContent = "";
            isIssuedByValid = true;
        }

        if (isIssuedByValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isIssuedByValid;
    });

    return isIssuedByValid;
}

function applyPhoneNumberValidation() {
    document.getElementById("phone").addEventListener("input", () => {
        let patronymic = document.getElementById("phone").value;
        let errorDiv = document.getElementById("phone-error");

        if (patronymic.length !== '(666) 666-66-66'.length) {
            errorDiv.textContent = `Длина должна быть ${'(666) 666-66-66'.length}.`;
            isPhoneValid = false;
        } else {
            errorDiv.textContent = "";
            isPhoneValid = true;
        }

        if (isPhoneValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isPhoneValid;
    });

    return isPhoneValid;
}

function applySeriesValidation() {
    document.getElementById("passport_series").addEventListener("input", () => {
        let series = document.getElementById("passport_series").value;
        let errorDiv = document.getElementById("passport_series_error");

        if (series.length !== '0000'.length) {
            errorDiv.textContent = `Длина должна быть ${'0000'.length}.`;
            isSeriesValid = false;
        } else {
            errorDiv.textContent = "";
            isSeriesValid = true;
        }

        if (isSeriesValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isSeriesValid;
    });

    return isSeriesValid;
}

function applyNumberValidation() {
    document.getElementById("passport_number").addEventListener("input", () => {
        let series = document.getElementById("passport_number").value;
        let errorDiv = document.getElementById("passport_number_error");

        if (series.length !== '000000'.length) {
            errorDiv.textContent = `Длина должна быть ${'000000'.length}.`;
            isNumberValid = false;
        } else {
            errorDiv.textContent = "";
            isNumberValid = true;
        }

        if (isNumberValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isNumberValid;
    });

    return isNumberValid;
}

function applyIssuedByValidation() {
    document.getElementById("passport_subdivision_code").addEventListener("input", () => {
        let series = document.getElementById("passport_subdivision_code").value;
        let errorDiv = document.getElementById("passport_subdivision_code_error");

        if (series.length !== '000-000'.length) {
            errorDiv.textContent = `Длина должна быть ${'000-000'.length}.`;
            isIssuedByValid = false;
        } else {
            errorDiv.textContent = "";
            isIssuedByValid = true;
        }

        if (isIssuedByValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isIssuedByValid;
    });

    return isIssuedByValid;
}

function applySnilsValidation() {
    document.getElementById("snils").addEventListener("input", () => {
        let series = document.getElementById("snils").value;
        let errorDiv = document.getElementById("snils_error");

        if (series.length !== '000-000-000 00'.length) {
            errorDiv.textContent = `Длина должна быть ${'000-000-000 00'.length}.`;
            isSnilsValid = false;
        } else {
            errorDiv.textContent = "";
            isSnilsValid = true;
        }

        if (isSnilsValid) {
            errorDiv.style.display = 'none';
        } else {
            errorDiv.style.display = 'block';
        }

        return isSnilsValid;
    });

    return isSnilsValid;
}

// masks
function applyPassportSeriesMask() {
// passport series mask
    const passportSeriesInput = document.getElementById('passport_series');

    const maskOptions = {
        mask: '0000',
    };

    const mask = new IMask(passportSeriesInput, maskOptions);
}

function applyPassportNumberMask() {
// passport series mask
    const passportNumberInput = document.getElementById('passport_number');

    const maskOptions = {
        mask: '000000',
    };

    const mask = new IMask(passportNumberInput, maskOptions);
}

function applySubdivisionMask() {
    const subdivision = document.getElementById('passport_subdivision_code');

    const maskOptions = {
        mask: '000-000',
    };

    const mask = new IMask(subdivision, maskOptions);
}

function applySnilsMask() {
    const snils = document.getElementById('snils');

    const maskOptions = {
        mask: '000-000-000 00',
    };

    const mask = new IMask(snils, maskOptions);
}

function applyPhoneMask() {
// phone mask
    const phoneInput = document.getElementById('phone');

    const maskOptions = {
        mask: '(000) 000-00-00',
    };

    const mask = new IMask(phoneInput, maskOptions);
}

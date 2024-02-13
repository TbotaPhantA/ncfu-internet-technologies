
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    function sumCube($cube) {
      $sum = 0;
      foreach ($cube as $row) {
        foreach ($row as $column) {
          foreach ($column as $value) {
            $sum += $value;
          }
        }
      }
      return $sum;
    }

    function averageCube($cube) {
      $sum = sumCube($cube);
      $totalElements = count($cube) * count($cube[0]) * count($cube[0][0]);
      return $sum / $totalElements;
    }

    function minCube($cube) {
      $min = PHP_INT_MAX;
      foreach ($cube as $row) {
        foreach ($row as $column) {
          foreach ($column as $value) {
            if ($value < $min) {
              $min = $value;
            }
          }
        }
      }
      return $min;
    }

    function maxCube($cube) {
      $max = PHP_INT_MIN;
      foreach ($cube as $row) {
        foreach ($row as $column) {
          foreach ($column as $value) {
            if ($value > $max) {
              $max = $value;
            }
          }
        }
      }
      return $max;
    }

    $cube = array(
      array(
        array(1, 2, 3),
        array(4, 5, 6),
      ),
      array(
        array(7, 8, 9),
        array(10, 11, 12),
      ),
    );
    
    $sum = sumCube($cube);
    $average = averageCube($cube);
    $min = minCube($cube);
    $max = maxCube($cube);
    
    echo "Сумма: $sum<br>";
    echo "Среднее арифметическое: $average<br>";
    echo "Минимальный элемент: $min<br>";
    echo "Максимальный элемент: $max<br>";
  ?>
</body>
</html>
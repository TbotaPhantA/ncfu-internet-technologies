<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
  // Create an array of numbers
  $numbers = [1, 3, 5, 7, 9];

  // Initialize sum variable
  $sum = 0;

  // Iterate through the array and add each element to the sum
  foreach ($numbers as $number) {
    $sum += $number;
  }

  // Print the sum onto the page
  echo "The sum of all elements is: $sum";
  ?>
</body>
</html>
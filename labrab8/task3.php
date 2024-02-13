<?php

// Функция для генерации примера
function generateExample() {
  $num1 = rand(1, 12);
  $num2 = rand(1, 12);
  return array($num1, $num2);
}

// Функция для проверки ответа
function checkAnswer($num1, $num2, $answer) {
  return (int)$answer === ($num1 * $num2);
}

// Количество примеров
$numExamples = 10;

// Массив для хранения ответов
$answers = array();

// Запуск цикла для генерации и проверки примеров
for ($i = 0; $i < $numExamples; $i++) {
  $example = generateExample();
  $num1 = $example[0];
  $num2 = $example[1];

  echo "Сколько будет $num1 * $num2? ";
  $userAnswer = readline();

  $answers[] = array(
    "example" => "$num1 * $num2",
    "answer" => $userAnswer,
    "correct" => checkAnswer($num1, $num2, $userAnswer),
  );
}

// Подсчет верных и неверных ответов
$correctAnswers = 0;
$wrongAnswers = 0;
foreach ($answers as $answer) {
  if ($answer["correct"]) {
    $correctAnswers++;
  } else {
    $wrongAnswers++;
  }
}

// Вывод результатов
echo "**Результаты:**" . PHP_EOL;
echo "Верных ответов: $correctAnswers" . PHP_EOL;
echo "Неверных ответов: $wrongAnswers" . PHP_EOL;

?>

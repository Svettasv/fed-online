// 1. Порівняння трьох чисел:

// Запитайте у користувача ввести три числа (ввести через prompt)

// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

let firstNumber = +prompt("Input first number");
let secondNumber = +prompt("Input second number");
let thirdNumber = +prompt("Input third number");

let biggestNumber;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  biggestNumber = firstNumber;
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  biggestNumber = secondNumber;
} else {
  biggestNumber = thirdNumber;
}

console.log(`The biggest number is ${biggestNumber}`);

// 2. Визначення сезону:

// Запитайте у користувача ввести номер місяця (від 1 до 12).

// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let month = +prompt("imput the number of month");

if (month == 12 || month == 1 || month == 2) {
  console.log("It is winter");
} else if (month == 3 || month == 4 || month == 5) {
  console.log("It is spring");
} else if (month == 6 || month == 7 || month == 8) {
  console.log("It is summer");
} else {
  console.log("it is autumn");
}

// 3. Визначення розміру числа:

// Запитайте у користувача ввести число.

// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let number = +prompt("Input any number");

if (number == 0) {
  console.log("your number is 0");
} else if (number > 0) {
  console.log("your number is positive");
} else {
  console.log("your number is negative");
}

// 4. Перевірка величини кута:

// Запитайте у користувача ввести величину кута в градусах.

// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

let angle = +prompt("Input angle value");

let result = angle > 90 ? "The angle is acute" : "The angle is obtuse";

console.log(result);

// 5. Оцінка студента:

// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).

// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:

// 90-100: A

// 80-89: B

// 70-79: C

// 60-69: D

// менше 60: F

// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.

// Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).

let points = +prompt("what is your mark (from 0 to 100)?");

let mark;

if (points >= 90 && points <= 100) {
  mark = "A";
} else if (points >= 80 && points <= 89) {
  mark = "B";
} else if (points >= 70 && points <= 79) {
  mark = "C";
} else if (points >= 60 && points <= 69) {
  mark = "D";
} else {
  mark = "F";
}

console.log(`Your mark is ${mark}`);

console.log(`Your starter points are ${points}`);
++points;

console.log(`Points after increment - ${points}`);

let isAccepted = points >= 60 ? "You are accepted" : "You are not accepted";

console.log(isAccepted);

// Завдання для Math.min та Math.max:

// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.

// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.

function minNumber(num1, num2) {
  return Math.min(num1, num2);
}

function maxNumber(num1, num2) {
  return Math.max(num1, num2);
}

// Завдання для Math.pow:

// Створіть функцію, яка підносить число до заданого ступеня.

// Виведіть результат у консоль.

function pow(num, n) {
  return Math.pow(num, n);
}

console.log(pow(3, 2));

// Завдання для Math.floor та Math.ceil:

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.

let num = Math.random() * 100;

let floor = Math.floor(num);

let ceil = Math.ceil(num);

// Завдання для Date.getYear:

// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік

// Виведіть результат у консоль.

function getBirthYear(age) {
  let currentDay = new Date();
  let currentYear = currentDay.getFullYear();
  return currentYear - age;
}

let age = +prompt("Input your age");
let yearofBirth = getBirthYear(age);

console.log(`You were born in ${yearofBirth}`);

// Завдання для Date.toLocaleString:

// Створіть об'єкт Date для поточної дати та часу.

// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.

// Виведіть результат у консоль.

let today = new Date();
let todaySTR = today.toLocaleString();
console.log(todaySTR);

// Завдання для String.split та toUpperCase:

// Створіть рядок, який містить слова, розділені пробілами.

// Використайте метод split, щоб розбити рядок на масив слів.

// Виведіть отриманий масив у консоль у верхньому регістрі.

let newString = "Це приклад рядка зі словами розділеними пробілами";

let upperCaseString = newString.toUpperCase();

let stringArray = upperCaseString.split(" ");

console.log(stringArray);

// push:

// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

let newArray = [];

newArray.push("Jack", 28, true, "Lidia", 33, false);

// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

function addElement(arr, element) {
  arr.push(element);
}

// pop:

// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

let vegetables = ["parsnip", "potato", "onion", "carrot"];

vegetables.pop();

// Завдання 2. Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

function removeElement(arr) {
  arr.pop();
}

// unshift:

// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

let flowers = ["rose", "tulip", "jasmine", "lily", "daisy"];

flowers.unshift("sunflower", "orchid", "iris");

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

function addElementStart(arr, element) {
  arr.unshift(element);
}

// shift:

// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

let sports = ["football", "basketball", "tennis", "swimming", "volleyball"];

sports.shift();
// Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

function removeElementStart(arr) {
  arr.shift();
}

// fill:

// Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.

let fruits = ["apple", "banana", "orange", "strawberry", "grape"];

fruits.fill("kiwi", 3);

// Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

function newFruitArray(arr, value, startindex, endIndex) {
  arr.fill(value, startindex, endIndex);
}

// splice:

// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];

months.splice(1, 4);

// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.

function spliceDelete(arr, index, count) {
  arr.splice(index, count);
}

// reverse:

// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.reverse();

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

function reverseArray(arr) {
  arr.reverse();
}

// concat:

// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.

let fruits1 = ["apple", "banana", "orange", "strawberry", "grape"];
let vegetables1 = ["carrot", "broccoli", "tomato", "cucumber", "lettuce"];

let products = fruits.concat(...vegetables);

// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

function concatArr(arr1, arr2) {
  return arr1.concat(...arr2);
}

// includes:

// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.

let names = [
  "John",
  "Emma",
  "Michael",
  "Sophia",
  "William",
  "Olivia",
  "James",
  "Ava",
];

names.includes("Olivia");

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.

function arrIncludes(arr, element) {
  return arr.includes(element);
}

// filter:

// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.

let randomNumbers = [1, 20, 3, 56, 13, 7, 103, 202];

let evenNumbers = randomNumbers.filter((number) => number % 2 === 0);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.

function newArrayFilter(arr, func) {
  return arr.filter(func);
}

// map:

// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
let array1 = [1, 4, 9, 2];
let mapArray = array1.map((x) => x * x);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення.

let array2 = [1, 4, 9, 2];

function newArrayMap(arr, func) {
  return arr.map(func);
}

function toString(number) {
  return String(number);
}

let stringArray = newArrayMap(array2, toString);

console.log(stringArray);

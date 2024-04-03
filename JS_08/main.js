// Завдання 1.

// Перепишіть цей код використовуючи let const~

// // Замість var

// for (var i = 0; i < 5; i++) {

//     console.log(i);

// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// // Замість var

// var message = 'test';

// function example() {

//     if (true) {

//         var message = 'Hello, world!';

//         console.log(message);

//     }

//     console.log(message); // Виведе 'Hello, world!'

// }

let message = "test";

function example() {
  if (true) {
    message = "Hello, world!";

    console.log(message);
  }

  console.log(message); // Виведе 'Hello, world!'
}

// Завдання 2.

// Використовуючи for in  виведіть значення з об'єктку в console.log

// const person = {

//     name: 'John',

//     age: 25,

//     occupation: 'Developer'

// };

const person = {
  name: "John",

  age: 25,

  occupation: "Developer",
};

for (let value in person) {
  console.log(`Property ${value} has a value ${person[value]}`);
}

// Завдання 3.

// Використовуючи for of  та for in  виведіть занчення з об'єктів які знаходяться в масиві
// const students = [

//     { name: 'Alice', age: 20, grade: 'A' },

//     { name: 'Bob', age: 22, grade: 'B' },

//     { name: 'Charlie', age: 21, grade: 'C' }

// ];

const students = [
  { name: "Alice", age: 20, grade: "A" },

  { name: "Bob", age: 22, grade: "B" },

  { name: "Charlie", age: 21, grade: "C" },
];

for (let value of students) {
  for (let prop in value) {
    console.log(`Property ${prop} has a value ${value[prop]}`);
  }
}

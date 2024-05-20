// Завдання 1.

// Ланцюжок promise: Напишіть ланцюжок promise, де перший promise додає число до вхідного параметра, другий множить його, а третій віднімає 10 від отриманого числа. Кожна операція повинна бути виконана в окремому then.

// Використайте catch для вловлювання помилок.

let inputNumber = 5;

new Promise((resolve, reject) => {
  if (inputNumber > 0) {
    resolve(inputNumber + 5);
  } else {
    reject("Input a number that is larger than 0");
  }
})
  .then((value) => value * 3)
  .then((value) => value - 10)
  .then((value) => console.log(value))
  .catch(function (error) {
    console.log(`Error: ${error}`);
  });

// Завдання 2.

// Перетворення тексту: Створіть функцію, яка приймає рядок і повертає promise. promise має перетворювати рядок у верхній регістр після 2 секундної затримки. Використайте setTimeout для створення затримки. Після

// завершення, використайте then для виведення результату і catch для обробки помилок.

let inputString = "jack";
let stringToUppercase = function (string) {
  return new Promise((resolve, reject) => {
    if (string === "") {
      reject("The value is empty, input any string");
    } else if (typeof string !== "string") {
      reject("The value is a number, input any string");
    } else {
      setTimeout(() => {
        resolve(string.toUpperCase());
      }, 2000);
    }
  });
};

stringToUppercase(inputString)
  .then((value) => console.log(value))
  .catch(function (error) {
    console.log(`Error: ${error}`);
  });

// Завдання 3.

// Напишіть функцію, яка приймає два числа як аргументи і повертає promise. promise має вирішуватися з повідомленням про те, яке з чисел більше, або відхилятися, якщо числа рівні, з повідомленням "Числа рівні".

let checkNumbers = function (num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === num2) {
      reject("Numbers are equal");
    } else {
      setTimeout(() => {
        if (num1 > num2) {
          resolve(`First number ${num1} is larger than second number ${num2}`);
        } else {
          resolve(`Second number ${num2} is larger than first number ${num1}`);
        }
      }, 6000);
    }
  });
};

checkNumbers(3, 5)
  .then((value) => console.log(value))
  .catch(function (error) {
    console.log(`Error: ${error}`);
  });

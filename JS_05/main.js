// 1. Визначення типу геометричної фігури за допомогою switch:

// Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник") і використовуючи switch оператор,
// виводить повідомлення про кількість сторін цієї фігури (наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").

let figure = prompt(
  "Для визначення кількості сторін фігури, ведіть назву фігури зі списку: коло, квадрат, трикутник"
);

switch (figure) {
  case "коло":
  case "Коло":
    alert("Коло має 0 сторін");
    break;

  case "квадрат":
  case "Квадрат":
    alert("Квадрат має 4 сторони");
    break;

  case "трикутник":
  case "Трикутник":
    alert("Трикутник має 3 сторони");
    break;

  default:
    alert("Невідома фігура");
}

// 2. Підрахунок суми парних чисел:

// Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).

let number = 0;
let sum = 0;

while (number < 21) {
  if (number % 2 === 0) {
    sum = sum + number;
  }
  number++;
}

console.log(sum);

// 3. Таблиця множення:

// Використовуючи цикл for, напишіть програму, яка генерує "таблицю множення" виводимо в console.log операції  для конкретного числа (наприклад, для числа 5).

let number1 = +prompt("Введіть число від 1 до 10");
let result;

if (number1 === 0) {
  console.log("Ви ввели 0, введіть число від 1 до 10");
} else if (number1 > 10 || number1 < 0) {
  console.log("Ви ввели некоректне число, введіть число від 1 до 10");
} else {
  console.log(`Таблиця множення на ${number1}`);
  for (let i = 1; i < 11; i++) {
    result = number1 * i;

    console.log(`${number1} * ${i} = ${result}`);
  }
}

// 4. Зворотний лічильник:

// Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.

for (let i = 10; i != 0; i--) {
  console.log(i);
}

// 5. Визначення чи є число парним чи непарним:

// Напишіть програму, яка приймає число і використовуючи if та for, виводить повідомлення про те, чи є число парним чи непарним.

let userNumber;

while (true) {
  userNumber = prompt("Введіть будь-яке число від 1 до 100");

  if (userNumber === null) {
    alert("Програма завершена");
    break;
  }

  userNumber = +userNumber;

  if (
    userNumber === 0 ||
    userNumber < 1 ||
    userNumber > 100 ||
    isNaN(userNumber)
  ) {
    alert("Ви ввели некоректне число, введіть число від 1 до 100");
  } else {
    if (userNumber % 2 === 0) {
      alert("Ви ввели парне число");
    } else {
      alert("Ви ввели непарне число");
    }
  }
}

// 6. Знаходження першого парного числа:

// Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить перше знайдене парне число.
// Використайте оператор break, щоб припинити виконання циклу, якщо парне число знайдено.

for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
    break;
  }
}

// 7. Виведення парних чисел:

// Створіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить тільки парні числа.
// Використайте оператор continue, щоб пропустити ітерації для непарних чисел.

for (let i = 1; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  } else {
    console.log(i);
  }
}

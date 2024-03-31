// 1. Калькулятор

// Створіть функції для кожної математичної операції (функція суми створена на уроці). Використовуючи switch напишіть програму яка отримує знак математичної операції (+, -, /, *) та 2 значення і запускає функцію для цієї

// математичної операції з 2 цифровими значеннями

function sumTwoNumbers(a, b) {
  return a + b;
}

function subtractTwoNumbers(a, b) {
  return a - b;
}

function divideTwoNumbers(a, b) {
  if (b === 0) {
    return;
  } else {
    return a / b;
  }
}

function multiplyTwoNumbers(a, b) {
  return a * b;
}

let calculator = function (operation, numberOne, numberTwo) {
  let result;

  switch (operation) {
    case "+":
      result = sumTwoNumbers(numberOne, numberTwo);
      break;

    case "-":
      result = subtractTwoNumbers(numberOne, numberTwo);
      break;

    case "/":
      result = divideTwoNumbers(numberOne, numberTwo);
      if (result === undefined) {
        result = "Ділити на 0 не можна";
      }
      break;

    case "*":
      result = multiplyTwoNumbers(numberOne, numberTwo);
      break;
  }

  alert(result);
};

let operation = prompt("Оберіть математичну операцію +, -, / або *");

if (operation === null) {
  alert("Програму припинено користувачем.");
} else {
  let numberOne = prompt("Введіть перше число");
  if (numberOne === null) {
    alert("Програму припинено користувачем.");
  } else {
    let numberTwo = prompt("Введіть друге");
    if (numberTwo === null) {
      alert("Програму припинено користувачем.");
    } else {
      numberOne = +numberOne;
      numberTwo = +numberTwo;
      if (
        operation !== "+" &&
        operation !== "-" &&
        operation !== "/" &&
        operation !== "*"
      ) {
        alert("Невідома операція");
      } else if (isNaN(numberOne) || isNaN(numberTwo)) {
        alert("Неправильні дані. Будь ласка, введіть дійсні числа.");
      } else {
        calculator(operation, numberOne, numberTwo);
      }
    }
  }
}

// 2. Параметри та колбеки:

// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

let users = ["Jack", "Helen", "Peter", "Derek", "Rick"];

function greeting(user) {
  console.log(`Вітаю ${user}`);
}

let wellcomUser = function (array, hiUser) {
  for (let i = 0; i < array.length; i++) {
    hiUser(array[i]);
  }
};

wellcomUser(users, greeting);

// 3. Стрілкові функції:

// Перепишіть попередню функцію в стрілкову

let wellcomUserArrow = (array, hiUser) => {
  for (let i = 0; i < array.length; i++) {
    hiUser(array[i]);
  }
};

// 4. Параметри за замовчуванням:

// Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.

let newFunction = function (name = "my friend") {
  console.log(`Hello, ${name}`);
};

// 5. Задача з колбеком:

// Створіть функцію, яка приймає стрінг значення і функцію-колбек, і викликає цю функцію-колбек, передаючи їй стрінг значення

let userName = prompt("input your name");

function showString(input) {
  console.log(`Hello ${input}`);
}

let strangeFunction = function (string, anyfunction) {
  if (string) {
    anyfunction(string);
  } else {
    console.log("The program was terminated by user");
  }
};

strangeFunction(userName, showString);

// 6. Перепишіть стрілкову функцію в звичайну

// const multiplyValues = (a, b, c) => a * b * c;

function multiplyValues(a, b, c) {
  return a * b * c;
}

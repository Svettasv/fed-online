// Тема: Spread

// Напишіть програму, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.

let fruits = ["apple", "banana", "orange", "kiwi"];
let vegetables = ["carrot", "broccoli", "tomato", "cucumber"];

function joinArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

let products = joinArrays(fruits, vegetables);

console.log(products);

// Тема: Rest

// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.

function productList(string, ...products) {
  console.log(string, products);
}

productList(
  "Сьогодні мені потрібно купити: ",
  "молоко",
  "хліб",
  "серветки",
  "овочі"
);

// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

function average(...randomNums) {
  let total = 0;
  for (const arg of randomNums) {
    total += arg;
  }

  let averageNum = total / randomNums.length;
  return averageNum;
}

console.log(average(3, 4, 5, 100));

// Тема: TypeOf

// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.

function type(arg) {
  console.log(`The type of ${arg} is ${typeof arg}.`);
}

type("Hello");

// Напишіть програму, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof.

let userInput = true;

function checkType(inputData) {
  if (typeof inputData === "string") {
    console.log("Це рядок");
  } else if (typeof inputData === "number") {
    console.log("Це число");
  } else {
    console.log("Це інше значення");
  }
}

checkType(userInput);

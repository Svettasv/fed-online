// 1. Логічні оператори  порівняння та alert:

// Створіть змінні number1 та number2 і використайте оператори порівняння, щоб визначити, чи вони рівні.

// Виведіть результат за допомогою alert, щоб повідомити користувача про те, чи рівні числа.

let number1 = 5;
let number2 = 12;

let isEqual = number1 == number2;

alert(`${number1} is equal to ${number2} = ${isEqual}`);

// 2. Метод вводу інформації та логічні порівняння:

// Використовуючи prompt, запросіть у користувача введення числа.

// Перевірте, чи введене число парне чи непарне.

// Виведіть результат з використанням console.log.

let number = +prompt("Input any number");

let isEven = number % 2 == 0;

alert(`The number you entered ${number} is even - ${isEven}`);

// 3. Логічні порівняння та введення-виведення:

// Використовуючи prompt, запитайте у користувача його вік.

// Перевірте, чи вік менше 18 років.

// Виведіть відповідне повідомлення про те, чи може користувач використовувати певний ресурс.

let userAge = +prompt("What is your age?");

let checkAge = userAge >= 18;

alert(`If you are allowed to use our services - ${checkAge}`);

// 4. Розрахунок вартості товару та console.log:

// Створіть змінну ціна та кількість товару і присвойте їм значення використовуючи prompt .

// Використовуйте математичні операції для обчислення вартості товару (ціна * кількість).

// Виведіть результат за допомогою console.log.

let price = +prompt("Input product price");
let quantity = +prompt("Input the quantity of the product");

let totalPrice = price * quantity;

console.log(`The total price of products is ${totalPrice}`);

// 5. Розрахунок знижки на товар та alert:

// Використовуючи prompt, запросіть в користувача вартість товару.

// Розрахуйте знижку на товар у розмірі 50% від введеної вартості.

// Виведіть результат знижки за допомогою alert.

let productPrice = +prompt("Input product price");

let discount = productPrice / 2;

alert(`Your discount is ${discount}`);

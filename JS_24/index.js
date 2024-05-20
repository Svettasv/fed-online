// Завдання 4: Розділення коду на модулі

import { add, subtract, multiply, divide } from "./mathOperations.js";
console.log(add(10, 3));
console.log(subtract(8, 2));
console.log(multiply(6, 4));
console.log(divide(6, 3));

// Завдання 5: Імпорт утиліти для роботи з текстом

import { toUpperCase, reverseStr } from "./stringUtilities.js";

console.log(toUpperCase("hello world"));
console.log(reverseStr("Javascript"));

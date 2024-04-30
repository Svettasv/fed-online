window.onload = function () {
  // Завдання 1: Знаходження всіх великих літер в тексті і збереження їх в масив
  let textStr =
    "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";
  let capLetPattern = /[A-Z]/g;
  let uppercaseLetters = textStr.match(capLetPattern);
  console.log(uppercaseLetters);

  // Завдання 2: Вибір числових значень зі строки

  let operation = "5 плюс 7 = 3";
  let numPattern = /\d+/g;
  let numbers = operation.match(numPattern);
  console.log(numbers);

  // Завдання 3: Знаходження слів із певною кількістю символів

  let fiveLetPattern = /\b[a-zA-Z]{5}\b/g;

  let fiveLetterWords = textStr.match(fiveLetPattern);

  console.log(fiveLetterWords);
};

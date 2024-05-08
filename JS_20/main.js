window.onload = function () {
  // Напишіть функцію, яка приймає повідомлення та час у мілісекундах як аргументи, і виводить це повідомлення у консоль після зазначеного часу.

  let messageText = "Hello, user!";

  function delayedMessage(message, time) {
    setInterval(function () {
      console.log(message);
    }, time);
  }

  delayedMessage(messageText, 5000);

  // Створіть кнопку яка при натисканні запускає таймер, який виводить збільшення лічильника кожну секунду. Коли лічильник досягне 10, автоматично зупиніть таймер.

  let btn = document.querySelector(".timer");
  let counterId = document.querySelector("span");
  let counter = 0;
  let intervalID;

  function count() {
    counter++;
    counterId.innerHTML = counter;

    if (counter === 10) {
      clearInterval(intervalID);
    }
  }

  btn.addEventListener("click", function () {
    intervalID = setInterval(count, 1000);
  });

  //Створіть HTML сторінку з кнопкою, яка змінює колір фону сторінки на випадковий колір який заданий в css зміних при кожному натисканні.

  let changeBtn = document.querySelector(".changeColor");

  changeBtn.onclick = function () {
    let root = document.documentElement;
    const colors = [
      getComputedStyle(root).getPropertyValue("--bg-color-1"),
      getComputedStyle(root).getPropertyValue("--bg-color-2"),
      getComputedStyle(root).getPropertyValue("--bg-color-3"),
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  };
};

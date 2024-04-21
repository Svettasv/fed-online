window.onload = function () {
  // Завдання 1: Конвертер валют

  let exchangeButton = document.querySelector(".exchange");
  let currencyAmount = document.querySelector(".currencyAmount");
  let currencyRate = document.querySelector(".currencyRate");
  let result = document.querySelector(".resultValue");
  let form = document.querySelector("form");

  console.log(typeof currencyAmount.value);

  exchangeButton.addEventListener("click", function (e) {
    e.preventDefault();
    let rate = parseFloat(currencyRate.value);
    let amount = parseFloat(currencyAmount.value);

    result.innerHTML = (amount / rate).toFixed(2);
    form.reset();
  });

  // Завдання 2: Динамічний список задач

  let inputTask = document.querySelector(".inputTask");
  let addTask = document.querySelector(".addTask");
  let taskList = document.querySelector(".taskList");
  let newItem = document.createElement("li");

  addTask.addEventListener("click", function (e) {
    e.preventDefault();
    let newItem = document.createElement("li");
    newItem.textContent = inputTask.value;
    newItem.classList.add("hasDelete");
    taskList.appendChild(newItem);
    inputTask.value = "";
    newItem.addEventListener("click", function (e) {
      e.preventDefault();
      this.remove();
    });
  });
};

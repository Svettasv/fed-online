window.onload = function () {
  //Створіть веб-сторінку з текстовим полем і кнопкою. При натисканні на кнопку, збережіть введення користувача у sessionStorage. Додайте ще одну кнопку, яка при натисканні відображатиме збережені дані у веб-сторінці.

  let getDataBtn = document.querySelector(".saveData");
  let showDataBtn = document.querySelector(".showData");
  let dataDisplay = document.querySelector(".userData");
  let clearInputBtn = document.querySelector(".cleaInput");
  let clearStorageBtn = document.querySelector(".clearStorage");

  function saveData() {
    let userInput = document.querySelector("#userInputdata").value;

    if (userInput === "") {
      alert("Please enter some text!");
    } else {
      window.localStorage.setItem("userInput", userInput);
    }
  }

  function showData() {
    let savedUserInput = window.localStorage.getItem("userInput");

    if (savedUserInput) {
      dataDisplay.innerText = savedUserInput;
      console.log(savedUserInput);
    } else {
      alert("No data saved yet!");
    }
  }

  function clearInput() {
    document.querySelector("#userInputdata").value = "";
    document.querySelector(".userData").innerText = "";
  }

  function clearStorage() {
    window.localStorage.clear();
  }

  getDataBtn.addEventListener("click", saveData);
  showDataBtn.addEventListener("click", showData);
  clearInputBtn.addEventListener("click", clearInput);
  clearStorageBtn.addEventListener("click", clearStorage);

  //Створіть просту форму з декількома налаштуваннями (наприклад, кольором фону сторінки), і збережіть вибір користувача у localStorage. При наступному відкритті сторінки, застосуйте ці налаштування.

  let formEl = document.querySelector(".changeClr");
  let bodyEl = document.querySelector("body");

  formEl.addEventListener("change", function () {
    let userBgColor = document.querySelector("#bgColor").value;
    window.localStorage.setItem("userBgColor", userBgColor);
    bodyEl.style.backgroundColor = userBgColor;
  });

  let savedColor = window.localStorage.getItem("userBgColor");

  if (savedColor) {
    bodyEl.style.backgroundColor = savedColor;
  }

  // Реалізуйте простий список завдань (to-do list), де можна додавати і видаляти пункти. Зберігайте список у localStorage, щоб після перезавантаження сторінки завдання залишалися доступні.

  let inputBtn = document.querySelector(".inputBtn");
  let deleteBtn = document.querySelector(".deleteBtn");
  let toDoList = document.querySelector(".toDoList");

  inputBtn.addEventListener("click", function () {
    let userInput = document.querySelector(".userInput").value;
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push(userInput);
    window.localStorage.setItem("tasks", JSON.stringify(taskList));
    let listEl = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Видалити";
    listEl.innerText = userInput;
    toDoList.appendChild(listEl);
    toDoList.appendChild(delBtn);
    delBtn.addEventListener("click", function () {
      toDoList.removeChild(listEl);
      toDoList.removeChild(delBtn);
    });
    document.querySelector(".userInput").value = "";
  });

  // Створіть об'єкт JavaScript, який включає різні типи даних (наприклад, рядки, числа, масиви, об'єкти). Використовуйте JSON.stringify для конвертації об'єкта у формат JSON.

  const newUser = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    married: false,
    children: ["Mary", "Bob"],
    car: {
      model: "Ford",
      year: 2017,
      color: "white",
    },
  };

  let jsonNewUser = JSON.stringify(newUser);
  console.log(jsonNewUser);
};

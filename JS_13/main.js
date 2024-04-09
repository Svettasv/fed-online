window.onload = function () {
  //1. Створіть сторінку в яку розмістіть список що розміщений вище, підключіть js файл до сторінки і виконайте такі завдання:
  //- виберіть всі елементи першого рівня вкладення і виведіть в консоль їх кількість;
  let firstLevelElements = document.querySelectorAll("#tree > li");
  console.log(firstLevelElements.length);

  //-виведіть в консоль кількість елементів 2 рівня вкладення.
  let secondLevelElements = document.querySelectorAll("#tree > li > ul");
  console.log(secondLevelElements.length);

  //2. Пройдіть по масиву і зробіть заповнення таблиці даними з масива

  const booksArray = [
    {
      title: "Пригоди Аліси в Країні Див",

      year: 1865,

      rating: 4.5,
    },

    {
      title: "1984",

      year: 1949,

      rating: 4.8,
    },

    {
      title: "Гаррі Поттер і філософський камінь",

      year: 1997,

      rating: 4.7,
    },
  ];

  let table = document.querySelector("table");

  for (let item of booksArray) {
    let row = document.createElement("tr");

    let titleCell = document.createElement("td");
    titleCell.innerHTML = item.title;
    row.appendChild(titleCell);

    let yearCell = document.createElement("td");
    yearCell.innerHTML = item.year;
    row.appendChild(yearCell);

    let ratingCell = document.createElement("td");
    ratingCell.innerHTML = item.rating;
    row.appendChild(ratingCell);

    table.appendChild(row);
  }

  // 3.  Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
  //   Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.
  // Пройдіть циклом по масиву і для кожного об'єкту застосуйте створену функцію.

  const elementsArray = [
    { tag: "p", text: "Елемент 1" },

    { tag: "div", text: "Елемент 2" },

    { tag: "span", text: "Елемент 3" },
  ];

  function createEl(arr) {
    let itemContainer = document.querySelector(".container");
    for (let item of arr) {
      let element = document.createElement(item.tag);
      element.innerHTML = item.text;
      itemContainer.appendChild(element);
    }
  }

  createEl(elementsArray);

  //   4. Створіть блок контейнер та перебераючи масив створіть елемент Р в залежності від usePrepend розмість його перед контейнером або за контейнером

  const elementsArray2 = [
    { text: "Елемент 1", usePrepend: true },

    { text: "Елемент 2", usePrepend: false },

    { text: "Елемент 3", usePrepend: true },
  ];

  function createP(arr) {
    let pContainer = document.createElement("div.container2");
    let bodyEl = document.querySelector("body");
    bodyEl.appendChild(pContainer);
    for (let item of arr) {
      let pElement = document.createElement("p");
      pElement.innerHTML = item.text;
      if (item.usePrepend === false) {
        pContainer.appendChild(pElement);
      } else {
        pContainer.prepend(pElement);
      }
    }
  }

  createP(elementsArray2);
};

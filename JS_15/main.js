window.onload = function () {
  // 1. onclick

  // Задача: Створіть кнопку та елемент Р з текстом, при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір.

  let randomColor = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
  };

  let changeColor = function (item, func) {
    item.style.color = func;
  };

  let paragraph = document.querySelector(".coloredText");
  let colorButton = document.querySelector("button");

  colorButton.addEventListener("click", function () {
    changeColor(paragraph, randomColor());
  });

  // 2. ondblclick

  // Задача: Створіть елемент який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

  let boxItem = document.querySelector(".box");

  let isSmall = true;

  let itemWidth = boxItem.offsetWidth;
  let itemHeight = boxItem.offsetHeight;

  function toggleSize() {
    if (isSmall) {
      boxItem.style.width = itemWidth * 2 + "px";
      boxItem.style.height = itemHeight * 2 + "px";
    } else {
      boxItem.style.width = itemWidth + "px";
      boxItem.style.height = itemHeight + "px";
    }
    isSmall = !isSmall;
  }
  boxItem.addEventListener("dblclick", toggleSize);

  //   3. addEventListener і removeEventListener

  // Створити кнопку і текстовий елемент в якому розмістіть лічільник:
  // 0, при кліку на кнопку в текстовому значенні повино збільшуватись значення на
  // 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

  let counter = document.querySelector(".counter");
  let counterBtn = document.querySelector(".counterBtn");
  let numberCount = 0;
  function counterChange() {
    numberCount = numberCount + 1;
    counter.innerText = `Click: ${numberCount}`;

    if (numberCount === 10) {
      counterBtn.removeEventListener("click", counterChange);
    }
  }

  counterBtn.addEventListener("click", counterChange);

  // 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div).
  // Підключіть обробник події onclick до кожного елементу.
  // Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки.

  let deleteDivs = document.querySelectorAll(".delete");

  deleteDivs.forEach(function (div) {
    div.style.backgroundColor = randomColor();
    div.onclick = function () {
      this.remove();
    };
  });

  let deleteElements = document.querySelectorAll(".delete");

  //   5.event.target

  // Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.

  // Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік.

  let btnContainer = document.querySelector(".blockContainer");

  btnContainer.onclick = function (e) {
    let innerText = e.target.innerText;
    alert(`${innerText} is clicked!`);
  };

  //Extra menu buton

  let menuBtn = document.querySelector(".menu-btn");
  let menuList = document.querySelector(".menu");
  let closeInfo = document.querySelector(".close-info");
  let openInfo = document.querySelector(".open-info");
  openInfo.style.display = "block";
  closeInfo.style.display = "none";
  menuList.style.display = "none";

  menuBtn.onclick = function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      menuList.style.display = "block";
      closeInfo.style.display = "block";
      openInfo.style.display = "none";
    } else {
      menuList.style.display = "none";
      closeInfo.style.display = "none";
      openInfo.style.display = "block";
    }
  };
};

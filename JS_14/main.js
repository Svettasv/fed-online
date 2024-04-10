window.onload = function () {
  // 1. Створіть сторінку та підключіть до неї js
  // 2. За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

  let bodyEl = document.querySelector("body");
  let headerEl = document.createElement("header");

  headerEl.setAttribute(
    "style",
    "padding:50px; background-color:yellow; text-align:center;"
  );

  bodyEl.appendChild(headerEl);

  // 3. Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.

  const menuData = [
    { name: "Головна", url: "/" },

    { name: "Про нас", url: "/about" },

    { name: "Послуги", url: "/services" },
  ];

  let link = document.createElement("a");

  for (item of menuData) {
    link = document.createElement("a");
    link.setAttribute("href", item.url);
    link.innerText = item.name;
    link.setAttribute("style", "padding: 20px;");
    link.setAttribute("target", "_blank"); // 4. Додайте тегам А що створені в header  атрибут target з властивістю _blank
    headerEl.appendChild(link);
  }

  // 5. Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

  function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
  } //Додаткове завдання: спробуйте зробити  завдання 5 так щоб в кожного div елемента був унікальний бекграунд

  function createDiv() {
    let divBlock = document.createElement("div");
    divBlock.style.display = "flex";
    divBlock.style.flexWrap = "wrap";
    divBlock.style.gap = "20px";
    bodyEl.appendChild(divBlock);

    for (let i = 0; i < 50; i++) {
      let blockItem = document.createElement("div");
      blockItem.style.width = "50px";
      blockItem.style.height = "50px";
      blockItem.style.backgroundColor = generateRandomColor();
      blockItem.classList.add("circle-elemt"); //6. Додайте всім стврореним 50 div елементам класс circle-elemt
      divBlock.appendChild(blockItem);
    }
  }

  createDiv();
};

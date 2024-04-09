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

  let flexBlock = document.createElement("div");
  bodyEl.appendChild(flexBlock);
  flexBlock.setAttribute("style", "display:flex; flex-wrap: wrap; gap: 20px;");

  function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
  } //Додаткове завдання: спробуйте зробити  завдання 5 так щоб в кожного div елемента був унікальний бекграунд

  for (let i = 0; i < 50; i++) {
    let flexBlockItem = document.createElement("div");
    flexBlockItem.setAttribute(
      "style",
      "width: 50px; height: 50px; border-radius: 10px;"
    );

    flexBlockItem.classList.add("circle-elemt"); //6. Додайте всім стврореним 50 div елементам класс circle-elemt
    flexBlockItem.style.backgroundColor = generateRandomColor();
    flexBlock.appendChild(flexBlockItem);
  }
};

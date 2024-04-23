window.onload = function () {
  // Завдання 1: Форма з вибором улюбленого кольору:

  let bodyEl = document.querySelector("body");
  let formEl = document.querySelector("form");
  let [...radioButtons] = document.querySelectorAll('input[name = "color"]');

  radioButtons.forEach(function (radioButton) {
    radioButton.checked = false;
  });

  formEl.addEventListener("change", () => {
    let bgColor = "";
    for (radiobutton of radioButtons) {
      if (radiobutton.checked) {
        bgColor = radiobutton.value;
        bodyEl.style.backgroundColor = bgColor;
      }
    }
  });
  let resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    bodyEl.style.backgroundColor = "white";
    radioButtons.forEach((radioButton) => {
      radioButton.checked = false;
    });
  });

  // Завдання 2: Форма для вибору хобі з чекбоксами:

  let hobbiesEl = document.querySelector(".hobbies");
  let [...checkboxes] = document.querySelectorAll('input[name = "hobby"]');
  let hobbyList = document.querySelector(".hobbyList");

  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  hobbiesEl.addEventListener("change", () => {
    hobbyList.innerHTML = "";
    for (checkboxitem of checkboxes) {
      if (checkboxitem.checked) {
        let listItemEl = document.createElement("p");
        listItemEl.innerText = checkboxitem.value;
        hobbyList.appendChild(listItemEl);
      }
    }
  });

  let resetButton2 = document.querySelector(".reset2");
  resetButton2.addEventListener("click", (e) => {
    e.preventDefault();
    hobbyList.innerHTML = "";
    checkboxes.forEach((checkboxitem) => {
      checkboxitem.checked = false;
    });
  });

  // Завдання 3: Форма з вибором країни із випадаючого списку:

  let countries = [
    {
      name: "Португалія",
      capital: "Ліссабон",
      population: "10,5 млн.",
    },
    {
      name: "Франція",
      capital: "Париж",
      population: "68 млн.",
    },
    {
      name: "Україна",
      capital: "Київ",
      population: "38 млн.",
    },

    {
      name: "Туреччина",
      capital: "Анкара",
      population: "85 млн.",
    },

    {
      name: "Іспанія",
      capital: "Мадрид",
      population: "48 млн.",
    },
  ];

  let countriesList = document.querySelector("#countriesList");
  let countryCapital = document.querySelector(".countryCapital");
  let countryPopulation = document.querySelector(".countryPopulation");
  countriesList.selectedIndex = -1;

  countriesList.addEventListener("change", function () {
    countryCapital.innerText = " ";
    countryPopulation.innerText = " ";

    for (let i = 0; i < countries.length; i++) {
      if (
        countriesList.value === "Україна" &&
        countries[i].name === "Україна"
      ) {
        countryCapital.innerText = countries[i].capital;
        countryPopulation.innerText = countries[i].population;
      } else if (
        countriesList.value === "Туреччина" &&
        countries[i].name === "Туреччина"
      ) {
        countryCapital.innerText = countries[i].capital;
        countryPopulation.innerText = countries[i].population;
      } else if (
        countriesList.value === "Іспанія" &&
        countries[i].name === "Іспанія"
      ) {
        countryCapital.innerText = countries[i].capital;
        countryPopulation.innerText = countries[i].population;
      } else if (
        countriesList.value === "Португалія" &&
        countries[i].name === "Португалія"
      ) {
        countryCapital.innerText = countries[i].capital;
        countryPopulation.innerText = countries[i].population;
      } else if (
        countriesList.value === "Франція" &&
        countries[i].name === "Франція"
      ) {
        countryCapital.innerText = countries[i].capital;
        countryPopulation.innerText = countries[i].population;
      }
    }
  });

  // Завдання 4: Форма для оцінювання якості обслуговування:

  let rating = document.querySelector(".rating");
  let [...radioBtns] = document.querySelectorAll(
    'input[name = "serviceRating"]'
  );

  radioBtns.forEach(function (radioButton) {
    radioButton.checked = false;
  });

  rating.addEventListener("change", function () {
    let ratingResult = "";
    for (item of radioBtns) {
      if (item.checked) {
        ratingResult = item.value;
        alert(`Дякуємо за Вашу оцінку. Ваша оцінка: ${ratingResult}`);
      }
    }
  });

  // Додаткове завдання:

  // name

  let pizzaNames = document.querySelector("#pizzaName");
  pizzaNames.selectedIndex = -1;
  let selectedPizza;

  pizzaNames.addEventListener("change", () => {
    let selectedOption = pizzaNames.options[pizzaNames.selectedIndex];
    selectedPizza = selectedOption.value;
  });

  // size

  let pizzaOrder = document.querySelector(".pizzaOrder");

  let [...pizzaRadioBtns] = document.querySelectorAll(
    'input[name = "pizzaSize"]'
  );
  pizzaRadioBtns.forEach(function (radioButton) {
    radioButton.checked = false;
  });
  let size = "S";
  let price = 100;
  let extra = [];
  let extraResult = "";

  // extra

  let [...pizzaCheckboxes] = document.querySelectorAll('input[name = "extra"]');

  pizzaCheckboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  pizzaOrder.addEventListener("change", function () {
    extra = [];
    price = 100;
    for (radiobutton of pizzaRadioBtns) {
      if (
        radiobutton.checked &&
        radiobutton.value !== "S" &&
        radiobutton.value === "M"
      ) {
        size = radiobutton.value;
        price += 50;
      } else if (
        radiobutton.checked &&
        radiobutton.value !== "S" &&
        radiobutton.value === "L"
      ) {
        size = radiobutton.value;
        price += 100;
      }
    }
    for (checkbox of pizzaCheckboxes) {
      if (checkbox.checked) {
        extra.push(checkbox.value);
        price += 20;
      }
    }
    extraResult = extra.join(", ");
  });

  // order button

  let orderBtn = document.querySelector(".order");

  orderBtn.addEventListener("click", function (e) {
    e.preventDefault();

    alert(
      `Ви замовили піцу: ${selectedPizza}, розмір: ${size}, додатково: ${extraResult}, вартість: ${price} гривень.`
    );
  });

  let resetButton3 = document.querySelector(".reset3");
  resetButton3.addEventListener("click", (e) => {
    e.preventDefault();
    pizzaNames.selectedIndex = -1;
    pizzaRadioBtns.forEach(function (radioButton) {
      radioButton.checked = false;
    });
    pizzaCheckboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  });
};
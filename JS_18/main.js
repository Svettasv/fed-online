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

    let selectedCountry = countries.find(
      (country) => country.name === countriesList.value
    );

    if (selectedCountry) {
      countryCapital.innerText = selectedCountry.capital;
      countryPopulation.innerText = selectedCountry.population;
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

  let pizzaNames = document.querySelector("#pizzaName");
  let selectedPizza;

  function resetSelections() {
    pizzaNames.selectedIndex = -1;
    pizzaRadioBtns.forEach(function (radioButton) {
      radioButton.checked = false;
    });
    pizzaCheckboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  }

  function calculatePrice() {
    price = 100; // base price
    for (radiobutton of pizzaRadioBtns) {
      if (radiobutton.checked) {
        if (radiobutton.value !== "S" && radiobutton.value === "M") {
          size = radiobutton.value;
          price += 50;
        } else if (radiobutton.value !== "S" && radiobutton.value === "L") {
          size = radiobutton.value;
          price += 100;
        }
      }
    }
    extra = [];
    for (checkbox of pizzaCheckboxes) {
      if (checkbox.checked) {
        extra.push(checkbox.value);
        price += 20;
      }
    }
    extraResult = extra.join(", ");
  }

  function handlePizzaChange() {
    let selectedOption = pizzaNames.options[pizzaNames.selectedIndex];
    selectedPizza = selectedOption.value;
  }

  function handleOrderClick(e) {
    e.preventDefault();
    calculatePrice();
    alert(
      `Ви замовили піцу: ${selectedPizza}, розмір: ${size}, додатково: ${extraResult}, вартість: ${price} гривень.`
    );
  }

  pizzaNames.addEventListener("change", handlePizzaChange);

  let pizzaOrder = document.querySelector(".pizzaOrder");
  let [...pizzaRadioBtns] = document.querySelectorAll(
    'input[name="pizzaSize"]'
  );
  pizzaRadioBtns.forEach(function (radioButton) {
    radioButton.checked = false;
  });
  let size = "S";
  let price = 100;
  let extra = [];
  let extraResult = "";

  let [...pizzaCheckboxes] = document.querySelectorAll('input[name="extra"]');
  pizzaCheckboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  pizzaOrder.addEventListener("change", calculatePrice);

  let orderBtn = document.querySelector(".order");
  orderBtn.addEventListener("click", handleOrderClick);

  let resetButton3 = document.querySelector(".reset3");
  resetButton3.addEventListener("click", resetSelections);
};

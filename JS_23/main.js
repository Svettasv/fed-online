window.onload = function () {
  // Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder (/users ендпойнт).
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));

  // Виведіть імена та електронні адреси користувачів у консоль або на веб-сторінку.
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        console.log(`Name: ${element.name}, email: ${element.email}`);
      });
    });

  // Виведення детальної інформації про одного користувача.
  // Зробіть запит до /users/1 (або будь-якого іншого ID), щоб отримати деталі про конкретного користувача.
  // Виведіть отриману інформацію в форматованому вигляді, включаючи ім'я, нікнейм та електронну адресу.
  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response) => response.json())
    .then((data) => {
      console.log(
        `Name: ${data.name}, nickname: ${data.username}, email: ${data.email}`
      );
    });

  // Отримання та відображення постів конкретного користувача
  // Використовуйте /posts?userId=1 для отримання постів певного користувача.
  fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
    .then((response) => response.json())
    .then((data) => console.log(data));

  // Виберіть та виведіть заголовки цих постів.

  fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        console.log(`An article title: ${element.title}`);
      })
    );

  // Зробити сторінку з кнопкою, при натиску на кнопку робиться запит до
  // http swapi.dev/api/planets/1/ та виводиться картка з даними з запиту, дані з масиву які мають лінк треба вивести в тег А і додати лінк в атрибут href

  const getInfoBtn = document.querySelector(".getInfo");
  const infoEl = document.querySelector(".info");
  getInfoBtn.addEventListener("click", function () {
    fetch("https://swapi.dev/api/planets/1/")
      .then((response) => response.json())
      .then((data) => {
        let divEl = document.createElement("div");
        divEl.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Ротаційний період:</strong> ${data.rotation_period}</p>
        <p><strong>Орбітальний період:</strong> ${data.orbital_period}</p>
        <p><strong>Діаметр:</strong> ${data.diameter}</p>
        <p><strong>Клімат:</strong> ${data.climate}</p>
        <p><strong>Гравітація:</strong> ${data.gravity}</p>
        <p><strong>Терен:</strong> ${data.terrain}</p>
        <p><strong>Поверхнева вода:</strong> ${data.surface_water}</p>
        <p><strong>Населення:</strong> ${data.population}</p>          
        `;

        infoEl.appendChild(divEl);

        let movieList = data.films;
        console.log(movieList);

        for (let i = 0; i < movieList.length; i++) {
          let linkEl = document.createElement("a");
          linkEl.innerHTML = `${i + 1}. Фільм`;
          linkEl.setAttribute("href", movieList[i]);
          linkEl.setAttribute("target", "_blank");
          linkEl.style.display = "block";
          infoEl.appendChild(linkEl);
        }
      });
  });
};

window.onload = function () {
  // Завдання 1: Отримання даних користувача з JSONPlaceholder

  async function userInfo(userId) {
    let result = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    let data = await result.json();
    console.log(`Name: ${data.name}, email: ${data.email}`);
  }

  userInfo(4);

  // Завдання 2: Виведення інформації про фільм з SWAPI

  async function filmInfo(filmID) {
    let result = await fetch(`https://swapi.dev/api/films/${filmID}`);
    let data = await result.json();
    console.log(
      `Film title: ${data.title}, release date: ${data.release_date}`
    );
  }

  filmInfo(4);

  // Завдання 3: Отримання і виведення інформації про планету з SWAPI

  async function planetInfo(planetID) {
    let result = await fetch(`https://swapi.dev/api/planets/${planetID}`);
    let data = await result.json();
    console.log(
      `The name of the planet: ${data.name}, the climate of the ${data.name}: ${data.climate}`
    );
  }

  planetInfo(1);
};

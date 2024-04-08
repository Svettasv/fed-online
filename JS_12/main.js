let hederEl = document.getElementById("header");
console.log(hederEl);

let divEl = document.getElementsByClassName("image");
console.log(divEl);

let sectionEl = document.getElementsByTagName("section");
console.log(sectionEl);

let firstListItem = document.querySelector("ul li:first-child");
console.log(firstListItem);

let lastListItem = document.querySelector("ul li:last-child");
console.log(lastListItem);

let thirdListItem = document.querySelector("ul li:nth-child(3)");
console.log(thirdListItem);

let allListItems = document.querySelectorAll("ul li");
console.log(allListItems);

let [...arrAllListItems] = allListItems;
console.log(arrAllListItems);

//Створіть на сторінці елемент який вибирається ціми селекторами

let listItems = document.querySelectorAll("ul.nav > li");
console.log(listItems);

let listItem = document.querySelectorAll("li:nth-child(2)");
console.log(listItem);

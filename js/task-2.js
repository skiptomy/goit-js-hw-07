"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const listOfIngredients = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const newElem = document.createElement("li");
  newElem.innerHTML = ingredients[i];
  listOfIngredients.appendChild(newElem);
}

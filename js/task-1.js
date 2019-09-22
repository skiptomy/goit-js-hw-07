"use strict";

const elem = document.querySelector("#categories");

console.log(`Всего в списке ${elem.childElementCount} категории`);

const item = elem.children;

for (let i = 0; i < item.length; i++) {
  console.log(
    "Категория: " +
      item[i].children[0].textContent +
      ", " +
      "Количество элементов: " +
      item[i].children[1].childElementCount
  );
}

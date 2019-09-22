"use strict";

const controls = document.querySelector("#controls");
const box = document.querySelector("#boxes");

controls.addEventListener("click", e => {
  const element = e.target;
  const input = controls.firstElementChild;
  const amount = input.value;
  if (element.dataset.action === "render") {
    createBoxes(amount);
  } else if (element.dataset.action === "destroy") {
    destroyBoxes();
  }
});

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    box.append(div);
  }
};

const destroyBoxes = () => {
  while (box.lastElementChild) {
    box.removeChild(box.lastElementChild);
  }
};

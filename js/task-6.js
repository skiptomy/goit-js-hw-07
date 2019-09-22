"use strict";

const input = document.querySelector("#validation-input");

input.addEventListener("blur", e => {
  const elem = e.currentTarget;
  if (elem.value.length == elem.dataset.length) {
    elem.className = "valid";
  } else {
    elem.className = "invalid";
  }
});

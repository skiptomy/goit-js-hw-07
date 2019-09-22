"use strict";

const range = document.querySelector("#font-size-slider");
const text = document.querySelector("#text");

range.addEventListener("input", e => {
  const countFontSize = e.currentTarget.value / 3.125;
  text.setAttribute("style", `font-size:${countFontSize}px`);
});

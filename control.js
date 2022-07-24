"use strict";

const inputs = document.querySelectorAll(".controls input");

const changeHandlr = function (e) {
  const px = e.target.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + px
  );
};

inputs.forEach((input) => {
  input.addEventListener("change", changeHandlr);
  input.addEventListener("mousemove", changeHandlr);
});

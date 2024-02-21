"use strict";

const inputTwo = document.querySelector(".input__two");
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const warning = document.querySelector(".warning");
const screen = document.querySelector(".screen");
const screenTwo = document.querySelector(".screen__two");
const buttonTwo = document.querySelector(".button__two");
const inputThree = document.querySelector(".input__three");

const openScreenTwo = function () {
  screen.classList.add("hidden");
  screenTwo.classList.remove("hidden");
};

const openWarning = function () {
  warning.classList.remove("hidden");
  inputTwo.classList.remove("hidden");
  input.classList.add("hidden");
};

const openScreenOne = function () {
  screen.classList.remove("hidden");
  screenTwo.classList.add("hidden");
  input.classList.add("hidden");
  inputThree.classList.remove("hidden");
};

/*
const screen__zwei = function () {
  screenTwo.classList.add("hidden");
  screen.classList.remove("hidden");
  document.getElementById("myText").value = "Johnny Bravo";
};
*/
button.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value === "") {
    openWarning();
  } else {
    openScreenTwo();
  }
});

buttonTwo.addEventListener("click", function (e) {
  e.preventDefault();
  openScreenOne();
});

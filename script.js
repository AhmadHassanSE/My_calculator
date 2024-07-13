"use strict";

// Initiation
let screen = document.querySelector(".screen");
let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let clear = document.querySelector(".clear");
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let equal = document.querySelector(".equal");

let currentValue = "";
let operator = null;
let previousValue = "";

function updateScreen(value) {
  screen.textContent = value;
}

function handleNumber(number) {
  currentValue += number;
  updateScreen(currentValue);
}

function handleOperator(op) {
  if (currentValue === "") return;
  if (previousValue !== "") {
    calculate();
  }
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "X":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }

  currentValue = result;
  operator = null;
  previousValue = "";
  updateScreen(result);
}

// Number buttons
zero.addEventListener("click", () => handleNumber("0"));
one.addEventListener("click", () => handleNumber("1"));
two.addEventListener("click", () => handleNumber("2"));
three.addEventListener("click", () => handleNumber("3"));
four.addEventListener("click", () => handleNumber("4"));
five.addEventListener("click", () => handleNumber("5"));
six.addEventListener("click", () => handleNumber("6"));
seven.addEventListener("click", () => handleNumber("7"));
eight.addEventListener("click", () => handleNumber("8"));
nine.addEventListener("click", () => handleNumber("9"));

// Operator buttons
plus.addEventListener("click", () => handleOperator("+"));
minus.addEventListener("click", () => handleOperator("-"));
multiply.addEventListener("click", () => handleOperator("X"));
divide.addEventListener("click", () => handleOperator("/"));

// Equal button
equal.addEventListener("click", () => calculate());

// Clear button
clear.addEventListener("click", () => {
  currentValue = "";
  previousValue = "";
  operator = null;
  updateScreen("");
});

"use strict";

// Q5 — Hoisting Lab: The Sequence Trap
// `var score` is hoisted and initialized to undefined, so the first log prints
// undefined. Function declarations are hoisted. `let status` is in the temporal
// dead zone until its declaration executes, so reading it before then throws.
// The corrected sequence below initializes variables before using them.

var score = 50;
console.log("Score:", score);

function announce() {
  console.log("Game started!");
}
announce();

let status = "ready";
function startGame() {
  console.log("Status:", status);
}
startGame();

// Arrow-function comparison: arrow functions are expressions, not hoisted like
// function declarations. They must be assigned before they are called.
const announceArrow = () => console.log("Game started via arrow function!");
announceArrow();

const startGameArrow = () => console.log("Status via arrow function:", status);
startGameArrow();

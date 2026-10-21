"use strict";

// Q1 — Dynamic Data Parser
// Number(...) converts values where possible; NaN is kept in the invalid list.
// Boolean(...) follows JavaScript truthiness (for example, Boolean("false") is true).
// String(...) converts every value, including null and undefined, to text.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
  const numberValue = Number(value);
  if (Number.isFinite(numberValue) && String(value).trim() !== "") {
    validNumbers.push(numberValue);
  } else {
    invalidNumbers.push(value);
  }

  console.log({
    original: value,
    number: numberValue,
    boolean: Boolean(value),
    string: String(value)
  });
}

console.log("Valid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);

console.log("\nDetailed report:");
for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  const numberValue = Number(value);
  const isValidNumber = Number.isFinite(numberValue) && String(value).trim() !== "";
  console.log(
    `#${i + 1}: value=${String(value)}, Number=${numberValue}, ` +
    `Boolean=${Boolean(value)}, String="${String(value)}", ` +
    `numeric status=${isValidNumber ? "valid" : "invalid"}`
  );
}

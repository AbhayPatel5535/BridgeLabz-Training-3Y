"use strict";

// Q4 — Debugging Mystery
// The original failed because assigning to undeclared `greeting` throws a
// ReferenceError in strict mode. `const` gives the variable an explicit scope.
// Set a breakpoint on console.log and inspect greeting and the call stack in DevTools.

function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
}

showMessage();

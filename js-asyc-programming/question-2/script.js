// Q2: Task Scheduler - Microtask vs Macrotask

console.log("Start");

// setTimeout callback is a macrotask (task).
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// A resolved Promise's then() callback is a microtask.
Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

// This synchronous statement runs before queued callbacks.
console.log("End");

// Expected order:
// Start
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// Explanation: JavaScript completes the current synchronous code first.
// Then it drains the microtask queue (Promise callbacks) before taking
// the next macrotask (the setTimeout callback).

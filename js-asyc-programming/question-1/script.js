// Q1: The Startup Morning - Async Coffee Maker

// Each step returns a Promise and takes about 1-2 seconds.
function boilWater() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Water boiled.");
      resolve("Boiling water completed");
    }, 1500);
  });
}

function brewCoffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Coffee brewed.");
      resolve("Brewing coffee completed");
    }, 1500);
  });
}

function pourCoffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Coffee poured into the cup.");
      resolve("Pouring coffee completed");
    }, 1500);
  });
}

// Promise chaining runs each step only after the previous one succeeds.
// Math.random() simulates an occasional failure.
boilWater()
  .then(() => brewCoffee())
  .then(() => pourCoffee())
  .then(() => {
    if (Math.random() < 0.25) {
      throw new Error("The coffee machine encountered a problem.");
    }
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    console.error("Coffee-making failed:", error.message);
  });

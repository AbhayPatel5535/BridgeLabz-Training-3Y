// Q3: Bug Tracker - Callback to Promise Migration

// Promise-based replacement for the original fetchBugs(callback).
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiFailed = Math.random() < 0.5; // Simulate random API failure.

      if (apiFailed) {
        reject(new Error("API timeout: unable to fetch bugs."));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// Log all bugs neatly using console.table().
getBugs()
  .then((bugs) => {
    console.table(bugs.map((bug, index) => ({
      number: index + 1,
      bug: bug
    })));
  })
  .catch((error) => {
    console.error("Bug tracker error:", error.message);
  });

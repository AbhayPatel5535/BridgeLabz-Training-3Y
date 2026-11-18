// Q5: Frontend Rush - Avoiding Callback Hell

// A helper that completes one pipeline stage after one second.
function runStage(stageName, callback) {
  setTimeout(() => {
    console.log(stageName);
    if (callback) callback();
  }, 1000);
}

// 1) Original style: nested callbacks (callback hell).
function runWithCallbacks() {
  console.log("Callback pipeline started");

  runStage("Design", () => {
    runStage("Build", () => {
      runStage("Test", () => {
        runStage("Deploy", () => {
          runStage("Celebrate", () => {
            console.log("Callback pipeline completed");
            // Start the cleaner version after this demo finishes.
            runWithAsyncAwait();
          });
        });
      });
    });
  });
}

// Promise version of one pipeline stage.
function runStageAsPromise(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(stageName);
      resolve();
    }, 1000);
  });
}

// 2) Cleaner style: async/await.
async function runWithAsyncAwait() {
  console.log("Async/await pipeline started");

  await runStageAsPromise("Design");
  await runStageAsPromise("Build");
  await runStageAsPromise("Test");
  await runStageAsPromise("Deploy");
  await runStageAsPromise("Celebrate");

  console.log("Async/await pipeline completed");
}

// Start the callback demonstration. The async/await version starts
// after it, so the two sets of five steps do not overlap.
runWithCallbacks();

// Why async/await improves readability:
// - It lets asynchronous code look similar to step-by-step code.
// - It avoids deeply nested callback functions.
// - Errors can be handled with familiar try/catch blocks when needed.
// - Each await makes the order of the pipeline clear.

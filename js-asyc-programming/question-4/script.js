// Q4: DevOps Delay - Async Timeout Race

// Each server responds after its specified delay.
// A random failure is simulated independently for each server.
function contactServer(serverName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const serverFailed = Math.random() < 0.25;

      if (serverFailed) {
        reject(new Error(`${serverName} failed to respond.`));
      } else {
        resolve(`${serverName} responded successfully.`);
      }
    }, delay);
  });
}

const serverA = contactServer("Server A", 2000);
const serverB = contactServer("Server B", 3000);

// Promise.all() fulfills when both servers fulfill.
// It rejects if either server rejects.
Promise.all([serverA, serverB])
  .then((responses) => {
    console.log("Deployment completed for all servers:");
    responses.forEach((response) => console.log(response));
  })
  .catch((error) => {
    console.error("Promise.all() error:", error.message);
  });

// Promise.race() settles as soon as the first Promise settles.
// That first result may be a success or a failure.
Promise.race([
  contactServer("Server A (race)", 2000),
  contactServer("Server B (race)", 3000)
])
  .then((response) => {
    console.log("Fastest response:", response);
  })
  .catch((error) => {
    console.error("Promise.race() error:", error.message);
  });

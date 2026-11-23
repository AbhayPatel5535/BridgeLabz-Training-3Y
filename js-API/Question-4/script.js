document.addEventListener("DOMContentLoaded", function () {
  const endpoints = [
    { url: "http://localhost:3004/users", element: "usersCount" },
    { url: "http://localhost:3004/orders", element: "ordersCount" },
    { url: "http://localhost:3004/products", element: "productsCount" }
  ];

  // Promise.all starts all three Fetch requests together and waits for every response.
  const requests = endpoints.map(function (endpoint) {
    return fetch(endpoint.url).then(function (response) {
      if (!response.ok) throw new Error("API request failed: " + endpoint.url);
      return response.json();
    });
  });

  Promise.all(requests)
    .then(function (results) {
      results.forEach(function (records, index) {
        const element = document.getElementById(endpoints[index].element);
        element.className = "count";
        element.textContent = records.length;
      });
    })
    .catch(function () {
      // If any endpoint fails, keep the dashboard visible and show the required warning.
      document.getElementById("warning").textContent = "Some data could not be loaded.";
      endpoints.forEach(function (endpoint) {
        const element = document.getElementById(endpoint.element);
        element.className = "count";
        if (element.classList.contains("skeleton")) element.textContent = "—";
      });
      // Load successful endpoints individually so their counts can still be displayed.
      endpoints.forEach(function (endpoint) {
        fetch(endpoint.url)
          .then(function (response) {
            if (!response.ok) throw new Error("Request failed");
            return response.json();
          })
          .then(function (records) {
            const element = document.getElementById(endpoint.element);
            element.className = "count";
            element.textContent = records.length;
          })
          .catch(function () {
            document.getElementById(endpoint.element).textContent = "—";
          });
      });
    });
});

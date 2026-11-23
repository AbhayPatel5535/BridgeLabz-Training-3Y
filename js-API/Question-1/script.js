$(document).ready(function () {
  const API_URL = "http://localhost:3001/products";
  let searchRequest = null;

  // Listen for every input change and send the entered value as the q query parameter.
  $("#searchInput").on("input", function () {
    const value = $(this).val().trim();

    if (searchRequest) searchRequest.abort();
    if (!value) {
      $("#results").empty();
      $("#status").text("Enter a product name to begin.");
      return;
    }

    $("#status").text("Loading products...");
    $("#results").empty();

    // jQuery AJAX sends GET /products?q=value and returns matching JSON records.
    searchRequest = $.ajax({
      url: API_URL,
      method: "GET",
      data: { q: value },
      dataType: "json"
    })
    .done(function (products) {
      $("#results").empty();

      if (products.length === 0) {
        $("#status").text("No products found.");
        return;
      }

      $("#status").text(products.length + " product(s) found.");
      products.forEach(function (product) {
        const card = $("<article>").addClass("product");
        $("<img>").attr({ src: product.image, alt: product.name }).appendTo(card);
        $("<h2>").text(product.name).appendTo(card);
        $("<p>").addClass("price").text("₹" + product.price).appendTo(card);
        $("#results").append(card);
      });
    })
    .fail(function (xhr, status) {
      if (status !== "abort") $("#status").text("Unable to load products. Is JSON Server running on port 3001?");
    });
  });
});

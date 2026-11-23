$(document).ready(function () {
  // Clicking a product highlights it and removes the highlight from other products.
  $(".product").on("click", function (event) {
    if ($(event.target).hasClass("favorite")) return;
    $(".product").removeClass("highlighted");
    $(this).addClass("highlighted");

    // Read the custom data attribute to warn when an item is unavailable.
    if ($(this).data("stock") === "out") {
      alert("Sorry, this product is currently out of stock.");
    }
  });

  // Reveal extra information while the pointer is over a product.
  $(".product").hover(
    function () { $(this).find(".details").stop(true, true).slideDown(180); },
    function () { $(this).find(".details").stop(true, true).slideUp(180); }
  );

  // Toggle the selected class and heart icon for each favorite button.
  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected") ? "♥" : "♡");
  });

  // Attribute selector styles all products whose data-discount value is true.
  $('.product[data-discount="true"]').append('<p class="discount-note">Special deal available</p>');
});

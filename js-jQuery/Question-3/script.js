$(document).ready(function () {
  // Click a question to toggle only the answer belonging to that FAQ item.
  $(".question").on("click", function () {
    $(this).siblings(".answer").stop(true, true).slideToggle();
  });

  // Hover changes the question color to make it feel interactive.
  $(".question").hover(
    function () { $(this).css("color", "#2457a6"); },
    function () { $(this).css("color", ""); }
  );

  // Double-clicking a question collapses every answer in the FAQ section.
  $(".question").on("dblclick", function () {
    $(".answer").stop(true, true).slideUp();
    $(".faq-item").removeClass("focused");
  });

  // Focus on an answer input highlights its parent FAQ item.
  $(".answer input").on("focus", function () {
    $(this).closest(".faq-item").addClass("focused");
  });

  // Blur removes the highlight and resets the parent background.
  $(".answer input").on("blur", function () {
    $(this).closest(".faq-item").removeClass("focused");
  });

  $("#collapseAll").on("click", function () {
    $(".answer").stop(true, true).slideUp();
    $(".faq-item").removeClass("focused");
  });
});

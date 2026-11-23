$(document).ready(function () {
  // Choose a greeting according to the visitor's local time.
  const hour = new Date().getHours();
  let greeting = "Good Evening!";
  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 17) {
    greeting = "Good Afternoon!";
  }
  $("#greeting").text(greeting);

  const quotes = [
    "Believe you can and you're halfway there.",
    "Small steps every day lead to big results.",
    "Your only limit is the one you set yourself.",
    "Make today so awesome that yesterday gets jealous.",
    "Great things are done by a series of small things brought together."
  ];

  // Change Greeting replaces the time-based greeting with a motivational quote.
  $("#changeGreeting").on("click", function () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#greeting").text(randomQuote);
    alert("Here's a little motivation for you!");
  });

  // Toggle the welcome message without removing it from the page.
  $("#toggleWelcome").on("click", function () {
    $("#welcomeMessage").toggle();
    const isVisible = $("#welcomeMessage").is(":visible");
    $(this).text(isVisible ? "Hide Welcome Message" : "Show Welcome Message");
  });

  $("#showAlert").on("click", function () {
    alert($("#greeting").text());
  });
});

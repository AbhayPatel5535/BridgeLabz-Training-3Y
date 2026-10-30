const themeButtons = document.querySelectorAll("[data-theme-choice]");
const currentThemeText = document.getElementById("currentTheme");

function applyTheme(themeName) {
  // setAttribute is used for both the CSS class and the custom data-theme attribute.
  document.body.setAttribute("class", themeName);
  document.body.setAttribute("data-theme", themeName);
  currentThemeText.textContent = themeName;
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-choice"));
  });
});

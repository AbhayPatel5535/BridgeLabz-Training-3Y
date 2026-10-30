const messageBox = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const MAX_CHARACTERS = 100;

// Update the remaining count and warning colour.
function updateCounter() {
  const remaining = MAX_CHARACTERS - messageBox.value.length;
  counter.textContent = `${remaining} characters remaining`;

  counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
  counter.classList.toggle("limit", remaining === 0);
}

messageBox.addEventListener("input", updateCounter);

// beforeinput fires before text is inserted, so preventDefault blocks extra characters.
messageBox.addEventListener("beforeinput", (event) => {
  const addsText = event.inputType.startsWith("insert");
  if (addsText && messageBox.value.length >= MAX_CHARACTERS) {
    event.preventDefault();
  }
});

// Also block a paste that would make the text longer than 100 characters.
messageBox.addEventListener("paste", (event) => {
  const pastedText = (event.clipboardData || window.clipboardData).getData("text");
  const selectedLength = messageBox.selectionEnd - messageBox.selectionStart;
  const resultingLength = messageBox.value.length - selectedLength + pastedText.length;

  if (resultingLength > MAX_CHARACTERS) {
    event.preventDefault();
    const allowedText = pastedText.slice(0, MAX_CHARACTERS - (messageBox.value.length - selectedLength));
    document.execCommand("insertText", false, allowedText);
  }
});

resetButton.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
  messageBox.focus();
});

updateCounter();

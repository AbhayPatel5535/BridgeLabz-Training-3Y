const form = document.getElementById("multiStepForm");
const steps = document.querySelectorAll(".step");
const stepTitle = document.getElementById("stepTitle");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");
let currentStep = 0;

const stepNames = ["Name", "Email", "Password"];

function showStep(index) {
  steps.forEach((step, stepIndex) => {
    step.classList.toggle("active", stepIndex === index);
  });

  currentStep = index;
  stepTitle.textContent = `Step ${index + 1} of 3: ${stepNames[index]}`;
  backButton.hidden = index === 0;
  nextButton.textContent = index === steps.length - 1 ? "Submit" : "Next";
}

function currentInputIsValid() {
  const input = steps[currentStep].querySelector("input");
  input.value = input.value.trim();

  if (!input.checkValidity()) {
    input.reportValidity();
    return false;
  }
  return true;
}

nextButton.addEventListener("click", () => {
  // Do not continue until the current step's input passes validation.
  if (!currentInputIsValid()) return;

  if (currentStep < steps.length - 1) {
    showStep(currentStep + 1);
  } else {
    document.getElementById("summaryName").textContent =
      `Name: ${document.getElementById("name").value}`;
    document.getElementById("summaryEmail").textContent =
      `Email: ${document.getElementById("email").value}`;

    form.hidden = true;
    stepTitle.hidden = true;
    summary.hidden = false;
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) showStep(currentStep - 1);
});

document.getElementById("editButton").addEventListener("click", () => {
  summary.hidden = true;
  form.hidden = false;
  stepTitle.hidden = false;
  showStep(0);
});

form.addEventListener("submit", (event) => event.preventDefault());

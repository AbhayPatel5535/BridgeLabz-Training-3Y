// Q2: Student Form Validator (Forms + RegExp)
const studentForm = document.getElementById("studentForm");

const validationRules = {
  name: {
    pattern: /^[A-Za-z]+$/,
    message: "Name must contain alphabets only."
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address."
  },
  phone: {
    pattern: /^\d{10}$/,
    message: "Phone number must contain exactly 10 digits."
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    message: "Password needs an uppercase letter, a number, and a special character."
  }
};

function validateField(fieldName) {
  const input = studentForm.elements[fieldName];
  const errorElement = document.getElementById(`${fieldName}Error`);
  const value = input.value.trim();
  const rule = validationRules[fieldName];
  const isValid = rule.pattern.test(value);

  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  errorElement.textContent = isValid ? "" : (value ? rule.message : "This field is required.");
  return isValid;
}

Object.keys(validationRules).forEach(fieldName => {
  studentForm.elements[fieldName].addEventListener("input", () => validateField(fieldName));
});

studentForm.addEventListener("submit", event => {
  event.preventDefault();
  const isFormValid = Object.keys(validationRules).map(validateField).every(Boolean);
  const result = document.getElementById("result");

  if (isFormValid) {
    result.style.color = "green";
    result.textContent = "Registration form is valid!";
  } else {
    result.style.color = "#dc3545";
    result.textContent = "Please correct the highlighted fields.";
  }
});

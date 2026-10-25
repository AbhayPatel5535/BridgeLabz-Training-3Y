// Q5: Movie Ticket Booking (Objects + RegExp)
const bookingForm = document.getElementById("bookingForm");

const bookingRules = {
  name: {
    input: bookingForm.elements.name,
    error: document.getElementById("nameError"),
    pattern: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    message: "Enter a name using alphabets only."
  },
  email: {
    input: bookingForm.elements.email,
    error: document.getElementById("emailError"),
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address."
  }
};

function validateTextField(fieldName) {
  const field = bookingRules[fieldName];
  const value = field.input.value.trim();
  const isValid = field.pattern.test(value);

  field.input.classList.toggle("valid", isValid);
  field.input.classList.toggle("invalid", !isValid);
  field.error.textContent = isValid ? "" : (value ? field.message : "This field is required.");
  return isValid;
}

Object.keys(bookingRules).forEach(fieldName => {
  bookingRules[fieldName].input.addEventListener("input", () => validateTextField(fieldName));
});

bookingForm.addEventListener("submit", event => {
  event.preventDefault();

  const nameValid = validateTextField("name");
  const emailValid = validateTextField("email");
  const seatsInput = bookingForm.elements.seats;
  const seatsError = document.getElementById("seatsError");
  const seatsValue = seatsInput.value.trim();
  const seatCount = Number(seatsValue);
  const seatsValid = seatsValue !== "" && Number.isInteger(seatCount) && seatCount >= 1 && seatCount <= 10;

  seatsInput.classList.toggle("valid", seatsValid);
  seatsInput.classList.toggle("invalid", !seatsValid);
  seatsError.textContent = seatsValid ? "" : "Choose a whole number of seats from 1 to 10.";

  const ticketSection = document.getElementById("ticket");
  if (!(nameValid && emailValid && seatsValid)) {
    ticketSection.hidden = true;
    return;
  }

  // Store successful booking details in an object.
  const booking = {
    name: bookingRules.name.input.value.trim(),
    email: bookingRules.email.input.value.trim(),
    seats: seatCount
  };

  document.getElementById("ticketDetails").textContent =
    `Name: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
  ticketSection.hidden = false;
});

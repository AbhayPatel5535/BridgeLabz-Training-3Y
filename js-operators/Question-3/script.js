// Calculate values for the dashboard
let x = 16.75;
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted summary
console.log(`Number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot}
Power of 3: ${cube}
Random number (10-50): ${randomNumber}`);

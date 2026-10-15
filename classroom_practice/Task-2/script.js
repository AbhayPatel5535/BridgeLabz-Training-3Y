//OTP Generator of 4 digit
function generateOtp(){
    let min = 1000;
    let max = 9999;
    let otp = Math.floor(Math.random()*(max-min)) + min;
    console.log('OTP: ' + otp);
}
generateOtp();

// Task 2
// Click via mouse;
// Make a button in index.html and link using the function made in java script;
// This is called as events;
// Set security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check whether the system is secure
function checkSecurity() {
    if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity();

// Test another outcome
isOwnerInside = false;
checkSecurity();

// Test one more outcome
isOwnerInside = true;
isAlarmOn = false;
checkSecurity();

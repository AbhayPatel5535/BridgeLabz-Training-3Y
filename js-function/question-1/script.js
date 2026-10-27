// Q1: Call a callback after greeting the user.

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstrate callback flow.
greetUser("Abhay", showEndMessage);

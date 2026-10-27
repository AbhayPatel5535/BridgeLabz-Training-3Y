// Q3: An arrow function does not get its own `this`.
// This file is loaded as an ES module, where top-level `this` is undefined.
// Optional chaining lets us demonstrate the undefined value without an error.

const user = {
    name: "Abhay",
    showName: () => {
        console.log("Arrow function this?.name:", this?.name);
    }
};

user.showName(); // undefined: arrow functions capture `this` from the outer scope.

// Fix: use a normal method function, which receives `this` from the call site.
user.showName = function () {
    console.log("Normal function this.name:", this.name);
};

user.showName(); // Abhay

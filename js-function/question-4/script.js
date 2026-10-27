// Q4: Share a method through Car.prototype.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.getDetails();
car2.getDetails();

// Both objects use the same shared prototype method.
console.log(
    "Shared method:",
    car1.getDetails === car2.getDetails
); // true

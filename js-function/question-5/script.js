// Q5: Student inherits from Person using the prototype chain.

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); // Reuse Person's constructor to set name.
    this.branch = branch;
}

// Inherit Person.prototype methods and restore the constructor reference.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Abhay", "Computer Science");

student1.showName();   // Inherited from Person.prototype
student1.showBranch(); // Defined on Student.prototype

console.log(
    "Student inherits from Person:",
    Person.prototype.isPrototypeOf(Student.prototype)
); // true

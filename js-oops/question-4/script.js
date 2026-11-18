// Q4: Employee Inheritance + Runtime Polymorphism

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // Calls the Employee constructor.
    this.teamSize = teamSize;
  }

  // Method overriding: Manager provides its own version of work().
  work() {
    return `${this.name} manages the ${this.department} department and a team of ${this.teamSize} people.`;
  }
}

const employees = [
  new Employee("Riya", "Design"),
  new Manager("Arjun", "Engineering", 8)
];

const output = document.getElementById("output");

// Runtime polymorphism: the work() method that runs depends on
// the actual object (Employee or Manager).
employees.forEach((person) => {
  const message = person.work();
  console.log(message);

  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  output.appendChild(paragraph);
});

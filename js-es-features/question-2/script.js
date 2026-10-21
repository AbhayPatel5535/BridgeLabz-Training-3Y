"use strict";

// Q2 — Employee Bonus Calculator
// Strict mode prevents accidental creation of global variables.
// Conversion and property access are wrapped in try...catch for clear error reporting.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
  try {
    if (employee == null) throw new TypeError("Employee record is missing.");
    if (employee.name == null || employee.salary == null || employee.years == null) {
      throw new TypeError("Required employee property is missing.");
    }

    const salary = Number(employee.salary);
    const years = Number(employee.years);
    if (!Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Salary or years could not be converted to a number.");
    }

    const bonusRate = years > 3 ? 0.1 : 0.05;
    const bonus = salary * bonusRate;

    console.log(
      `${employee.name}: salary ₹${salary.toLocaleString("en-IN")}, ` +
      `years ${years}, bonus rate ${bonusRate * 100}%, ` +
      `bonus ₹${bonus.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`
    );
  } catch (error) {
    console.error(`Could not calculate employee bonus: ${error.message}`);
  }
}

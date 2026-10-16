// Global bonus
let bonus = 5000;

// Calculate salary using local variables
function calculateSalary(isPermanent) {
    let salary = 40000;
    let totalSalary = salary;

    if (isPermanent) {
        totalSalary = salary + bonus;
    }

    console.log("Permanent:", isPermanent);
    console.log("Total salary:", totalSalary);
    console.log("Global bonus:", bonus);
}

calculateSalary(true);
calculateSalary(false);

// Changing isPermanent does not change the global bonus
console.log("Bonus after function calls:", bonus);

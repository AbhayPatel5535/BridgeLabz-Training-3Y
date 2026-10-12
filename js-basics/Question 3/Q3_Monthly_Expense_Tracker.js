// Q3: Monthly Expense Tracker
const expenses = [5000, 1500, 8000, 2000, 1200]; // food, travel, rent, bills, leisure
let total = 0;

for (const expense of expenses) {
    total += expense;
}

const average = total / expenses.length;
const tax = total * 0.10;
total += tax;

console.log(`Total before tax: ${ (total - tax).toFixed(2) }`);
console.log(`Average expense: ${ average.toFixed(2) }`);
console.log(`Final amount after 10% tax: ${ total.toFixed(2) }`);

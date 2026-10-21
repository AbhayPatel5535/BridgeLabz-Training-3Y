"use strict";

// Q3 — Transaction Validator
// Custom error classes make failures easy to categorize.
// In VS Code, set a breakpoint on the loop and inspect transaction, valid, and invalid.

class TransactionValidationError extends Error {
  constructor(message, category = "invalid") {
    super(message);
    this.name = "TransactionValidationError";
    this.category = category;
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

for (const transaction of transactions) {
  try {
    if (transaction === null || transaction === undefined) {
      throw new TransactionValidationError("Null transaction entry.");
    }
    if (transaction.id === undefined || transaction.id === null ||
        transaction.amount === undefined || transaction.amount === null) {
      throw new TransactionValidationError("Missing amount or id.");
    }
    if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
      throw new TransactionValidationError("Amount must be a finite number.");
    }
    if (transaction.amount < 0) {
      throw new TransactionValidationError("Negative amount.");
    }

    valid.push(transaction);
    console.log(`Transaction ${transaction.id} accepted: amount ${transaction.amount}`);
  } catch (error) {
    invalid.push({ transaction, error: error.message, type: error.name });
    console.error(`Transaction rejected: ${error.name}: ${error.message}`);
  }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Final report: ${valid.length} successful, ${invalid.length} failed.`);

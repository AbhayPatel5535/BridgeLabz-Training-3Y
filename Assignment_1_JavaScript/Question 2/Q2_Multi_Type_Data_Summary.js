// Q2: Multi-Type Data Summary
const userName = "Abhay";
const age = 20;
const isStudent = true;
const subjects = ["HTML", "CSS", "JavaScript"];
const user = { name: "Abhay", city: "Mathura" };
const emptyValue = null;
let unknownValue;

const entries = [
    { label: "User Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Is Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "User Object", value: user, type: typeof user },
    { label: "Empty Value", value: emptyValue, type: "null" },
    { label: "Unknown Value", value: unknownValue, type: typeof unknownValue }
];

console.table(entries);

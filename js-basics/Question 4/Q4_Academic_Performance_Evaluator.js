// Q4: Academic Performance Evaluator
const marks = [88, 76, 91, 82, 79]; // marks out of 100
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const percentage = totalMarks / marks.length;
const hasFailedSubject = marks.some(mark => mark < 35);

console.log(`Average: ${percentage.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);

if (hasFailedSubject) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

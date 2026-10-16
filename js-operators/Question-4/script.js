// Create 8 random scores from 30 to 100
let scores = [];

for (let i = 0; i < 8; i++) {
    let score = Math.floor(Math.random() * 71) + 30;
    scores.push(score);
}

// Calculate score statistics
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let total = scores.reduce(function(sum, score) {
    return sum + score;
}, 0);
let average = total / scores.length;
let passedStudents = scores.filter(function(score) {
    return score >= 50;
});
let updatedScores = scores.map(function(score) {
    return score;
});

// Display summary
console.log(`Scores: ${updatedScores.join(", ")}
Highest score: ${highest}
Lowest score: ${lowest}
Average score: ${average.toFixed(2)}
Students passed: ${passedStudents.length}`);

// Q1: Student Result Processing (reduce + Classes)

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // reduce() adds all marks; divide by the number of subjects.
  calculateAverage() {
    if (this.marks.length === 0) {
      return 0;
    }

    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const average = this.calculateAverage();

    if (average >= 90) return "A";
    if (average >= 75) return "B";
    if (average >= 60) return "C";
    if (average >= 40) return "D";
    return "F";
  }
}

// Test the Student class with 3 students.
const students = [
  new Student("Aarav", [92, 88, 95, 90]),
  new Student("Diya", [78, 82, 75, 80]),
  new Student("Kabir", [35, 42, 38, 40])
];

const output = document.getElementById("output");

students.forEach((student) => {
  const average = student.calculateAverage();
  const result = `${student.name} | Average: ${average.toFixed(2)} | Grade: ${student.getGrade()}`;
  console.log(result);

  const paragraph = document.createElement("p");
  paragraph.textContent = result;
  output.appendChild(paragraph);
});

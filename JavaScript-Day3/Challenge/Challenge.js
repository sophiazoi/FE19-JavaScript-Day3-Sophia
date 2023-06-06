let Students = ["John", "Jane"];
let MathGrades = [70, 85];

let name = prompt("Enter your name:");

let index = Students.indexOf(name);

if (index !== -1) {
  let grade = MathGrades[index];

  let gradeColor = "";
  if (grade < 60) {
    gradeColor = "red";
  } else if (grade >= 60 && grade < 70) {
    gradeColor = "yellow";
  } else if (grade >= 70 && grade < 100) {
    gradeColor = "green";
  } else if (grade === 100) {
    gradeColor = "blue";
  }

  let message = name + " has reached " + grade + " points in Math this season.";
  document.write('<p style="color: ' + gradeColor + ';">' + message + "</p>");
} else {
  document.write("<p>Student not found.</p>");
}

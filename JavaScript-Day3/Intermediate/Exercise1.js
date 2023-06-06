let points = [
  [76, 64, 81, 57, 94], // Martin
  [85, 49, 81, 72, 55], // Thomas
  [65, 91, 84, 67, 85], // Klaus
  [93, 70, 81, 64, 84], // Maria
  [81, 99, 71, 100, 69], // David
];

// Calculate average grade for a given points array
function calculateGrade(points) {
  let sum = points.reduce(function (a, b) {
    return a + b;
  }, 0);
  let average = sum / points.length;

  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else {
    return "A";
  }
}

// Output average grade for each student
for (let i = 0; i < points.length; i++) {
  let studentPoints = points[i];
  let averageGrade = calculateGrade(studentPoints);
  console.log("Student " + (i + 1) + " Average Grade: " + averageGrade);
}

// Calculate class average
let classPoints = points.flat();
let classAverage =
  classPoints.reduce(function (a, b) {
    return a + b;
  }, 0) / classPoints.length;

// Output class average
console.log("Class Average: " + classAverage.toFixed(2));

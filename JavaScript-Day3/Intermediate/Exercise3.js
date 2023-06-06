let rows = 6; // Number of rows in the form

for (let i = 1; i <= rows; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

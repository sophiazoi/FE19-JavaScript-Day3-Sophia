let numbers = [1, 7, -3, 9];

let max = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);

// https://adventofcode.com/2021/day/1

const extract = require('../extract');

// Part 1
let depths = extract('./input.txt').map(el => parseInt(el, 10));
let increases = 0;

for (let i = 1; i < depths.length; i++) {
  if (depths[i] > depths[i-1]) {
    increases++;
  }
}

console.log(`Part 1 solution: ${increases}`);

// Part 2
let prevSum = depths[0] + depths[1] + depths[2];
increases = 0;

for (let i = 3; i < depths.length; i++) {
  let sum = depths[i] + depths[i-1] + depths[i-2];
  if (sum > prevSum) {
    increases++;
  }
  prevSum = sum;
}

console.log(`Part 2 solution: ${increases}`);

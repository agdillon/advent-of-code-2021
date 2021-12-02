// https://adventofcode.com/2021/day/2

const extract = require('../extract');

// Part 1
let instructions = extract('./input.txt').map((el) => {
  let tuple = el.split(' ');
  tuple[1] = parseInt(tuple[1], 10);
  return tuple;
});
let horiz = 0;
let depth = 0;

for (let i = 0; i < instructions.length; i++) {
  switch(instructions[i][0]) {
    case 'forward':
    horiz += instructions[i][1];
    break;
    case 'up':
    depth -= instructions[i][1];
    break;
    case 'down':
    depth += instructions[i][1];
  }
}

console.log(`Part 1 solution: ${horiz * depth}`);

// Part 2
let aim = 0;
horiz = 0;
depth = 0;

for (let i = 0; i < instructions.length; i++) {
  switch(instructions[i][0]) {
    case 'forward':
    horiz += instructions[i][1];
    depth += aim * instructions[i][1];
    break;
    case 'up':
    aim -= instructions[i][1];
    break;
    case 'down':
    aim += instructions[i][1];
  }
}

console.log(`Part 2 solution: ${horiz * depth}`);

// https://adventofcode.com/2021/day/3

const extract = require('../extract');

// Part 1
let numbers = extract('./input.txt');
let gamma = 0;
let epsilon = 0;
let totalOnes = [];
let gammaStr = '';

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  for (let j = number.length - 1; j >= 0; j--) {
    let lastBit = number[number.length - 1];
    if (lastBit === '1') {
      if (totalOnes[j] === undefined) {
        totalOnes[j] = 0;
      }
      totalOnes[j]++;
    }
    number = number.slice(0, number.length - 1);
  }
}

for (let i = 0; i < totalOnes.length; i++) {
  if (totalOnes[i] >= numbers.length / 2) {
    gammaStr += '1';
  } else {
    gammaStr += '0';
  }
}

epsilonStr = gammaStr.split('').map((bit) => bit === '1' ? '0' : '1').join('');

gamma = parseInt(gammaStr, 2);
epsilon = parseInt(epsilonStr, 2);

console.log(`Part 1 solution: ${gamma * epsilon}`);

// Part 2
function bitCriteria(arr, pos, flip) {
  let total = arr.reduce((total, num) => total + parseInt(num[pos], 10), 0);

  if (total >= arr.length / 2) {
    return flip ? '0' : '1';
  } else {
    return flip ? '1' : '0';
  }
}

function filterByBitCriteria(arr, flip) {
  let arrCopy = [...arr];
  let current = 0;
  while (arrCopy.length > 1) {
      let newArrCopy = [];
      let bitCriterion = bitCriteria(arrCopy, current, flip);
      for (let i = 0; i < arrCopy.length; i++) {
        if (arrCopy[i][current] === bitCriterion) {
          newArrCopy.push(arrCopy[i]);
        }
      }
      current++;
      arrCopy = newArrCopy;
  }

  return arrCopy[0];
}

let o2Rating = parseInt(filterByBitCriteria(numbers, false), 2);
let cO2Rating = parseInt(filterByBitCriteria(numbers, true), 2);

console.log(`Part 2 solution: ${o2Rating * cO2Rating}`);

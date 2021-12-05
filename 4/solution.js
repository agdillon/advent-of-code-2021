// https://adventofcode.com/2021/day/4

const extract = require('../extract');

// Part 1
let lines = extract('./input.txt');
let numbers = lines[0].split(',').map((n) => parseInt(n, 10));
let boards = [];
let calledNumIndex = 0;
let winningBoard;

for (let i = 1; i < lines.length; i += 6) {
  let board = [];
  lines.slice(i + 1, i + 6).forEach((line) => {
    board.push(line.split(' ').filter((el) => el !== '').map((el) => {
      return { value: parseInt(el, 10), marked: false };
    }));
  });
  boards.push(board);
}

while(!winningBoard && calledNumIndex < numbers.length) {
  for (let i = 0; i < boards.length; i++) {
    for (let j = 0; j < boards[i].length; j++) {
      for (let k = 0; k < boards[i][j].length; k++) {
        if (boards[i][j][k].value === numbers[calledNumIndex]) {
          boards[i][j][k].marked = true;

          if (boards[i][j].every((cell) => cell.marked) ||
          boards[i].every((row) => row[k].marked)) {
            winningBoard = boards[i];
          }
        }
      }
    }
  }

  if (!winningBoard) calledNumIndex++;
}

let unmarkedNumbers = 0;
for (let i = 0; i < winningBoard.length; i++) {
  for (let j = 0; j < winningBoard[i].length; j++) {
    if (!winningBoard[i][j].marked) {
      unmarkedNumbers += winningBoard[i][j].value;
    }
  }
}

let score = unmarkedNumbers * numbers[calledNumIndex];

console.log(`Part 1 solution: ${score}`);

// Part 2
calledNumIndex = 0;

for (let i = 0; i < boards.length; i++) {
  for (let j = 0; j < boards[i].length; j++) {
    for (let k = 0; k < boards[i][j].length; k++) {
      boards[i][j][k].marked = false;
    }
  }
}

let boardHasWon = Array(boards.length).fill(false);

while(boardHasWon.some((el) => !el) && calledNumIndex < numbers.length) {
  for (let i = 0; i < boards.length; i++) {
    for (let j = 0; j < boards[i].length; j++) {
      for (let k = 0; k < boards[i][j].length; k++) {
        if (boards[i][j][k].value === numbers[calledNumIndex]) {
          boards[i][j][k].marked = true;

          if (boardHasWon.some((el) => !el) &&
            (boards[i][j].every((cell) => cell.marked) ||
          boards[i].every((row) => row[k].marked))) {
            winningBoard = boards[i];
            boardHasWon[i] = true;
          }
        }
      }
    }
  }

  calledNumIndex++;
}

unmarkedNumbers = 0;
for (let i = 0; i < winningBoard.length; i++) {
  for (let j = 0; j < winningBoard[i].length; j++) {
    if (!winningBoard[i][j].marked) {
      unmarkedNumbers += winningBoard[i][j].value;
    }
  }
}

score = unmarkedNumbers * numbers[calledNumIndex - 1];

console.log(`Part 2 solution: ${score}`);

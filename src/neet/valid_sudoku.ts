let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function isValidSudoku(board: string[][]): boolean {
  let set = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let current = board[i][j];
      if (current === ".") continue;
      let row = current + " in row " + i;
      let col = current + " in col " + j;
      let box =
        current + " in box " + Math.floor(i / 3) + "-" + Math.floor(j / 3);
      if (set.has(row) || set.has(col) || set.has(box)) return false;
      set.add(row).add(col).add(box);
    }
  }
  return true;
}

console.log(isValidSudoku(board));

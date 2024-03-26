/* 37. Sudoku Solver
A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

TC : O(9^n^2)
SC O(1), just for recursion stack.

*/
const sudokuSolver = (board) => {
  solution(board);
}
function solution(board){
  for(let i=0; i<board.length; i++){
    for(let j=0; j<board[0].length; j++){
      if(board[i][j] !== '.') continue;

      for(let ch = 1; ch<=9; ch++){
        const c = ch.toString();
        if(isValid(board,i,j,c)){
          board[i][j] = c;
          if(solution(board)) return true;
        }
      }
      board[i][j] = '.';
      return false;
    }
  }
  return true;
}
function isValid(board,row,col,c){
  let subRowGrid = 3 * Math.floor(row/3);
  let subColGrid = 3 * Math.floor(col/3);
  for(let i=0; i<9; i++){
    if(board[row][i] === c){
      return false;
    }
    if(board[i][col] === c){
      return false;
    }

    let curRow = subRowGrid + Math.floor(i / 3);
    let currCol = subColGrid + Math.floor(i % 3);
    if(board[curRow][currCol] === c){
      return false;
    }
  }
  return true;
}
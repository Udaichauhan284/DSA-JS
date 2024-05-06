/* 130 Surrounded Regions
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Notice that an 'O' should not be flipped if:
- It is on the border, or
- It is adjacent to an 'O' that should not be flipped.
The bottom 'O' is on the border, so it is not flipped.
The other three 'O' form a surrounded region, so they are flipped.
*/
//In this, we dont need to return, just need to chnage the board, first we traverse the all boundry, where row will same col change and col will same row change, and mark O visited and again traverse the grid and see where # change to O and O to X. TC : O(n)+O(m)+O(n*m), Sc : O(n*m) just for recursion.
const solve = (board) => {
  if (board.length === 0) {
    return null;
  }

  let m = board.length;
  let n = board[0].length;

  //traverse the boundary, where row will same and col will change
  for (let i = 0; i < n; i++) {
    if (board[0][i] === "O") {
      dfsHelper(board, 0, i, m, n);
    }
    if (board[m - 1][i] === "O") {
      dfsHelper(board, m - 1, i, m, n);
    }
  }

  //traverse the boundary, where col will same, row will chnage
  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") {
      //first col
      dfsHelper(board, i, 0, m, n);
    }
    if (board[i][n - 1] === "O") {
      //last col
      dfsHelper(board, i, n - 1, m, n);
    }
  }

  //traverse all grid
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "#") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
function dfsHelper(board, row, col, m, n) {
  if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] !== "O") {
    return;
  }

  //mark the visited
  board[row][col] = "#";

  //move the dfs
  dfsHelper(board, row - 1, col, m, n);
  dfsHelper(board, row + 1, col, m, n);
  dfsHelper(board, row, col - 1, m, n);
  dfsHelper(board, row, col + 1, m, n);
}

/* 
2373. Largest Local Values in a Matrix
12 May 2024, Leetcode Code Daily Challenge, Topic: Array, Matrix.
You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix.
Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
Output: [[9,9],[8,6]]
Explanation: The diagram above shows the original matrix and the generated matrix.
Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid. 
*/
//Simple Traverse on array, n-2 time in row and col and search for maxValue for that 3x3 grid TC: O(9 * (n-2)*(n-2)) ~ O(9n^2) ~ O(n^2), Sc : O(n-2*n-2) ~ O(n^2) but we can ignore this.
var largestLocal = function (grid) {
  let n = grid.length;
  let maxLocalGrid = Array(n - 2)
    .fill(0)
    .map(() => Array(n - 2).fill(0));

  for (let row = 0; row < n - 2; row++) {
    for (let col = 0; col < n - 2; col++) {
      maxLocalGrid[row][col] = findMaxValue(grid, row, col);
    }
  }
  return maxLocalGrid;
};
function findMaxValue(grid, row, col) {
  let maxValue = Number.MIN_VALUE;
  for (let x = row; x <= row + 2; x++) {
    for (let y = col; y <= col + 2; y++) {
      maxValue = Math.max(maxValue, grid[x][y]);
    }
  }
  return maxValue;
}

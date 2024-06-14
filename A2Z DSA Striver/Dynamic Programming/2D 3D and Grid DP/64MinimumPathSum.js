/* 64. Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
*/
/* Method 1- use of Memoization
 TC: O(n*m), SC: O(m-1 * n-1) for rrecurison + O(n*m)
*/
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = Array(m)
    .fill(-1)
    .map(() => Array(n).fill(-1));
  return solve(m - 1, n - 1, dp, grid);
};
function solve(i, j, dp, grid) {
  //base case
  if (i === 0 && j === 0) return grid[0][0];
  if (i < 0 || j < 0) return 1e9;
  if (dp[i][j] !== -1) return dp[i][j];

  let down = grid[i][j] + solve(i - 1, j, dp, grid);
  let right = grid[i][j] + solve(i, j - 1, dp, grid);
  dp[i][j] = Math.min(down, right);
  return dp[i][j];
}

/*Method2 use of Tabulation
use of dp array and for loop
in this we need to move min direction , so we need to add 
max value to else statement
TC: O(m*n), SC: O(m*n)
*/
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = Array(m)
    .fill(-1)
    .map(() => Array(n).fill(-1));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j]; //initial strat from 0,0
      } else {
        let bottom = grid[i][j];
        if (i > 0) {
          bottom += dp[i - 1][j];
        } else {
          bottom += Number.MAX_VALUE;
        }

        let right = grid[i][j];
        if (j > 0) {
          right += dp[i][j - 1];
        } else right += Number.MAX_VALUE;
        dp[i][j] = Math.min(bottom, right);
      }
    }
  }
  return dp[m - 1][n - 1];
};

/*Method 3 use of Space Optimization
TC: O(m*n), SC: O(m)
*/
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let prev = Array(m).fill(-1);
  for (let i = 0; i < m; i++) {
    let temp = Array(m).fill(-1);
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        temp[j] = grid[i][j]; //initial strat from 0,0
      } else {
        let bottom = grid[i][j];
        if (i > 0) {
          bottom += prev[j];
        } else {
          bottom += Number.MAX_VALUE;
        }

        let right = grid[i][j];
        if (j > 0) {
          right += temp[j - 1];
        } else right += Number.MAX_VALUE;
        temp[j] = Math.min(bottom, right);
      }
    }
    prev = temp;
  }
  return prev[n - 1];
};

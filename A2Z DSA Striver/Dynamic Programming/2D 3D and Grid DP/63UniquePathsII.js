/* 63. Unique Paths II
in this question there is obstacle, and we need to avoid thta, obstavle will be 1.
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/
/* This is same as Unique Paths, just need to add one more 
base case if(arr[i][j] === 1) return 0;
Method 1 - use of Memoization (use of Memo arr)
TC: O(m*n), SC: O(m-1 * n-1) for recursion + O(n*m)
*/
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = Array.from(Array(m), () => Array(n).fill(-1));
  return solve(m - 1, n - 1, obstacleGrid, dp);
};
function solve(i, j, arr, dp) {
  //base case
  if (i < 0 || j < 0 || arr[i][j] === 1) {
    return 0;
  }
  if (i === 0 && j === 0) return 1;
  if (dp[i][j] !== -1) return dp[i][j];

  let bottom = solve(i - 1, j, arr, dp);
  let right = solve(i, j - 1, arr, dp);
  dp[i][j] = bottom + right;
  return dp[i][j];
}

/*Method 2 - use of Tabulation
use of dp array and for loop 
TC: O(n*m), SC: O(n*m) 
*/
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let dp = Array(m)
    .fill(-1)
    .map(() => Array(n).fill(-1));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
        continue;
      }

      let bottom = 0;
      let right = 0;
      if (i > 0) {
        bottom = dp[i - 1][j];
      }
      if (j > 0) {
        right = dp[i][j - 1];
      }
      dp[i][j] = bottom + right;
    }
  }
  return dp[m - 1][n - 1];
};

/*Method 3 - use of Space Optimization
use of dp single row and curr row.
TC: O(n*m), SC: O(n)
*/
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let prev = Array(m).fill(-1);
  for (let i = 0; i < m; i++) {
    let temp = Array(m).fill(-1);
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        temp[j] = 0;
        continue;
      }
      if (i === 0 && j === 0) {
        temp[j] = 1;
        continue;
      }

      let bottom = 0;
      let right = 0;
      if (i > 0) {
        bottom = prev[j];
      }
      if (j > 0) {
        right = temp[j - 1];
      }
      temp[j] = bottom + right;
    }
    prev = temp;
  }
  return prev[n - 1];
};

/* 62. Unique Paths
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/

/*Method 1- use of Memoization(TopDown) take a dp array
bottom - i+1, right - j+1
TC: O(n*n), SC: O(n-1)+O(m-1)this is for recursion stack + O(m*n)this is for array
*/
var uniquePaths = function (m, n) {
  let dp = Array(m)
    .fill(-1)
    .map(() => Array(n).fill(-1));
  return solve(m - 1, n - 1, dp, m, n);
};
function solve(i, j, dp, m, n) {
  if (i === 0 && j === 0) return 1;
  if (i < 0 || j < 0) return 0;
  if (dp[i][j] !== -1) return dp[i][j];

  //in recursion we are going from m-1,n-1 to 0,0, so
  //bottom will change to up(i-1), right -> left(j-1)
  let bottom = solve(i - 1, j, dp, m, n);
  let right = solve(i, j - 1, dp, m, n);

  dp[i][j] = bottom + right;
  return dp[i][j];
}

/*Method 2- use of Tabulization use of dp array, but rather then
recursion use of loop on m and j, and iniliase the base case in dp
TC: O(m*n), SC: O(n*m) for dp array
*/
var uniquePaths = function (m, n) {
  let dp = Array.from(Array(m), () => Array(n).fill(-1));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
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

/*Space Optimization
as we need only prev-row/colum to add into current one
TC: O(n*m), SC: O(n)+O(n)~ O(n)
*/
var uniquePaths = function (m, n) {
  let prev = Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    let temp = Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        temp[j] = 1;
        continue;
      }

      let bottom = 0;
      let right = 0;
      if (i > 0) bottom = prev[j];
      if (j > 0) right = temp[j - 1];

      temp[j] = bottom + right;
    }
    prev = temp;
  }
  return prev[n - 1];
};

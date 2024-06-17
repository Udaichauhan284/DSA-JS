/* 931. Minimum Falling Path Sum
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.
*/
/*Method 1- use of memoization, we move from n-1 row to 0 row
TC: O(n*n), SC: O(n)+O(n*n)for recursion stack 
*/
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let dp = Array(n)
    .fill(-1)
    .map(() => Array(m).fill(-1));

  // Initialize mini with a large positive value
  let mini = Number.MAX_VALUE;

  // Traverse over each cell in the top row
  for (let j = 0; j < m; j++) {
    let ans = solve(n - 1, j, m, dp, matrix);
    mini = Math.min(mini, ans);
  }

  return mini;
};

function solve(i, j, m, dp, arr) {
  // Base case
  if (i === 0) return arr[0][j];
  if (j < 0 || j >= m) return 1e9;

  if (dp[i][j] !== -1) return dp[i][j];

  // Calculate the paths from the previous row
  let up = arr[i][j] + solve(i - 1, j, m, dp, arr);
  let rd = arr[i][j] + (j + 1 < m ? solve(i - 1, j + 1, m, dp, arr) : 1e9);
  let ld = arr[i][j] + (j - 1 >= 0 ? solve(i - 1, j - 1, m, dp, arr) : 1e9);

  dp[i][j] = Math.min(up, Math.min(rd, ld));
  return dp[i][j];
}

/* Method 2 use of Tabulization
TC: O(n*n), SC: O(n*n)
*/
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let dp = Array(n)
    .fill(-1)
    .map(() => Array(m).fill(-1));
  //base case
  for (let j = 0; j < m; j++) {
    dp[0][j] = matrix[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let up = matrix[i][j] + dp[i - 1][j];
      let ld = matrix[i][j];
      if (j - 1 >= 0) {
        ld += dp[i - 1][j - 1];
      } else {
        ld += 1e9;
      }

      let rd = matrix[i][j];
      if (j + 1 < m) {
        rd += dp[i - 1][j + 1];
      } else {
        rd += 1e9;
      }

      dp[i][j] = Math.min(up, Math.min(rd, ld));
    }
  }
  let mini = Number.MAX_VALUE;
  for (let j = 0; j < m; j++) {
    mini = Math.min(mini, dp[n - 1][j]);
  }
  return mini;
};

/*Space Optimization
 TC: O(n*n), SC: O(n)
 */
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let prev = Array(m).fill(0);
  //base case
  for (let j = 0; j < m; j++) {
    prev[j] = matrix[0][j]; //first row value in prev array
  }

  for (let i = 1; i < n; i++) {
    let curr = Array(m).fill(0);
    for (let j = 0; j < m; j++) {
      let up = matrix[i][j] + prev[j];

      let ld = matrix[i][j];
      if (j - 1 >= 0) {
        ld += prev[j - 1];
      } else {
        ld += 1e9;
      }

      let rd = matrix[i][j];
      if (j + 1 < m) {
        rd += prev[j + 1];
      } else {
        rd += 1e9;
      }

      curr[j] = Math.min(up, Math.min(rd, ld));
    }
    prev = curr;
  }
  let mini = Number.MAX_VALUE;
  for (let j = 0; j < m; j++) {
    mini = Math.min(mini, prev[j]);
  }
  return mini;
};

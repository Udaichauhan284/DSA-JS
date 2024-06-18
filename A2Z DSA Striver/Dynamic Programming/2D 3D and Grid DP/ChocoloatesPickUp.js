/* Chocolates Pickup
You are given an n rows and m cols matrix grid representing a field of chocolates where grid[i][j] represents the number of chocolates that you can collect from the (i, j) cell.

You have two robots that can collect chocolates for you:

Robot #1 is located at the top-left corner (0, 0), and
Robot #2 is located at the top-right corner (0, cols - 1).
Return the maximum number of chocolates collection using both robots by following the rules below:

From a cell (i, j), robots can move to cell (i + 1, j - 1), (i + 1, j), or (i + 1, j + 1).
When any robot passes through a cell, It picks up all chocolates, and the cell becomes an empty cell.
When both robots stay in the same cell, only one takes the chocolates.
Both robots cannot move outside of the grid at any moment.
Both robots should reach the bottom row in grid.

n = 3, m = 4
grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
Output:
24
Explanation:
Path of robot #1 and #2 are described in color green and blue respectively. Cherries taken by Robot #1, (3 + 2 + 5 + 2) = 12. Cherries taken by Robot #2, (1 + 5 + 5 + 1) = 12. Total of cherries: 12 + 12 = 24.
*/

/*Method 1 - use of Memoization DP, TC: O(n*m*m)*9, SC: O(n*m*m)+O(n)
 */
class Solution {
  solve(n, m, grid) {
    // Code here
    let dp = Array(n)
      .fill(-1)
      .map(() =>
        Array(m)
          .fill(-1)
          .map(() => Array(m).fill(-1))
      );
    return this.helperFun(0, 0, m - 1, n, m, grid, dp);
  }
  helperFun(i, j1, j2, n, m, grid, dp) {
    //base case
    if (j1 < 0 || j1 >= m || j2 < 0 || j2 >= m) {
      return -1e8;
    }
    if (i === n - 1) {
      //if both cell is saem by both robot
      if (j1 === j2) return grid[i][j1]; //or grid[i][j2]
      else {
        //add the both cell
        return grid[i][j1] + grid[i][j2];
      }
    }
    if (dp[i][j1][j2] !== -1) return dp[i][j1][j2];
    //move in direction for robot1 there will be 3 direction for robot 2
    let maxi = -1e8;
    for (let dj1 = -1; dj1 <= 1; dj1++) {
      for (let dj2 = -1; dj2 <= 1; dj2++) {
        if (j1 === j2) {
          maxi = Math.max(
            maxi,
            grid[i][j1] +
              this.helperFun(i + 1, j1 + dj1, j2 + dj2, n, m, grid, dp)
          );
        } else {
          maxi = Math.max(
            maxi,
            grid[i][j1] +
              grid[i][j2] +
              this.helperFun(i + 1, j1 + dj1, j2 + dj2, n, m, grid, dp)
          );
        }
      }
    }
    dp[i][j1][j2] = maxi;
    return dp[i][j1][j2];
  }
}

/*Method 2 - use of Tabulization TC: O(n*m*m)*9, SC: O(n*m*n)
 */
class Solution {
  solve(n, m, grid) {
    // Code here
    let dp = Array(n)
      .fill(-1)
      .map(() =>
        Array(m)
          .fill(-1)
          .map(() => Array(m).fill(-1))
      );
    //base case
    for (let j1 = 0; j1 < m; j1++) {
      for (let j2 = 0; j2 < m; j2++) {
        if (j1 === j2) dp[n - 1][j1][j2] = grid[n - 1][j2];
        else dp[n - 1][j1][j2] = grid[n - 1][j1] + grid[n - 1][j2];
      }
    }

    //movement
    for (let i = n - 2; i >= 0; i--) {
      for (let j1 = 0; j1 < m; j1++) {
        for (let j2 = 0; j2 < m; j2++) {
          let maxi = -1e8;
          for (let dj1 = -1; dj1 <= 1; dj1++) {
            for (let dj2 = -1; dj2 <= 1; dj2++) {
              let ans = 0;
              if (j1 === j2) {
                ans = grid[i][j1];
              } else {
                ans = grid[i][j1] + grid[i][j2];
              }

              if (
                j1 + dj1 < m &&
                j1 + dj1 >= 0 &&
                j2 + dj2 < m &&
                j2 + dj2 >= 0
              ) {
                ans += dp[i + 1][j1 + dj1][j2 + dj2];
              } else {
                ans += -1e8;
              }

              maxi = Math.max(ans, maxi);
            }
          }
          dp[i][j1][j2] = maxi;
        }
      }
    }
    return dp[0][0][m - 1];
  }
}

/* Rod Cutting
Given a rod of length N inches and an array of prices, price[]. price[i] denotes the value of a piece of length i. Determine the maximum value obtainable by cutting up the rod and selling the pieces.

Note: Consider 1-based indexing.

N = 8
Price[] = {1, 5, 8, 9, 10, 17, 17, 20}
Output:
22
Explanation:
The maximum obtainable value is 22 by 
cutting in two pieces of lengths 2 and 
6, i.e., 5+17=22.
*/

/*Method 1 use of Memoization (Recursion + Dp array
TC: O(n*n), SC: O(n*n)+O(n))
*/
class Solution {
  //Function to find the maximum possible value of the function.
  cutRod(price, n) {
    //your code here
    let dp = Array.from({ length: n }, () => Array(n + 1).fill(-1));
    return this.solve(n - 1, dp, price, n);
  }
  solve(ind, dp, price, n) {
    //base case,
    if (ind === 0) {
      return n * price[0];
    }
    if (dp[ind][n] !== -1) return dp[ind][n];
    //movement
    let notTake = 0 + this.solve(ind - 1, dp, price, n);
    let take = Number.MIN_VALUE;
    let rodLength = ind + 1;
    if (rodLength <= n) {
      take = price[ind] + this.solve(ind, dp, price, n - rodLength);
    }
    dp[ind][n] = Math.max(notTake, take);
    return dp[ind][n];
  }
}

/*Method 2 use of Tabulization
TC: O(n*n), SC: O(n*n)
*/
class Solution {
  // Function to find the maximum possible value of the function.
  cutRod(price, n) {
    // Create a DP array with dimensions (n x n+1) and initialize it with 0
    let dp = Array.from({ length: n }, () => Array(n + 1).fill(0));

    // Initialize base case: if we have only the first piece, we can only take multiples of it
    for (let N = 0; N <= n; N++) {
      dp[0][N] = N * price[0];
    }

    // Fill the DP table
    for (let ind = 1; ind < n; ind++) {
      for (let N = 0; N <= n; N++) {
        // Option 1: Do not take the current piece
        let notTake = dp[ind - 1][N];

        // Option 2: Take the current piece (if possible)
        let take = Number.MIN_VALUE;
        let rodLength = ind + 1;
        if (rodLength <= N) {
          take = price[ind] + dp[ind][N - rodLength];
        }

        // Take the maximum of both options
        dp[ind][N] = Math.max(notTake, take);
      }
    }

    // Return the result from the DP table
    return dp[n - 1][n];
  }
}

/*Method 3 use of Space Optimization
TC: O(n*n), SC: O(n)
*/
class Solution {
  // Function to find the maximum possible value of the function.
  cutRod(price, n) {
    // Create a DP array with dimensions (n x n+1) and initialize it with 0
    let prev = Array(n + 1).fill(0);

    // Initialize base case: if we have only the first piece, we can only take multiples of it
    for (let N = 0; N <= n; N++) {
      prev[N] = N * price[0];
    }

    // Fill the DP table
    for (let ind = 1; ind < n; ind++) {
      let curr = Array(n + 1).fill(0);
      for (let N = 0; N <= n; N++) {
        // Option 1: Do not take the current piece
        let notTake = prev[N];

        // Option 2: Take the current piece (if possible)
        let take = Number.MIN_VALUE;
        let rodLength = ind + 1;
        if (rodLength <= N) {
          take = price[ind] + curr[N - rodLength];
        }

        // Take the maximum of both options
        curr[N] = Math.max(notTake, take);
      }
      prev = curr;
    }

    // Return the result from the DP table
    return prev[n];
  }
}

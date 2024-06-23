/* Knapsack with Duplicate Items
Given a set of N items, each with a weight and a value, represented by the array w and val respectively. Also, a knapsack with weight limit W.
The task is to fill the knapsack in such a way that we can get the maximum profit. Return the maximum profit.
Note: Each item can be taken any number of times.
Input: 
N = 2
W = 3
val = {1, 1}
wt = {2, 1}
Output: 
3
Explanation: 
1.Pick the 2nd element thrice.
2.Total profit = 1 + 1 + 1 = 3. Also the total weight = 1 + 1 + 1  = 3 which is <= 3.
*/

/* Method 1- use of Dp Memoization
TC: O(n*W), SC: O(n*W)+O(n)
*/
class Solution {
  knapSack(N, W, val, wt) {
    //code here
    let dp = Array.from({ length: N }, () => Array(W + 1).fill(-1));
    return this.solve(N - 1, W, val, wt, dp);
  }
  solve(ind, W, val, wt, dp) {
    //base case
    if (ind === 0) {
      //now we can take as much as we want value
      return Math.floor(W / wt[0]) * val[0];
    }
    if (dp[ind][W] !== -1) return dp[ind][W];
    //movement
    let notTake = this.solve(ind - 1, W, val, wt, dp);
    let take = 0;
    if (wt[ind] <= W) {
      take = val[ind] + this.solve(ind, W - wt[ind], val, wt, dp);
    }
    dp[ind][W] = Math.max(notTake, take);
    return dp[ind][W];
  }
}

/* Use of Tabiluization
TC: O(N*W), SC: O(N*W)
*/
class Solution {
  knapSack(N, W, val, wt) {
    //code here
    let dp = Array.from({ length: N }, () => Array(W + 1).fill(0));
    //base case, for first ind, we move wt[0] to W and put in dp
    for (let i = wt[0]; i <= W; i++) {
      dp[0][i] = Math.floor(i / wt[0]) * val[0];
    }

    //movement for loop
    for (let ind = 1; ind < N; ind++) {
      for (let target = 0; target <= W; target++) {
        let notTake = dp[ind - 1][target];
        let take = 0;
        if (wt[ind] <= target) {
          take = val[ind] + dp[ind][target - wt[ind]];
        }
        dp[ind][target] = Math.max(notTake, take);
      }
    }
    return dp[N - 1][W];
  }
}

/* Method 3 use of Space Optimization
TC: O(N*W), SC: O(N)
*/
class Solution {
  knapSack(N, W, val, wt) {
    //code here
    let curr = Array(W + 1).fill(0);
    //base case, for first ind, we move wt[0] to W and put in dp
    for (let i = wt[0]; i <= W; i++) {
      curr[i] = Math.floor(i / wt[0]) * val[0];
    }

    //movement for loop
    for (let ind = 1; ind < N; ind++) {
      for (let target = 0; target <= W; target++) {
        let notTake = curr[target];
        let take = 0;
        if (wt[ind] <= target) {
          take = val[ind] + curr[target - wt[ind]];
        }
        curr[target] = Math.max(notTake, take);
      }
    }
    return curr[W];
  }
}

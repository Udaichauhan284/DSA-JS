/* 0 - 1 Knapsack Problem
You are given weights and values of N items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. Note that we have only one quantity of each item.
In other words, given two integer arrays val[0..N-1] and wt[0..N-1] which represent values and weights associated with N items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item or dont pick it (0-1 property).
Input:
N = 3
W = 4
values[] = {1,2,3}
weight[] = {4,5,1}
Output: 3
Explanation: Choose the last item that weighs 1 unit and holds a value of 3. 
*/
/* Method 1- use of Memoization
TC: O(n*w), SC: O(n*w)+O(n) recursion stack space
*/
class Solution {
  // Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // code here
    const dp = Array.from({ length: n }, () => Array(W + 1).fill(-1));
    return this.solve(n - 1, W, wt, val, dp);
  }

  solve(ind, W, wt, val, dp) {
    // Base case: Consider picking or not picking the first element
    if (ind === 0) {
      if (wt[0] <= W) return val[0]; // Pick the first element if it fits
      else return 0; // Not pick the first element
    }

    if (dp[ind][W] !== -1) return dp[ind][W];

    // Movement: not pick and pick
    let notTake = 0 + this.solve(ind - 1, W, wt, val, dp);
    let take = 0; // Initialize take with 0 (not picking the current element)
    if (wt[ind] <= W) {
      take = val[ind] + this.solve(ind - 1, W - wt[ind], wt, val, dp);
    }

    dp[ind][W] = Math.max(notTake, take);
    return dp[ind][W];
  }
}

/* Method 2 - use of Tabulization
TC: O(n*W), SC: O(n*W)
*/
class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // code here
    let dp = Array.from({ length: n }, () => Array(W + 1).fill(0));
    //base case, for every wt[ind], whihc is less then W, i pick, for ind = 0
    for (let i = wt[0]; i <= W; i++) {
      dp[0][i] = val[0];
    }
    //movement, ind and cap, pick and not pick
    for (let ind = 1; ind < n; ind++) {
      for (let cap = 0; cap <= W; cap++) {
        let notPick = 0 + dp[ind - 1][cap];
        let take = 0;
        if (wt[ind] <= cap) {
          take = val[ind] + dp[ind - 1][cap - wt[ind]];
        }
        dp[ind][cap] = Math.max(notPick, take);
      }
    }
    return dp[n - 1][W];
  }
}

/* Method 3 - use of Space OPtimization, use of prev and curr
TC: O(n*W), SC: O(W)
*/
class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // code here
    let prev = Array(W + 1).fill(0);
    //base case, for every wt[ind], whihc is less then W, i pick, for ind = 0
    for (let i = wt[0]; i <= W; i++) {
      prev[i] = val[0];
    }
    //movement, ind and cap, pick and not pick
    for (let ind = 1; ind < n; ind++) {
      let curr = Array(W + 1).fill(0);
      for (let cap = 0; cap <= W; cap++) {
        let notPick = 0 + prev[cap];
        let take = 0;
        if (wt[ind] <= cap) {
          take = val[ind] + prev[cap - wt[ind]];
        }
        curr[cap] = Math.max(notPick, take);
      }
      prev = curr;
    }
    return prev[W];
  }
}

/* Method 4 - use of Space OPtimization, use of prev
as for curr cell, we need only leftcell value, for filling it. no need of curr and right one.
TC: O(n*W), SC: O(W)
*/
class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // code here
    let prev = Array(W + 1).fill(0);
    //base case, for every wt[ind], whihc is less then W, i pick, for ind = 0
    for (let i = wt[0]; i <= W; i++) {
      prev[i] = val[0];
    }
    //movement, ind and cap, pick and not pick
    for (let ind = 1; ind < n; ind++) {
      for (let cap = W; cap >= 0; cap--) {
        let notPick = 0 + prev[cap];
        let take = 0;
        if (wt[ind] <= cap) {
          take = val[ind] + prev[cap - wt[ind]];
        }
        prev[cap] = Math.max(notPick, take);
      }
    }
    return prev[W];
  }
}

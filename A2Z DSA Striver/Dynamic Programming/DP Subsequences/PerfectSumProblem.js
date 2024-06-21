/* Perfect Sum Problem
Given an array arr of non-negative integers and an integer sum, the task is to count all subsets of the given array with a sum equal to a given sum.

Note: Answer can be very large, so, output answer modulo 109+7.
Input: 
N = 6
arr = [5, 2, 3, 10, 6, 8]
sum = 10
Output: 
3
Explanation: 
{5, 2, 3}, {2, 8}, {10} are possible subsets.
*/
class Solution {
  perfectSum(arr, n, sum) {
    //code here
    let dp = Array(n + 1)
      .fill(0)
      .map(() => Array(sum + 1).fill(0));
    for (let i = 0; i < n; i++) {
      dp[i][0] = 1;
    }
    for (let i = 1; i < sum; i++) {
      dp[0][i] = 0;
    }
    for (let ind = 1; ind <= n; ind++) {
      for (let target = 0; target <= sum; target++) {
        if (arr[ind - 1] <= target) {
          dp[ind][target] =
            (dp[ind - 1][target] + dp[ind - 1][target - arr[ind - 1]]) %
            1000000007;
        } else {
          dp[ind][target] = dp[ind - 1][target];
        }
      }
    }
    return dp[n][sum];
  }
}

//This is working, arr number start from 0. so we need to change the base case
class Solution {
  perfectSum(arr, n, sum) {
    //code here
    let dp = Array(n + 1)
      .fill(-1)
      .map(() => Array(sum + 1).fill(-1));
    return this.solve(n - 1, arr, sum, dp);
  }
  solve(ind, arr, sum, dp) {
    if (ind === 0) {
      if (sum === 0 && arr[0] === 0) return 2;
      if (sum === 0 || sum === arr[0]) return 1;
      return 0;
    }
    if (dp[ind][sum] !== -1) return dp[ind][sum];

    //movement
    let notTake = this.solve(ind - 1, arr, sum, dp);
    let take = 0;
    if (arr[ind] <= sum) {
      take = this.solve(ind - 1, arr, sum - arr[ind], dp);
    }

    dp[ind][sum] = (take + notTake) % 1000000007;
    return dp[ind][sum];
  }
}

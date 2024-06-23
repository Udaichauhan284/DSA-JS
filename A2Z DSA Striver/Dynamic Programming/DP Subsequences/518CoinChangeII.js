/* 518 Coin Change II
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
*/

/*this is different from coin changes 1.in this we need ways, 
in that ques we need coins, that why we are dividin amount / coins[0]
in this we need ways, so only return 0 and 1. so that can we add to
number of ways. in this we can take any coins as many as time.
TC: O(n*amount), SC: O(n*amount)+O(n);
*/
var change = function (amount, coins) {
  let n = coins.length;
  let dp = Array.from({ length: n }, () => Array(amount + 1).fill(-1));
  let ans = solve(n - 1, amount, coins, dp);
  if (ans === 0) return 0;
  return ans;
};
function solve(ind, amount, coins, dp) {
  //base case
  if (ind === 0) {
    if (amount % coins[0] === 0) return 1; //difference from coin change I
    else return 0;
  }
  if (dp[ind][amount] !== -1) return dp[ind][amount];
  //movement, pick and nonpick
  let nonPick = solve(ind - 1, amount, coins, dp);
  let pick = 0; //difference
  if (coins[ind] <= amount) {
    pick = solve(ind, amount - coins[ind], coins, dp);
  }
  dp[ind][amount] = pick + nonPick; //difference, we want ways, no mini or max
  return dp[ind][amount];
}

/* Method 2 - use of Tabulization (for loop)
TC:O(n*amount), SC: O(n*amount)
*/
var change = function (amount, coins) {
  let n = coins.length;
  let dp = Array.from({ length: n }, () => Array(amount + 1).fill(0));

  //base case, move target from 0 to amount
  for (let T = 0; T <= amount; T++) {
    if (T % coins[0] === 0) {
      dp[0][T] = 1;
    } else dp[0][T] = 0;
  }

  //movemen, for loop pick and nonpick
  for (let ind = 1; ind < n; ind++) {
    for (let target = 0; target <= amount; target++) {
      let nonPick = dp[ind - 1][target];
      let pick = 0;
      if (coins[ind] <= target) {
        pick = dp[ind][target - coins[ind]];
      }
      dp[ind][target] = pick + nonPick;
    }
  }
  let ans = dp[n - 1][amount];
  if (ans === 0) return 0;
  return ans;
};

/* Method 3 - use of Space Optimization (prev and curr)
TC:O(n*amount), SC: O(n)
*/
var change = function (amount, coins) {
  let n = coins.length;
  let prev = Array(amount + 1).fill(0);

  //base case, move target from 0 to amount
  for (let T = 0; T <= amount; T++) {
    if (T % coins[0] === 0) {
      prev[T] = 1;
    } else prev[T] = 0;
  }

  //movemen, for loop pick and nonpick
  for (let ind = 1; ind < n; ind++) {
    let curr = Array(amount + 1).fill(0);
    for (let target = 0; target <= amount; target++) {
      let nonPick = prev[target];
      let pick = 0;
      if (coins[ind] <= target) {
        pick = curr[target - coins[ind]];
      }
      curr[target] = pick + nonPick;
    }
    prev = curr;
  }
  let ans = prev[amount];
  if (ans === 0) return 0;
  return ans;
};

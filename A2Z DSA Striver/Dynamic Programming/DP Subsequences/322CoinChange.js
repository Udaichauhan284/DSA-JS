/* 322 Coin Change
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
*/
/* Brute Method - use of Recursion, Take and Not Take one
just here we have unlimited stock of coins, so we dont move back
to ind-1, we have to stay still on that index
TC: O(2^n), SC: O(n), but these compleixity will beyond 2^n and n 
because we are standing on still ind.
*/
var coinChange = function (coins, amount) {
  let n = coins.length;
  let ans = solve(n - 1, amount, coins);
  if (ans >= 1e9) return -1;
  return ans;
};
function solve(ind, amount, coins) {
  //base case
  if (ind === 0) {
    if (amount % coins[ind] === 0) return amount / coins[ind];
    else return 1e9;
  }
  let notTake = 0 + solve(ind - 1, amount, coins);
  let take = Number.MAX_VALUE;
  if (coins[ind] <= amount) {
    take = 1 + solve(ind, amount - coins[ind], coins);
  }
  return Math.min(notTake, take);
}

/* Method 1- use of Memoization DP array
TC: O(n+amount), SC: O(n+amout)+O(n)
*/
var coinChange2 = function (coins, amount) {
  let n = coins.length;
  let dp = Array.from({ length: n }, () => Array(amount + 1).fill(-1));
  let ans = solve(n - 1, amount, coins, dp);
  if (ans >= 1e9) return -1;
  return ans;
};
function solve(ind, amount, coins, dp) {
  //base case
  if (ind === 0) {
    if (amount % coins[ind] === 0) return amount / coins[ind];
    else return 1e9;
  }
  if (dp[ind][amount] !== -1) return dp[ind][amount];
  //movment, pick and non pick
  let nonPick = 0 + solve(ind - 1, amount, coins, dp);
  let pick = Number.MAX_VALUE;
  if (coins[ind] <= amount) {
    pick = 1 + solve(ind, amount - coins[ind], coins, dp);
  }
  //we need mini coins
  dp[ind][amount] = Math.min(nonPick, pick);
  return dp[ind][amount];
}

/*Method 2-use of Tabulization
TC: O(n*amount), SC: O(n*amount)
*/
var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = Array.from({ length: n }, () => Array(amount + 1).fill(0));

  //base case, ind will be fix, ind===0, target we need to store
  for (let T = 0; T <= amount; T++) {
    if (T % coins[0] === 0) {
      dp[0][T] = T / coins[0];
    } else dp[0][T] = 1e9;
  }

  //movement start, ind and target for loop
  for (let ind = 1; ind < n; ind++) {
    for (let target = 0; target <= amount; target++) {
      let notPick = 0 + dp[ind - 1][target];
      let pick = Number.MAX_VALUE;
      if (coins[ind] <= target) {
        pick = 1 + dp[ind][target - coins[ind]];
      }

      dp[ind][target] = Math.min(pick, notPick);
    }
  }
  let ans = dp[n - 1][amount];
  if (ans >= 1e9) return -1;
  return ans;
};

/*Method 3-use of Space Optimization, use of Prev and curr
TC: O(n*amount), SC: O(n*amount)
*/
var coinChange = function (coins, amount) {
  let n = coins.length;
  let prev = Array(amount + 1).fill(0);

  //base case, ind will be fix, ind===0, target we need to store
  for (let T = 0; T <= amount; T++) {
    if (T % coins[0] === 0) {
      prev[T] = T / coins[0];
    } else prev[T] = 1e9;
  }

  //movement start, ind and target for loop
  for (let ind = 1; ind < n; ind++) {
    let curr = Array(amount + 1).fill(0);
    for (let target = 0; target <= amount; target++) {
      let notPick = 0 + prev[target];
      let pick = Number.MAX_VALUE;
      if (coins[ind] <= target) {
        //here we are moving back to ind-1 prev row, so here
        //we can use curr one.
        pick = 1 + curr[target - coins[ind]];
      }

      curr[target] = Math.min(pick, notPick);
    }
    prev = curr;
  }
  let ans = prev[amount];
  if (ans >= 1e9) return -1;
  return ans;
};

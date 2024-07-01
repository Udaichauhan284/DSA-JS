/* 123 Best Time To Buy and Sell Stock III
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
*/

/*This question is same as previous ones just here we have 
limit of transaction, we will take "cap" in function 0/1/2
Recursion : TC: O(2^n), SC: O(n)
*/
var maxProfit = function(prices) {
  return solve(0,1,2,prices); //ind,buy(true),cap(2)
};
function solve(ind,buy,cap,prices){
  let n = prices.length;
  //base case
  if(ind === n) return 0;
  if(cap === 0) return 0;

  if(buy){
      return Math.max(-prices[ind]+solve(ind+1,0,cap,prices), solve(ind+1,1,cap,prices));
  }
      return Math.max(prices[ind]+solve(ind+1,1,cap-1,prices), solve(ind+1,0,cap,prices));
}

/*This question is same as previous ones just here we have 
limit of transaction, we will take "cap" in function 0/1/2
Method 1 Use of Memoization Dp Array
TC: O(n*2*3), SC: O(n*2*3)+O(n)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  let dp = Array.from({ length: n }, () => Array.from({ length: 2 }, () => Array(3).fill(-1)));
  return solve(0, 1, 2, prices, n, dp); // ind, buy (true), cap (2)
};

function solve(ind, buy, cap, prices, n, dp) {
  // base case
  if (ind === n) return 0;
  if (cap === 0) return 0;
  if (dp[ind][buy][cap] !== -1) return dp[ind][buy][cap];
  
  let profit = 0;
  if (buy) {
      profit = Math.max(
          -prices[ind] + solve(ind + 1, 0, cap, prices, n, dp),
          solve(ind + 1, 1, cap, prices, n, dp)
      );
  } else {
      profit = Math.max(
          prices[ind] + solve(ind + 1, 1, cap - 1, prices, n, dp),
          solve(ind + 1, 0, cap, prices, n, dp)
      );
  }
  dp[ind][buy][cap] = profit;
  return dp[ind][buy][cap];
}

/*Method 2 - Tabulization (i will move from n-1 to 0) and buy
and cap will move from 0 to 2 and 0 to 3.
TC: O(n*2*3), SC: O(n*2*3)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  let dp = Array.from({length: n+1}, () => Array.from({length: 2}, () => Array(3).fill(0)));
  //base case 1. when ind === 0, buy and cap will change
  for(let buy = 0; buy <= 1; buy++){
      for(let cap = 0; cap<= 2; cap++){
          dp[0][buy][cap] = 0;
      }
  }
  //2. when cap === 0
  for(let ind=0; ind<n; ind++){
      for(let buy=0; buy<=1; buy++){
          dp[ind][buy][0] = 0;
      }
  }

  //movement start, i will move from n-1 to 0
  for(let i = n-1; i>=0; i--){
      for(let buy=0; buy<=1; buy++){
          for(let cap=1; cap<=2; cap++){
              if(buy){
                  dp[i][buy][cap] = Math.max(-prices[i]+dp[i+1][0][cap], dp[i+1][1][cap]);
              }else{
                  dp[i][buy][cap] = Math.max(prices[i]+dp[i+1][1][cap-1], dp[i+1][0][cap]);
              }
          }
      }
  }
  return dp[0][1][2];
};

/*Method 3 - Space Optimization (i will move from n-1 to 0) and buy
and cap will move from 0 to 2 and 0 to 3.
TC: O(n*2*3), SC: O(2*3) ~ O(6) ~ O(1)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  let ahead = Array.from({length: 2}, () => Array(3).fill(0));
  //base case 1. when ind === 0, buy and cap will change
 //no need of base case, we already fill ahead array with 0.

  //movement start, i will move from n-1 to 0
  for(let i = n-1; i>=0; i--){
      let curr = Array.from({length: 2}, () => Array(3).fill(0));
      for(let buy=0; buy<=1; buy++){
          for(let cap=1; cap<=2; cap++){
              if(buy){
                  curr[buy][cap] = Math.max(-prices[i]+ahead[0][cap], ahead[1][cap]);
              }else{
                  curr[buy][cap] = Math.max(prices[i]+ahead[1][cap-1], ahead[0][cap]);
              }
          }
      }
      ahead = curr;
  }
  return ahead[1][2];
};

/* There is other mthod we can solve using Transaction number, TN will 4, we need 
at most 2, 4 -> 0,1,2,3, B,S,B,S => Buy will even one and Sell one will be odd one
DP of N * 4
Method 1 - use of Memoization DP array DP[N][4]
TC: O(n*4), SC: O(n*4)+O(n)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  let dp = Array.from({length: n}, () => Array(4).fill(-1));
  return solve(0,0,prices,n,dp); //ind, transaction
};
function solve(ind,tranc,prices,n,dp){
  //base case
  if(ind === n) return 0;
  if(tranc === 4) return 0;
  if(dp[ind][tranc] !== -1) return dp[ind][tranc];
  let profit = 0;
  //movement
  if(tranc%2 === 0){
      profit = Math.max(-prices[ind] + solve(ind+1,tranc+1,prices,n,dp), solve(ind+1, tranc,prices,n,dp));
  }else{
      profit = Math.max(prices[ind] + solve(ind+1,tranc+1,prices,n,dp), solve(ind+1, tranc, prices, n, dp));
  }
  dp[ind][tranc] = profit;
  return dp[ind][tranc];
}


/* There is other mthod we can solve using Transaction number, TN will 4, we need 
at most 2, 4 -> 0,1,2,3, B,S,B,S => Buy will even one and Sell one will be odd one
DP of N * 4
Method 2 - use of tabulization
TC: O(n*4), SC: O(n*4)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  let dp = Array.from({ length: n + 1 }, () => Array(5).fill(0)); // Max 4 transactions (0 to 4 inclusive)

  // Base cases
  for (let t = 0; t <= 4; t++) {
      dp[n][t] = 0; // No profit if there are no days left
  }
  for (let i = 0; i <= n; i++) {
      dp[i][0] = 0; // No profit if 0 transactions are allowed
  }

  // Movement
  for (let i = n - 1; i >= 0; i--) {
      for (let tran = 1; tran <= 4; tran++) {
          if (tran % 2 === 0) {
              dp[i][tran] = Math.max(-prices[i] + dp[i + 1][tran - 1], dp[i + 1][tran]);
          } else {
              dp[i][tran] = Math.max(prices[i] + dp[i + 1][tran - 1], dp[i + 1][tran]);
          }
      }
  }

  return dp[0][4]; // Max profit with at most 2 transactions (4 states)
};


/* There is other mthod we can solve using Transaction number, TN will 4, we need 
at most 2, 4 -> 0,1,2,3, B,S,B,S => Buy will even one and Sell one will be odd one
DP of N * 4
Method 3 - use of Space Optimization
TC: O(n*4), SC: O(5) ~ O(1)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  let ahead = Array(5).fill(0); // Max 4 transactions (0 to 4 inclusive)

  // Base cases, no need of base case, as we already put zero in dp

  // Movement
  for (let i = n - 1; i >= 0; i--) {
      let curr = Array(5).fill(0);
      for (let tran = 1; tran <= 4; tran++) {
          if (tran % 2 === 0) {
              curr[tran] = Math.max(-prices[i] + ahead[tran - 1], ahead[tran]);
          } else {
              curr[tran] = Math.max(prices[i] + ahead[tran - 1], ahead[tran]);
          }
      }
      ahead = curr;
  }

  return ahead[4]; // Max profit with at most 2 transactions (4 states)
};

/* 122. Best Time to Buy and Sell Stock II
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
*/

/* In this question we need to maintain the ind and buy 
variable, if we buy we have two option take it and not
take it.
else we have sell option, in this we also have two option
Recursion: TC: O(2^n), SC: O(n)
*/
var maxProfit = function(prices) {
  return solve(0,true,prices);
};
function solve(i,buy,prices){
  let n = prices.length;
  let profit = 0;
  //base case
  if(i === n){
      return 0;
  }
  if(buy){
      //two possibilites, we can buy or not
      //max of (buy,notbuy), if we buy, -price
      profit = Math.max(-prices[i]+solve(i+1,false,prices), solve(i+1, true, prices))
  } else{
      //sell, same two possibilities
      profit = Math.max(prices[i]+solve(i+1,true,prices), solve(i+1,false, prices));
  }  
  return profit;
}

/* In this question we need to maintain the ind and buy 
variable, if we buy we have two option take it and not
take it.
else we have sell option, in this we also have two option
Method 1 - use of Memoization DP array TC: O(n*2), SC: O(n*2)+O(n)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  if (n === 0) return 0;
  let dp = Array.from({length: n}, () => Array(2).fill(-1));
  //1 for true buy, 0 for false, not buy
  return solve(0, 1, prices, n, dp);//index, buy
};

function solve(i, buy, prices, n, dp) {
  let profit = 0;
  // base case
  if (i === n) {
      return 0;
  }
  // dp case
  if (dp[i][buy] !== -1) return dp[i][buy];
  
  if (buy) {
      // two possibilities, we can buy or not
      // max of (buy, not buy), if we buy, -price
      profit = Math.max(-prices[i] + solve(i + 1, 0, prices, n, dp), solve(i + 1, 1, prices, n, dp));
  } else {
      // sell, same two possibilities
      profit = Math.max(prices[i] + solve(i + 1, 1, prices, n, dp), solve(i + 1, 0, prices, n, dp));
  }  
  
  dp[i][buy] = profit;
  return dp[i][buy];
}

/*Tabulization Bottom Up
ind will go from n-1 to 0 and buy will move from 0 to 1
TC:O(n*2), SC: O(n*2)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  let dp = Array.from({length: n+1}, () => Array(2).fill(0));
  //base case
  dp[n][0] = dp[n][1] = 0;
  let profit = 0;
  //movement start
  for(let i=n-1; i>=0; i--){
      for(let buy=0; buy<=1; buy++){
          if(buy){
              profit = Math.max(-prices[i] + dp[i+1][0], dp[i+1][1]);
          }else{
              profit = Math.max(prices[i]+dp[i+1][1], dp[i+1][0]);
          }
          dp[i][buy] = profit;
      }
  }
  return dp[0][1]; //Bottom Up, 
};


/*Method 3 - space otimization
as we move from n-1 to 0, so we have ahead array and curr array
ind will go from n-1 to 0 and buy will move from 0 to 1
TC:O(n*2), SC: O(2)+O(2) ~ O(4)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  let ahead = Array(2).fill(0);
  //base case
  ahead[0] = ahead[1] = 0;
  let profit = 0;
  //movement start
  for(let i=n-1; i>=0; i--){
      let curr = Array(2).fill(0);
      for(let buy=0; buy<=1; buy++){
          if(buy){
              profit = Math.max(-prices[i] + ahead[0], ahead[1]);
          }else{
              profit = Math.max(prices[i]+ ahead[1], ahead[0]);
          }
          curr[buy] = profit;
      }
      ahead = curr
  }
  return ahead[1]; //Bottom Up, 
};
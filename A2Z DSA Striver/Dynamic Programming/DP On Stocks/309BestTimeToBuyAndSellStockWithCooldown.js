/* 309. Best Time to Buy and Sell Stock with Cooldown
Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
*/

/*After sell we will not able to buy just after, we need to cool down
so do ind+2.
Recursion TC: O(2^n), SC: O(n)
TLE
*/
var maxProfit = function(prices) {
  let n = prices.length;
  return solve(0,1,n,prices); //ind, buy
};
function solve(ind,buy,n,prices){
  //base case, here we move i+2, so do
  if(ind >= n) return 0;
  //main code
  if(buy){
      return Math.max(-prices[ind]+solve(ind+1,0,n,prices), solve(ind+1,1,n,prices));
  }
  return Math.max(prices[ind]+solve(ind+2,1,n,prices), solve(ind+1,0,n,prices));
}

/*After sell we will not able to buy just after, we need to cool down
so do ind+2.
Method 1. use of Recursion + Memoization (DP)
 TC: O(n*2), SC: O(n*2)+O(n)
TLE
*/
var maxProfit = function (prices) {
  let n = prices.length;
  let dp = Array.from({ length: n }, () => Array(2).fill(-1));
  return solve(0, 1, n, prices, dp); //ind, buy
};
function solve(ind, buy, n, prices, dp) {
  //base case, here we move i+2, so do
  if (ind >= n) return 0;
  if (dp[ind][buy] !== -1) return dp[ind][buy];
  let profit = 0;
  //main code
  if (buy) {
      profit = Math.max(-prices[ind] + solve(ind + 1, 0, n, prices,dp), solve(ind + 1, 1, n, prices,dp));
  } else {
      profit = Math.max(prices[ind] + solve(ind + 2, 1, n, prices,dp), solve(ind + 1, 0, n, prices,dp));
  }
  dp[ind][buy] = profit;
  return dp[ind][buy];
}

/*After sell we will not able to buy just after, we need to cool down
so do ind+2.
Method 2 use of Tabuilization
 TC: O(n*2), SC: O(n*2)
TLE
*/
var maxProfit = function (prices) {
  let n = prices.length;
  let dp = Array.from({ length: n+2 }, () => Array(2).fill(0));
  //base case, as we already filling 0, so need of base case
  //movement start, from n-1 to 0
  for(let i=n-1; i>=0; i--){
      for(let buy=0; buy<=1; buy++){
          if(buy){
              dp[i][buy] = Math.max(-prices[i]+dp[i+1][0], dp[i+1][1]);
          }else{
              dp[i][buy] = Math.max(prices[i]+dp[i+2][1], dp[i+1][0]);
          }
      }
  }
  return dp[0][1];
};

/*After sell we will not able to buy just after, we need to cool down
so do ind+2.
Method 3 use of Space Optimization. here we are talking about i+2.
so need to take a other arr front2 also. and also we can remove buy loop
as we know there will be only 2 opn will happen buy and sell
 TC: O(n), SC: O(6) ~ O(1)
TLE
*/
var maxProfit = function (prices) {
  let n = prices.length;
  let ahead2 = Array(2).fill(0);
  let ahead1 = Array(2).fill(0);
  let curr = Array(2).fill(0);
  //base case, as we already filling 0, so need of base case
  //movement start, from n-1 to 0
  for(let i=n-1; i>=0; i--){
      
      curr[1] = Math.max(-prices[i]+ahead1[0], ahead1[1]);
      curr[0] = Math.max(prices[i]+ahead2[1], ahead1[0]);
      ahead2 = [...ahead1]; //copying the value 
      ahead1 = [...curr];
  }
  return ahead1[1];
};
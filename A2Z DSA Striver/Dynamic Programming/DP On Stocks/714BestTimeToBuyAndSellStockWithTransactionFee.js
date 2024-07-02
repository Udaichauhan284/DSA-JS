/* 714. Best Time to Buy and Sell Stock with Transaction fee
Input: prices = [1,3,2,8,4,9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
*/

/* Here we just need to minus the fee. 
Recursion : O(2^n), SC: O(n)
*/
var maxProfit = function(prices, fee) {
  let n = prices.length;
  return solve(0,1,n,prices,fee); //i,buy
};
function solve(i,buy,n,prices,fee){
  //base case
  if(i === n) return 0;
  let profit = 0;
  if(buy){
      profit = Math.max(-prices[i]-fee+solve(i+1,0,n,prices,fee), solve(i+1,1,n,prices,fee));
  }else{
      profit = Math.max(prices[i]+solve(i+1,1,n,prices,fee), solve(i+1,0,n,prices,fee));
  }

  return (profit);
}

/* Here we just need to minus the fee. 
Method 1: use of Memoization
 TC: O(n*2), SC: O(n*2)+O(n)
*/
var maxProfit = function(prices, fee) {
  let n = prices.length;
  let dp = Array.from({length: n}, () => Array(2).fill(-1));
  return solve(0,1,n,prices,fee,dp); //i,buy
};
function solve(i,buy,n,prices,fee,dp){
  //base case
  if(i === n) return 0;
  if(dp[i][buy] !== -1) return dp[i][buy];
  let profit = 0;
  if(buy){
      profit = Math.max(-prices[i]-fee+solve(i+1,0,n,prices,fee,dp), solve(i+1,1,n,prices,fee,dp));
  }else{
      profit = Math.max(prices[i]+solve(i+1,1,n,prices,fee,dp), solve(i+1,0,n,prices,fee,dp));
  }
  dp[i][buy] = profit;
  return dp[i][buy];
}

/* Use of Tabuilization Bottom Up use of for loop
n-1 to 0
TC: O(n*2), SC: O(n*2)
*/
var maxProfit = function(prices, fee) {
  let n = prices.length;
  let dp = Array.from({length: n+1}, () => Array(2).fill(0));

  //base case, no need of base case, as dp filled with 0 

  for(let i=n-1; i>=0; i--){
      for(let buy=0; buy<=1; buy++){
          if(buy){
              dp[i][buy] = Math.max(-prices[i]-fee + dp[i+1][0], dp[i+1][1]);
          }else{
              dp[i][buy] = Math.max(prices[i]+dp[i+1][1], dp[i+1][0]);
          }
      }
  }
  return dp[0][1];
};

//MOst Important approah
/* Method 3 - use of Space Optimization. here we use 4 variable, aheadBuy, aheadNotBuy
currBuy and currNotBuy. and no use of buy loop.
n-1 to 0
TC: O(n), SC: O(1)
*/
var maxProfit = function (prices, fee) {
  let n = prices.length;
  let aheadBuy, aheadNotBuy, currBuy, currNotBuy;
  aheadBuy = aheadNotBuy = 0;

  //base case, no need of base case, as dp filled with 0 

  for (let i = n - 1; i >= 0; i--) {
      currBuy = Math.max(-prices[i] - fee + aheadNotBuy, aheadBuy);
      currNotBuy = Math.max(prices[i] + aheadBuy, aheadNotBuy);

      //swap as we move forward
      aheadBuy = currBuy;
      aheadNotBuy = currNotBuy;
  }
  return aheadBuy;
};
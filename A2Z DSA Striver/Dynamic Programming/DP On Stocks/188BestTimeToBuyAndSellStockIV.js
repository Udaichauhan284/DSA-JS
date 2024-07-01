/* 188. Best Time to Buy and Sell Stock IV
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
*/

/*This can be done same ques 123
here we have given transaction limit which is k
DP array DP[n][k]
The dp array dimensions should be [n][2 * k + 1] because tran ranges from 0 to 2k - 1 (representing k transactions, each transaction has two states: buy and sell).
Method 1 - use of DP Memoization
TC: O(n*k), SC: O(n*k)+O(n)
*/
var maxProfit = function(k, prices) {
  //here k means trancation and trans have two thing buy and sell
  let n = prices.length;
  let dp = Array.from({length: n}, () => Array(2*k).fill(-1));
  return solve(0,0,prices,k,n,dp); //ind,tran
};
function solve(ind,tran,prices,k,n,dp){
  //base case
  if(ind === n) return 0;
  if(tran === 2*k) return 0;
  if(dp[ind][tran] !== -1) return dp[ind][tran];
  let profit = 0;
  //movemnt
  if(tran % 2 === 0){
      profit = Math.max(-prices[ind]+solve(ind+1,tran+1,prices,k,n,dp), solve(ind+1,tran,prices,k,n,dp));
  }else{
      profit = Math.max(prices[ind]+solve(ind+1,tran+1,prices,k,n,dp), solve(ind+1,tran,prices,k,n,dp));
  }
  dp[ind][tran] = profit;
  return dp[ind][tran];
}


/* Method 2 - use of Tabulization
TC: O(n*k), SC: O(n*k)
*/
var maxProfit = function(k, prices) {
  let n = prices.length;
  let dp = Array.from({length: n+1}, () => Array(2*k+1).fill(0));

  //base case, when ind === n
  for(let t=0; t<=(2*k); t++){
      dp[n][t] = 0;
  }
  //when t = 0
  for(let i=0; i<=n; i++){
      dp[i][0] = 0;
  }

  //moement
  for(let i=n-1; i>=0; i--){
      for(let t=1; t<=(2*k); t++){
          if(t%2 === 0){
              dp[i][t] = Math.max(-prices[i]+dp[i+1][t-1], dp[i+1][t]);
          }else{
              dp[i][t] = Math.max(prices[i]+dp[i+1][t-1], dp[i+1][t]);
          }
      }
  }
  return dp[0][2*k];
};


/* Method 3 - use of Space Optimization
TC: O(n*k), SC: O(k)
*/
var maxProfit = function(k, prices) {
  let n = prices.length;
  let ahead = Array(2*k+1).fill(0);

  //base case, when ind === n
  for(let t=0; t<=(2*k); t++){
      ahead[t] = 0;
  }

  //moement
  for(let i=n-1; i>=0; i--){
      let curr = Array(2*k+1).fill(0);
      for(let t=1; t<=(2*k); t++){
          if(t%2 === 0){
              curr[t] = Math.max(-prices[i]+ahead[t-1], ahead[t]);
          }else{
              curr[t] = Math.max(prices[i]+ahead[t-1], ahead[t]);
          }
      }
      ahead = curr;
  }
  return ahead[2*k];
};
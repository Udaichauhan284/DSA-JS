/* 121. Best Time to Buy and Sell Stock
DP on Stocks

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

/* Brute Method, find the min pice first and then do max in loop
to find the price[i]-min. that will give you maxProft
TC: O(n), SC: O(1)
*/
var maxProfit = function(prices) {
  let len = prices.length;
  let minElement = Number.MAX_VALUE;
  let maxProfit = 0;
  for(let i=0; i<len; i++){
      minElement = Math.min(minElement, prices[i]);
      maxProfit = Math.max(maxProfit, prices[i]-minElement);
  }
  return maxProfit;
};

/*Method 2 - use of DP on Stocks, remebering the mini
TC: O(n). SC: O(1)
*/
var maxProfit = function(prices) {
  let n = prices.length;
  let mini = prices[0];
  let maxProfit = 0;
  for(let i=1; i<n; i++){
      let currProfit = prices[i]-mini;
      maxProfit = Math.max(maxProfit, currProfit);
      mini = Math.min(mini, prices[i]); //remeberring the mini
  }
  return maxProfit;
};
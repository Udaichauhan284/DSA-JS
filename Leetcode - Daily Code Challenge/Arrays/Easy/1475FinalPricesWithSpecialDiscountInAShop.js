/* 1475 Final Prices With Special Discount in A Shop
18 Dec 2024, Leetcode POTD, Array, Nested Loops, Monotonic Stack

Input: prices = [8,4,6,2,3]
Output: [4,2,4,2,3]
Explanation: 
For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
For items 3 and 4 you will not receive any discount at all.
*/

/*Brute Method, in this we will use the Nested loops, for 
finding the next smallest or equal price.
TC: O(n^2), SC: O(1)
*/
var finalPrices = function(prices) {
  let len = prices.length;
  let result = [...prices]; 
  for(let i=0; i<len; i++){
      for(let j=i+1; j<len; j++){
          if(prices[j] <= prices[i]){
              result[i] -= prices[j];
              break;
          }
      }
  }
  return result;
};


/*In this optimal method, we can use the monotonic stack, 
which is in increasing order, because we need to check the
mini on the right side, for each iteration
TC: O(n), SC: O(n)
*/
var finalPrices = function(prices) {
  let len = prices.length;
  let result = [...prices];
  let monoSt = [];
  for(let i=0; i<len; i++){
      while(monoSt.length > 0 && prices[i] <= prices[monoSt[monoSt.length-1]]){
          result[monoSt[monoSt.length-1]] -= prices[i];
          monoSt.pop();
      }
      monoSt.push(i);
  }
  return result;
};
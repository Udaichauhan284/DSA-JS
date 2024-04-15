/* Number of Coins [25,10,5]
value = 30
o/p: 2 [5,25]

this is a greedy way to solve the solution
travser from back of arr and see while V >= arr[i], V -= arr[i] and push into ans array, O(V)
*/
class Solution{
  minCoins(coins, V, M)
  {
      //your code here
      let ans = [];
      for(let i=coins.length-1; i>=0; i--){
          while(V >= coins[i]){ //it will go till V is greater
              V -= coins[i]; //keep of subtracting from that value, then push
              ans.push(coins[i]);
          }
      }
      return ans;
  }
}

/* 1043 Parition Array for Maximum Sum
Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]
*/

/*IN this we do front Partition, in this we pass ind which is 0 and move
from j=ind to min(n,ind+k) and find the local max and find the len of that 
subarr and find the sum = (len * localMax)+f(j+1)
TC: O(exponetial), SC: O(n)
TLE
*/
var maxSumAfterPartitioning = function(arr, k) {
  let n = arr.length;
  return solve(0,n,arr,k);
};
function solve(i,n,arr,k){
  //base case
  if(i === n) return 0;
  let len = 0;
  let localMaxi = Number.MIN_VALUE;
  let maxAns = Number.MIN_VALUE;
  for(let j=i; j<Math.min(n,i+k); j++){
      len++;
      localMaxi = Math.max(localMaxi, arr[j]);
      let sum = (len*localMaxi)+solve(j+1,n,arr,k);
      maxAns = Math.max(maxAns, sum);
  }
  return maxAns;
}

/*IN this we do front Partition, in this we pass ind which is 0 and move
from j=ind to min(n,ind+k) and find the local max and find the len of that 
subarr and find the sum = (len * localMax)+f(j+1)
Method 1- use of DP , DP of length n
TC: O(n*k), SC: O(n)+auxilary spaceO(n)
*/
var maxSumAfterPartitioning = function(arr, k) {
  let n = arr.length;
  let dp = Array(n).fill(-1);
  return solve(0,n,arr,k,dp);
};
function solve(i,n,arr,k,dp){
  //base case
  if(i === n) return 0;
  if(dp[i] !== -1) return dp[i];
  let len = 0;
  let localMaxi = Number.MIN_VALUE;
  let maxAns = Number.MIN_VALUE;
  for(let j=i; j<Math.min(n,i+k); j++){
      len++;
      localMaxi = Math.max(localMaxi, arr[j]);
      let sum = (len*localMaxi)+solve(j+1,n,arr,k,dp);
      maxAns = Math.max(maxAns, sum);
  }
  dp[i] = maxAns;
  return dp[i];
}


/*IN this we do front Partition, in this we pass ind which is 0 and move
from j=ind to min(n,ind+k) and find the local max and find the len of that 
subarr and find the sum = (len * localMax)+f(j+1)
Method 2- Use of Tabulization, here we move from n-1 to 0
and dp will n+1; and inner loop do the main function
TC: O(n*k), SC: O(n)
*/
var maxSumAfterPartitioning = function(arr, k) {
  let n = arr.length;
  let dp = Array(n+1).fill(0);
  //base case i === n, fill with 0, but dp arr already 0
  //movement start
  for(let i=n-1; i>=0; i--){
      let len = 0;
      let localMaxi = Number.MIN_VALUE;
      let maxAns = Number.MIN_VALUE;
      for(let j=i; j<Math.min(n,i+k); j++){
          len++;
          localMaxi = Math.max(localMaxi, arr[j]);
          let sum = (len*localMaxi)+dp[j+1];
          maxAns = Math.max(maxAns, sum);
      }
      dp[i] = maxAns;
  }
  return dp[0];
};
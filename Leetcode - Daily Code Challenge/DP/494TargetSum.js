/*494 Target Sum
26 Dec 2024, Leetcode POTD, Array, DP, Memoization, Recursion

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

*/


/*26 Dec 2024, Brute Method, Use of Recursion, we have two options
plus and minus, so we use Recursion for that, TC: O(2^n), SC: O(n)
*/
var findTargetSumWays = function(nums, target) {
  return solve(nums, 0, 0, target);
};
function solve(nums, ind, currSum, target){
  //base case
  if(ind === nums.length){
      //when ind is equal to nums.length, so check currSum is 
      //equal to target or not, if yes return one way possible
      if(currSum === target){
          return 1;
      }
      return 0;
  }
  //now plus and minus case
  let plus = solve(nums,ind+1, currSum+nums[ind], target);
  let minus = solve(nums, ind+1, currSum-nums[ind], target);

  return (plus+minus);
}



/*Optimal Method, we can use Recursion, we have two options
where we can choose plus or minus. 
TC: O(n * target), SC: O(n);
*/
var findTargetSumWays = function(nums, target) {
  let len = nums.length;
  let totalSum = 0;
  for(let i=0; i<len; i++){
      totalSum += nums[i];
  }

  let dp = Array.from({length: len+1}, () => Array(2*totalSum+1).fill(-1));
  return solve(nums, 0, 0, target, dp, totalSum);
};
function solve(nums, ind, currSum, target, dp, totalSum){
  if(ind === nums.length){
      if(currSum === target){
          return 1;
      }
      return 0;
  }
  if(dp[ind][currSum+totalSum] !== -1){
      return dp[ind][currSum+totalSum];
  }
  let plus = solve(nums,ind+1, currSum+nums[ind], target, dp, totalSum);
  let minus = solve(nums,ind+1, currSum-nums[ind], target, dp, totalSum);

  dp[ind][currSum+totalSum] = plus+minus;
  return dp[ind][currSum+totalSum];
}
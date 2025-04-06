/* 368 Largest Divisible Subset
Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.

Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.
*/

/*Here we need the subsets, so subsets can we in any order.
we can change this ques into LISubseq. we just need to sort the 
arr, when we sort the array, we know arr[i] will greater than 
arr[prev] so in for loop no need to check this. we just need to 
check the divisble condition
TC: O(n^2)+O(n)(for filling the lis) ~ O(n^2), SC: O(n)
*/
var largestDivisibleSubset = function (nums) {
  //first we need to sort the nums
  nums = nums.sort((a, b) => a - b);
  let n = nums.length;
  let dp = Array(n).fill(1);
  let hash = []; //this will size of n
  let maxi = 1;
  let largestIndex = 0;
  for (let i = 0; i < n; i++) {
    hash[i] = i;
    for (let prev = 0; prev < i; prev++) {
      if (nums[i] % nums[prev] === 0 && dp[i] < dp[prev] + 1) {
        dp[i] = 1 + dp[prev];
        hash[i] = prev;
      }
    }
    //update the lastInde and maxi length
    if (dp[i] > maxi) {
      maxi = dp[i];
      largestIndex = i;
    }
  }
  let lis = [];
  while (hash[largestIndex] !== largestIndex) {
    lis.push(nums[largestIndex]);
    largestIndex = hash[largestIndex];
  }
  lis.push(nums[largestIndex]);
  return lis;
};

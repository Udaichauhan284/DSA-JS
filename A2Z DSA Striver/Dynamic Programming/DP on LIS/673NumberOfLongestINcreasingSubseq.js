/* 673 Number of Longest Increasing Subsequenece
Given an integer array nums, return the number of longest increasing subsequences.

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

*/

/* This is also done by LIS. in this we just need to maintain the
count of same length LIS till that index. for that take count arr
in this when dp[i] === dp[prev]+1 then we need to increase the 
count
TC: O(n^2), SC: O(n)
*/
var findNumberOfLIS = function (nums) {
  let n = nums.length;
  let dp = Array(n).fill(1);
  let count = Array(n).fill(1);
  let maxi = 1;
  for (let i = 0; i < n; i++) {
    for (let prev = 0; prev < i; prev++) {
      if (nums[i] > nums[prev] && dp[i] < dp[prev] + 1) {
        dp[i] = 1 + dp[prev];
        count[i] = count[prev];
      } else if (nums[i] > nums[prev] && dp[i] === dp[prev] + 1) {
        count[i] += count[prev];
      }
    }
    maxi = Math.max(maxi, dp[i]);
  }
  let numberOfLIS = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] === maxi) {
      numberOfLIS += count[i];
    }
  }
  return numberOfLIS;
};

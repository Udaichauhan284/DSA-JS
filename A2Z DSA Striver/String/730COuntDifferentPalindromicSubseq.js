/* 730. Count Different Palindromic Subsequences
Input: s = "bccb"
Output: 6
Explanation: The 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
Note that 'bcb' is counted only once, even though it occurs twice.
*/ 

/*Solve by dp, in this we divide str in middle parts and then
check
TC: O(n*n), SC: O(n*n)+O(n) auxilary stack space
*/
var countPalindromicSubsequences = function (s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(-1));
  return solve(0, n - 1, s, dp);
};
function solve(start, end, s, dp) {
  let mod = 1000000007;
  //base case
  if (start > end) return 0;
  if (start === end) return 1;
  //dp base case
  if (dp[start][end] !== -1) return dp[start][end];

  if (s[start] === s[end]) {
      //find the middle part and check for duplicate
      let left = start + 1;
      let right = end - 1;
      while (left <= right && s[left] !== s[start]) left++;
      while (left <= right && s[right] !== s[start]) right--;

      if (left > right) {
          dp[start][end] = (2 * solve(start + 1, end - 1, s, dp) + 2) % mod;
      } else if (left === right) {
          dp[start][end] = (2 * solve(start + 1, end - 1, s, dp) + 1) % mod;
      } else {
          //need to minus the middle part, duplicate
          dp[start][end] = (2 * solve(start + 1, end - 1, s, dp) - solve(left + 1, right - 1, s, dp) + mod) % mod;
      }
  } else {
      dp[start][end] = (solve(start + 1, end, s, dp) + solve(start, end - 1, s, dp) - solve(start + 1, end - 1, s, dp) + mod) % mod;
  }

  return dp[start][end];
}
/* DP On Strings
1143. Longest Common Subsequence
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
*/

/* Brute Method Recursion, when char match, decrease the both
index, and when did not match, decarese one by one and take max
of it.
TC: O(2^n * 2^m), TLE
*/
var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length;
  let m = text2.length;
  return solve(n - 1, m - 1, text1, text2);
};
function solve(ind1, ind2, str1, str2) {
  //base case, by decraseing the indexs, they reach to -1
  if (ind1 < 0 || ind2 < 0) {
    return 0;
  }
  //match
  if (str1[ind1] === str2[ind2]) {
    return 1 + solve(ind1 - 1, ind2 - 1, str1, str2);
  }
  //not match
  return Math.max(
    solve(ind1 - 1, ind2, str1, str2),
    solve(ind1, ind2 - 1, str1, str2)
  );
}

/*Method 1  optimal method then recursion
use of Memoization(Recursion + DP array)
TC: O(n*m), SC: O(n*m)+O(n+m) ~ O(n*m)+O(n)
*/
var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length;
  let m = text2.length;
  let dp = Array.from({ length: n }, () => Array(m).fill(-1));
  return solve(n - 1, m - 1, text1, text2, dp);
};
function solve(ind1, ind2, str1, str2, dp) {
  //base case
  if (ind1 < 0 || ind2 < 0) return 0;
  if (dp[ind1][ind2] !== -1) return dp[ind1][ind2];

  //match
  if (str1[ind1] === str2[ind2]) {
    dp[ind1][ind2] = 1 + solve(ind1 - 1, ind2 - 1, str1, str2, dp);
    return dp[ind1][ind2];
  }
  //not match
  return (dp[ind1][ind2] = Math.max(
    solve(ind1 - 1, ind2, str1, str2, dp),
    solve(ind1, ind2 - 1, str1, str2, dp)
  ));
}

/*Method 2
use of Tabulization
TC: O(n*m), SC: O(n*m)
in this, just take care of base case, as our base case occur when 
we hit -1, so right shift the index like that, n point to n-1,
0 point to -1, and 1 point to 0.
for that dp[n+1][m+1], return (n,m)
*/
var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length;
  let m = text2.length;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  //base case, ind1 wll remain same, ind2 will move and dp[0][j] =0
  for (let ind2 = 0; ind2 <= m; ind2++) {
    dp[0][ind2] = 0;
  }
  //now ind2 will same and ind1 will change
  for (let ind1 = 0; ind1 <= n; ind1++) {
    dp[ind1][0] = 0;
  }

  //movement for checking match or not macth two for loop
  for (let ind1 = 1; ind1 <= n; ind1++) {
    for (let ind2 = 1; ind2 <= m; ind2++) {
      if (text1[ind1 - 1] === text2[ind2 - 1]) {
        dp[ind1][ind2] = 1 + dp[ind1 - 1][ind2 - 1];
      } else {
        dp[ind1][ind2] = Math.max(dp[ind1 - 1][ind2], dp[ind1][ind2 - 1]);
      }
    }
  }
  return dp[n][m];
};

/*Method 3
use of Space Optimization
TC: O(n*m), SC: O(n)
in this, just take care of base case, as our base case occur when 
we hit -1, so right shift the index like that, n point to n-1,
0 point to -1, and 1 point to 0.
for that dp[n+1][m+1], return (n,m)
*/
var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length;
  let m = text2.length;
  let prev = Array(m + 1).fill(0);

  //base case
  for (let ind2 = 0; ind2 <= m; ind2++) {
    prev[ind2] = 0;
  }

  //movement for checking match or not macth two for loop
  for (let ind1 = 1; ind1 <= n; ind1++) {
    let curr = Array(m + 1).fill(0);
    for (let ind2 = 1; ind2 <= m; ind2++) {
      if (text1[ind1 - 1] === text2[ind2 - 1]) {
        curr[ind2] = 1 + prev[ind2 - 1];
      } else {
        curr[ind2] = Math.max(prev[ind2], curr[ind2 - 1]);
      }
    }
    prev = curr;
  }
  return prev[m];
};

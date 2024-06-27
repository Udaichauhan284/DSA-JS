/* 1092. Shortest Common Supersequence 
Input: str1 = "abac", str2 = "cab"
Output: "cabac"
Explanation: 
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.
*/

/* In this we also use LCS, for knowing the len of LCS, length of Shortest
Common Supersequence n+m - len(lcs).
for priniting we need the DP array.
TC: O(n*m), SC:O(n*m);
*/
var shortestCommonSupersequence = function (str1, str2) {
  let n = str1.length;
  let m = str2.length;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  //movement start
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  //now print the string from DP array
  let ans = "";
  let i = n,
    j = m;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      ans += str1[i - 1];
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      ans += str1[i - 1];
      i--;
    } else {
      ans += str2[j - 1];
      j--;
    }
  }
  //now we reach at top 0 so maybe some still remaining
  while (i > 0) {
    ans += str1[i - 1];
    i--;
  }
  while (j > 0) {
    ans += str2[j - 1];
    j--;
  }
  //now reverse the string, because we started from bottom to top
  ans = ans.split("").reverse().join("");
  return ans;
};

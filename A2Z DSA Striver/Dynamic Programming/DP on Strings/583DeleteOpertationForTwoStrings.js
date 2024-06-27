/* 583. Delete Operation for Two Strings
Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.

Example 1:
Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
*/

/*Deletion - n - len(LCS)
Insertion so that lcs will become word2 -> m - len(LCS)
so ans - n+m - 2len(LCS)
TC: O(n*m), SC: O(n*m)
*/
var minDistance = function (word1, word2) {
  let n = word1.length;
  let m = word2.length;
  let lenLongCommonSubseq = longestCommonSubseq(word1, word2);
  return n + m - 2 * lenLongCommonSubseq;
};
function longestCommonSubseq(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      //match
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        ans = Math.max(ans, dp[i][j]);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return ans;
}

/* Method 2 - use of Space Optimization
Deletion - n - len(LCS)
Insertion so that lcs will become word2 -> m - len(LCS)
so ans - n+m - 2len(LCS)
TC: O(n*m), SC: O(n)
*/
var minDistance = function (word1, word2) {
  let n = word1.length;
  let m = word2.length;
  let lenLongCommonSubseq = longestCommonSubseq(word1, word2);
  return n + m - 2 * lenLongCommonSubseq;
};
function longestCommonSubseq(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  let prev = Array(m + 1).fill(0);
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let curr = Array(m + 1).fill(0);
    for (let j = 1; j <= m; j++) {
      //match
      if (str1[i - 1] === str2[j - 1]) {
        curr[j] = 1 + prev[j - 1];
        ans = Math.max(ans, curr[j]);
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    prev = curr;
  }
  return ans;
}

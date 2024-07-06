/* 132 Palindrome Partitioning II
Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
*/

var minCut = function (s) {
  let n = s.length;
  if (n <= 1) return 0;

  // Precompute whether each substring is a palindrome
  let isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));
  for (let end = 0; end < n; end++) {
    for (let start = 0; start <= end; start++) {
      if (
        s[start] === s[end] &&
        (end - start <= 2 || isPalindrome[start + 1][end - 1])
      ) {
        isPalindrome[start][end] = true;
      }
    }
  }

  // DP array to store the minimum cuts
  let dp = Array(n).fill(Number.MAX_VALUE);
  for (let end = 0; end < n; end++) {
    if (isPalindrome[0][end]) {
      dp[end] = 0;
    } else {
      for (let start = 0; start < end; start++) {
        if (isPalindrome[start + 1][end]) {
          dp[end] = Math.min(dp[end], dp[start] + 1);
        }
      }
    }
  }

  return dp[n - 1];
};

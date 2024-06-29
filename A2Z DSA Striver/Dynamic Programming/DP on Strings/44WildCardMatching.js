/* 44 WildCard Matching
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
*/

/*Recursion Method. two case, if match s[i]===p[j], p[j]==="?", other case
when we have "*" so assume "*" as empty string (in ES, p->j pointer will
move and char value(i will move)
TC: expontetial
*/
var isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;
  return solve(n - 1, m - 1, s, p);
};
function solve(i, j, s, p) {
  //base if
  //if both s nad p consumed
  if (i < 0 && j < 0) return true;
  //if s not consumed but p comusned
  if (i >= 0 && j < 0) return false;
  //if s comsumend but p didnot consumed
  if (i < 0 && j >= 0) {
    //now you need to check if in pattern is there any start
    for (let k = 0; k <= j; k++) {
      if (p[k] !== "*") {
        return false;
      }
    }
    return true;
  }
  //movement strat match and not match
  if (s[i] === p[j] || p[j] === "?") {
    return solve(i - 1, j - 1, s, p);
  } else if (p[j] === "*") {
    return solve(i, j - 1, s, p) || solve(i - 1, j, s, p);
  } else return false;
}

/*Method 1 - use of Memoization DP two case, if match s[i]===p[j], p[j]==="?",other case
when we have "*" so assume "*" as empty string (in ES, p->j pointer will
move and char value(i will move)
TC: O(n*m), SC: O(n*m)+O(n)
*/
var isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;
  let dp = Array.from({ length: n }, () => Array(m).fill(-1));
  return solve(n - 1, m - 1, s, p, dp);
};
function solve(i, j, s, p, dp) {
  //base if
  //if both s nad p consumed
  if (i < 0 && j < 0) return true;
  //if s not consumed but p comusned
  if (i >= 0 && j < 0) return false;
  //if s comsumend but p didnot consumed
  if (i < 0 && j >= 0) {
    //now you need to check if in pattern is there any start
    for (let k = 0; k <= j; k++) {
      if (p[k] !== "*") {
        return false;
      }
    }
    return true;
  }
  if (dp[i][j] !== -1) return dp[i][j];
  //movement strat match and not match
  if (s[i] === p[j] || p[j] === "?") {
    return (dp[i][j] = solve(i - 1, j - 1, s, p, dp));
  } else if (p[j] === "*") {
    return (dp[i][j] = solve(i, j - 1, s, p, dp) || solve(i - 1, j, s, p, dp));
  } else return false;
}

/*Method 2 - use of Tabulization
TC: O(n*m), SC: O(n*m)
*/
var isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

  // Base case: both strings are empty
  dp[0][0] = true;

  // If s is empty, check if p can match an empty string
  for (let j = 1; j <= m; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }

  // Fill the rest of the dp table
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      } else if (p[j - 1] === "?" || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[n][m];
};

/*Method 3 - use of Space Optimization
TC: O(n*m), SC: O(n)
*/
var isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;
  let prev = Array(m + 1).fill(false);

  // Base case: both strings are empty
  prev[0] = true;

  // If s is empty, check if p can match an empty string
  for (let j = 1; j <= m; j++) {
    if (p[j - 1] === "*") {
      prev[j] = prev[j - 1];
    }
  }

  // Fill the rest of the dp table
  for (let i = 1; i <= n; i++) {
    let curr = Array(m + 1).fill(false);
    curr[0] = false;
    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === "*") {
        curr[j] = prev[j] || curr[j - 1];
      } else if (p[j - 1] === "?" || s[i - 1] === p[j - 1]) {
        curr[j] = prev[j - 1];
      } else {
        curr[j] = false;
      }
    }
    prev = curr;
  }

  return prev[m];
};

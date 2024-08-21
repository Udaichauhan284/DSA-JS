/* 664 Stranger Printer - HARD 
21 August 2024, Leetcode POTD, Array, DP

There is a strange printer with the following two special properties:

The printer can only print a sequence of the same character each time.
At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.
Given a string s, return the minimum number of turns the printer needed to print it.

Example 1:

Input: s = "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".
Example 2:

Input: s = "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
*/


/*IN this solve by recursion, for simple s it will be easy
but for aba likes, we have to start i from l+1 and goes till
to check when s[l]==s[j] and change it.
Method 1- use of recursion --- TLE
*/
var strangePrinter = function(s) {
  let n = s.length;
  return solve(0, n-1, s);
};
function solve(l, r, s){
  if(l === r) return 1;
  if(l > r) return 0;
  //now point i
  let i = l+1;
  while(i <= r && s[i] === s[l]){
      i++;
  }
  if(i === r+1) return 1;
  //now find ans for normal s
  let normal = 1 + solve(i, r, s);
  let nextOne = Number.MAX_VALUE;
  for(let j=i; j<=r; j++){
      if(s[l] === s[j]){
          let currOne = solve(i, j-1, s) + solve(j, r, s);
          nextOne = Math.min(nextOne, currOne);
      }
  }
  return Math.min(nextOne, normal);
}


/*IN this solve by recursion, for simple s it will be easy
but for aba likes, we have to start i from l+1 and goes till
to check when s[l]==s[j] and change it.
Method 2- use of recursion + Meomization -> DP
TC: O(n^3), SC: O(n^2)
*/
var strangePrinter = function(s) {
  let n = s.length;
  //two things are changing l and r, so 2d array
  let dp = Array.from({length: n+1}, () => Array(n+1).fill(-1));
  return solve(0, n-1, s, dp);
};
function solve(l, r, s, dp){
  if(l === r) return 1;
  if(l > r) return 0;
  //check for dp
  if(dp[l][r] !== -1) return dp[l][r];

  //now point i
  let i = l+1;
  while(i <= r && s[i] === s[l]){
      i++;
  }

  if(i === r+1) return 1;

  //now find ans for normal s
  let normal = 1 + solve(i, r, s, dp);
  let nextOne = Number.MAX_VALUE;
  for(let j=i; j<=r; j++){
      if(s[l] === s[j]){
          let currOne = solve(i, j-1, s, dp) + solve(j, r, s, dp);
          nextOne = Math.min(nextOne, currOne);
      }
  }
  dp[l][r] = Math.min(nextOne, normal);
  return dp[l][r];
}
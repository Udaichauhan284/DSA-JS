/* 516. Longest Palindromic Subsequence
Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
*/

/*In this we just need to reverse the string and send the 
original string and reverse string to LCS function
we can get the our ans.
TC: O(n*m), SC: O(n*m) first for Tabulization
*/
var longestPalindromeSubseq = function(s) {
  let reverseStr = s.split("").reverse().join("");
  return longestCommonSubseq(s,reverseStr);
};
function longestCommonSubseq(str1, str2){
  let n = str1.length;
  let m = str2.length;
  let dp = Array.from({length: n+1}, ()=>Array(m+1).fill(0));
  let ans = 0;
  //now need to fill row and col with 0, as we already declare
  //with 0
  //movement pick and notpick
  for(let i=1; i<=n; i++){
      for(let j=1; j<=m; j++){
          //matching
          if(str1[i-1] === str2[j-1]){
              dp[i][j] = 1 + dp[i-1][j-1];
              ans = Math.max(ans, dp[i][j]);
          }else{
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
          }
      }
  }
  return ans;
}

/*In this we just need to reverse the string and send the 
original string and reverse string to LCS function
we can get the our ans.
Method 2- use of Space Optimization
TC: O(n*m), SC: O(n)
*/
var longestPalindromeSubseq = function(s) {
  let reverseStr = s.split("").reverse().join("");
  return longestCommonSubseq(s,reverseStr);
};
function longestCommonSubseq(str1, str2){
  let n = str1.length;
  let m = str2.length;
  let prev = Array(m+1).fill(0);
  let ans = 0;
  //now need to fill row and col with 0, as we already declare
  //with 0
  //movement pick and notpick
  for(let i=1; i<=n; i++){
      let curr = Array(m+1).fill(0);
      for(let j=1; j<=m; j++){
          //matching
          if(str1[i-1] === str2[j-1]){
              curr[j] = 1 + prev[j-1];
              ans = Math.max(ans, curr[j]);
          }else{
              curr[j] = Math.max(prev[j], curr[j-1]);
          }
      }
      prev = curr;
  }
  return ans;
}
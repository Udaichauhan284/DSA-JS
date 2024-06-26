/* 1312. Minimum Insertion Steps to Make a String Palindrome
Given a string s. In one step you can insert any character at any index of the string.

Return the minimum number of steps to make s palindrome.

A Palindrome String is one that reads the same backward as well as forward.

Example 1:
Input: s = "zzazz"
Output: 0
Explanation: The string "zzazz" is already palindrome we do not need any insertions.

Example 2:
Input: s = "mbadm"
Output: 2
Explanation: String can be "mbdadbm" or "mdbabdm".
*/ 


/* IN this ques first we need to our longest palindromic subsequence
so num of insertion = len of str - len of LPS
mbadm=len 5, longest palindromic subseq "mam" len 3, ans = 5-3 = 2 ans
how to find longest pakindromic subseq we need to know the LCS.
*/
var minInsertions = function(s) {
  let len = s.length;
  let longPalSubseqLen = longestPalindromSubseq(s);
  let numOfInsertion = len - longPalSubseqLen;
  return numOfInsertion;
};
//This function for knowing the longest palindromic subsequence, this function
//take help of LCS to find the logest common subseq
function longestPalindromSubseq(s){
  let reverseStr = s.split("").reverse().join("");
  return longestCommonSubseq(s, reverseStr);
}
//this is Longest Common Subsequence, use of Tabulization TC:O(n*m), SC: O(n*m)
function longestCommonSubseq(str1, str2){
  let n = str1.length;
  let m = str2.length;
  let dp = Array.from({length: n+1}, () => Array(m+1).fill(0));
  let ans = 0
  //movement, match and not match
  for(let i=1; i<=n; i++){
      for(let j=1; j<=m; j++){
          //match
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


/* IN this ques first we need to our longest palindromic subsequence
so num of insertion = len of str - len of LPS
mbadm=len 5, longest palindromic subseq "mam" len 3, ans = 5-3 = 2 ans
how to find longest pakindromic subseq we need to know the LCS.
*/
var minInsertions = function(s) {
  let len = s.length;
  let longPalSubseqLen = longestPalindromSubseq(s);
  let numOfInsertion = len - longPalSubseqLen;
  return numOfInsertion;
};
//This function for knowing the longest palindromic subsequence, this function
//take help of LCS to find the logest common subseq
function longestPalindromSubseq(s){
  let reverseStr = s.split("").reverse().join("");
  return longestCommonSubseq(s, reverseStr);
}
//Method 2- use of Space Optimizatio of LCS - TC: O(n*m), SC: O(n)
function longestCommonSubseq(str1, str2){
  let n = str1.length;
  let m = str2.length;
  let prev = Array(m+1).fill(0);
  let ans = 0
  //movement, match and not match
  for(let i=1; i<=n; i++){
      let curr = Array(m+1).fill(0);
      for(let j=1; j<=m; j++){
          //match
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
/* 214 Shortest Palindrome
(HARD)
You are given a string s. You can convert s to a 
palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

Example 1:
Input: s = "aacecaaa"
Output: "aaacecaaa"
*/

/*In this for making the palindrome, we need the reverse of str, so do
reverse of s and add in combined str s+"#"+reverse, and send it combined 
to LPS, we get the LongestPrefixSuffix from last of lps array
"abcd" => dcba => combined abcd#dcba, lps we get lps[8] = 1, 
slice 1 from str and rever it and add in s. to form the palindrome
TC: O(n), SC: O(1)
*/
var shortestPalindrome = function(s) {
  let reverseStr = s.split("").reverse().join("");
  let combined = s + "#" + reverseStr;
  let lps = computeLPS(combined);
  let longestPrefixSuffix = lps[lps.length - 1];
  let toAdd = s.slice(longestPrefixSuffix).split("").reverse().join("");
  return toAdd + s;
};
function computeLPS(s){
  let m = s.length;
  let lps = Array(m).fill(0);
  let len = 0;
  lps[0] = 0;
  let i = 1;
  while(i<m){
      if(s[i] === s[len]){
          len++;
          lps[i] = len;
          i++;
      }else{
          if(len !== 0){
              len = lps[len-1];
          }else{
              lps[i] = 0;
              i++;
          }
      }
  }
  return lps;
}
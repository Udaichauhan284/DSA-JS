/* 1048. Longest String Chain

Input: words = ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: One of the longest word chains is ["a","ba","bda","bdca"].
*/

/*This can be solve by using LIS, just here we need to sort the words
arr by its str length in increaing order, and then we can apply LIS
code , in if condition just we need to compare str[i] and str[j]
are they same or not.
TC: O(nlogn)+O(n^2)*l ~ O(n^2), SC: O(n)
*/
var longestStrChain = function (words) {
  //first need to sort the words arr, str legth
  words = words.sort((str1, str2) => str1.length - str2.length); //O(nlogn)
  let n = words.length;
  let maxi = 1;
  let dp = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    //O(n^2)*O(len)len=string length
    for (let prev = 0; prev < i; prev++) {
      if (compare(words[i], words[prev]) && dp[i] < dp[prev] + 1) {
        dp[i] = dp[prev] + 1;
      }
    }
    if (dp[i] > maxi) {
      maxi = dp[i];
    }
  }
  return maxi;
};
function compare(str1, str2) {
  if (str1.length !== str2.length + 1) return false;
  let first = 0;
  let second = 0;
  while (first < str1.length) {
    if (second < str2.length && str1[first] === str2[second]) {
      first++;
      second++;
    } else {
      first++;
    }
  }
  return first === str1.length && second === str2.length;
}

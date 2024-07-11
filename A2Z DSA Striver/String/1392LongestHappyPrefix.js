/* 1392 Longest Happy Prefix
Input: s = "level"
Output: "l"
Explanation: s contains 4 prefix excluding itself ("l", "le", "lev", "leve"), and suffix ("l", "el", "vel", "evel"). The largest prefix which is also suffix is given by "l".
*/

/*In this we also use LPS, as we need Happy prefix which
means, we need Longest Prefix and Suffix
TC; O(n+n) ~ O(2n) ~ O(n), SC: O(n)
*/
var longestPrefix = function(s) {
  let lps = computeLPS(s);
  let maxLen = lps[lps.length - 1]; //last elem
  let result = "";
  //loop on s, for extracting happy prefix
  for(let ch of s){
      if(maxLen !== 0){
          result += ch;
          maxLen--;
      }
  }
  return result;
};
function computeLPS(s){
  let m = s.length;
  let lps = Array(m).fill(0);
  let len = 0;
  lps[0] = 0;
  let i=1;
  while(i < m){
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
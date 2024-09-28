/*Brute Method
take frist one and then check for next one
for LCP
TC: O(n * m), n is for first word and m is for 
len of string
*/
var longestCommonPrefix = function(strs) {
  let len = strs.length;
  let ans = "";
  if(len <= 0){
      return ans;
  }
  for(let i=0; i<strs[0].length; i++){
      for(let str of strs){
          if(i === str.length || str[i] !== strs[0][i]){
              return ans;
          }
      }
      ans += strs[0][i];
  }
  return ans;
};



/*Optimal Method
sort the str, so that we get the dict order of str, then
we compare the first and last ele of str, for getting the
longest common prefix. TC: O(nlogn * m) m is len of min
of first and last len, as we take min len, because if
take longest elen so in smallest one, we have nothing to 
compare. SC: O(1)
*/
var longestCommonPrefix = function(strs) {
  let len = strs.length;
  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];
  let lcp = "";
  let limitForSearch = Math.min(first.length, last.length);
  for(let i=0; i<limitForSearch; i++){
      if(first[i] !== last[i]){
          return lcp;
      }
      lcp += first[i];
  }
  return lcp;
};

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));
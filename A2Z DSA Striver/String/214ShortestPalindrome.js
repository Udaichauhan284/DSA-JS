/* 214 Shortest Palindrome
(HARD)
You are given a string s. You can convert s to a 
palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

Example 1:
Input: s = "aacecaaa"
Output: "aaacecaaa"
*/


/*Solving on 20 Sept 2024, LC POTD, first rev the s, then we try
to see the suffix of rev and prefix of s if equal means we need
to return the rev.subStr(0, i) + s, other wise need to return 
whole rev+s, TC: O(n^2), SC: O(n)
*/
var shortestPalindrome = function(s) {
    let rev = s.split("").reverse().join("");
    //now for loop on s for checking 
    for(let i=0; i<s.length; i++){
        //now check Prefix === suffix
        if(s.substr(0, s.length-i) === rev.substr(i)){
            return rev.substr(0,i)+s;
        }
    }
    return rev+s
};


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



/*Solving on 20 sept 2024, LC POTD
Method 2- doing this using LPS(longest prefix suffix) this measn
we need to look for longest prefix in s qhich is equal in suffix
of it. we need to send the s+#+rev to lps
TC: O(n+n)~ O(2n) O(n), SC: O(n)
*/
var shortestPalindrome = function(s) {
    let rev = s.split("").reverse().join("");
    let combinedStr = s + "#" + rev;
    let lps = computeLPS(combinedStr);
    let longestPrefixSuffix = lps[lps.length-1]; //last one
    //toAdd measn we find the prefix=suffix, which is not common
    //in reverver which is maybe first few char, we find that 
    //with rev.subtr
    let toAdd = rev.substr(0, s.length-longestPrefixSuffix);
    return toAdd+s;
};
function computeLPS(s){
    let n = s.length;
    let lps = Array(n).fill(0);
    let len = 0;
    lps[0] = 0; //first lps array value will be zero
    //so we start from i=1;
    let i=1;
    while(i < n){
        if(s[i] === s[len]){
            len++;
            //update len in lps
            lps[i] = len;
            i++;
        }else if(len !== 0){
            len = lps[len-1];
        }else{
            lps[i] = 0;
            i++;
        }
    }
    return lps;
}
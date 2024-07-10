/* 28 Find the index of the first occurrence in a string
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/

/*In this we use nested for loop one for haystack and other
for needle. we will check i and j, we need to check according the 
len of needle, so we will do haystacl[i+j] and then check
when they match j will reach n-1 return i.
TC: O(m*n), SC:O(1)
*/
var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
  //edge case, when needle length is bigger than haystack
    if (n > m) return -1;
  //modification in m loop, why need to go till m, we can go till
  //m-n, we only need to check for length of n.
    for (let i = 0; i <= m - n; i++) {
        for (let j = 0; j < n; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
            if (j === n - 1) {
                return i;
            }
        }
    }
    return -1;
};

// Java code for Geeksforgeeks

// class Solution {
//   public int findMatching(String text, String pat) {
//       // Code here
//       int m = text.length();
//       int n = pat.length();
//       //edge case
//       if(n > m) return -1; //when pat is bigger then text
//       for(int i=0; i<=m-n; i++){
//           for(int j=0; j<n; j++){
//               if(text.charAt(i+j) != pat.charAt(j)){
//                   break;
//               }
//               if(j == n-1){ //measn j will reach end , and match
//                   return i;
//               }
//           }
//       }
//       return -1;//not fount
//   }
// }


/*Using Z-function
*/
var strStr = function(haystack, needle) {
    let newString = needle + "#" + haystack;
    let zArray = calculateZ(newString);
    for(let i=0; i<newString.length; i++){
        if(zArray[i] === needle.length){
            return i-needle.length-1;
        }
    }
    return -1;
};
function calculateZ(s){
    let n = s.length;
    let L=0;
    let R=0;
    let K=0;
    let Z = Array(n).fill(0);
    for(let i=1; i<n; i++){
        if(i > R){
            L = R = i;
            while(R < n && s[R] === s[R-L]){
                R++;
            }
            Z[i] = R-L;
            R--;
        }else{
            K = i-L;
            if(Z[K] < R-i+1){
                Z[i] = Z[K];
            }else{
                L = i;
                while(R < n && s[R] === s[R-L]){
                    R++;
                }
                Z[i] = R-L;
                R--;
            }
        }
    }
    Z[0] = 0;
    return Z
}


/*Using KMP
use of LPS (longest suffix prefix ending at i)
O(n+m), SC: O(m)
*/
var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    if(m === 0) return 0;
    let lps = Array(m).fill(0);
    computeLPS(needle,lps);
    let i=0; //for haystack
    let j=0; //for needle, pat
    let result = 0;
    while(i < n){
        if(needle[j] === haystack[i]){
            i++;
            j++;
        }
        if(j === m){
            return i-j; //found
        }else if(i < n && needle[j] !== haystack[i]){
            if(j !== 0){
                j = lps[j-1];
            }else{
                i++;
            }
        }
    }
   return -1; //not found
};
function computeLPS(pat,lps){
    let m = pat.length;
    let len = 0;
    lps[0] = 0;
    let i=1;
    while(i< m){
        if(pat[i] === pat[len]){
            len++;
            lps[i] = len;
            i++;
        }else{
            if(len !== 0){
                len = lps[len-1];
            }else{
                i++;
            }
        }
    }
}
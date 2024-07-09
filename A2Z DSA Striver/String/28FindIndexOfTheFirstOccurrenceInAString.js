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
var strStr = function(haystack, needle) {
  let m = haystack.length;
  let n = needle.length;
  //edge case, when needle length is bigger than haystack
  if(n > m) return -1;
  //modification in m loop, why need to go till m, we can go till
  //m-n, we only need to check for length of n.
  for(let i=0; i<=m-n; i++){
      for(let j=0; j<n; j++){
          if(haystack[i+j] !== needle[j]){
              break;
          }
          if(j === n-1){
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
/* 2825. Make String a Subsequene Using Cyclix Increments
04 Dec 2024, leetcode potd, String

Input: str1 = "abc", str2 = "ad"
Output: true
Explanation: Select index 2 in str1.
Increment str1[2] to become 'd'. 
Hence, str1 becomes "abd" and str2 is now a subsequence. Therefore, true is returned.
*/

/*In this use two pointer and check the both str1 and str2, check
for curr char, and next char and check for z and a.
TC: O(m+n), SC: O(1)
*/
var canMakeSubsequence = function(str1, str2) {
  let str1Len = str1.length;
  let str2Len = str2.length;
  let i=0, j=0;
  while(i < str1Len && j < str2Len){
      if((str1[i] === str2[j]) || (String.fromCharCode(str1.charCodeAt(i)+1) === str2[j]) || 
      (str1[i] === 'z' && str2[j] === 'a')){
          j++; //increase the pointer on str2
      }
      i++; //increase the pointer on str1
  }
  return j === str2Len;
};
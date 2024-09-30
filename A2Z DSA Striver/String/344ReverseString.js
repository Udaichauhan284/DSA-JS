/* 344. Reverse String
02 June 2024 - Leetcode POTD Topic: String, Two Pointers
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/
/* as s is array of ch,
so simply use of Reverse method of JS
*/
// var reverseString = function(s) {
//     return s.reverse();
// };

/* Method 2- use of Two Pointer for reverse the string
use of while loop and swap the char.
TC: O(n), SC: O(1)
*/
const reverseString = (s) => {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    //swap the char
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
};


//Use of Recurion
//apply the same logic of left and right pointer but use that in recursion
class Solution {
  reverseStr(s){
    this.reverseIt(s, 0, s.length-1);
    return s; 
  }
  reverseIt(s, left, right){
    if(left >= right){
      return;
    }
    //swap it
    [s[left], s[right]] = [s[right], s[left]];
    this.reverseIt(s, left+1, right-1);
  }
}

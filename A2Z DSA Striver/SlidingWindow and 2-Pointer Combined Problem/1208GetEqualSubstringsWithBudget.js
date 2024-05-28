/* 1208 Get Equal substrings within budget
28 May 2024 - Leetcode POTD, Topic: String, Sliding Window
You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
Input: s = "abcd", t = "bcdf", maxCost = 3
Output: 3
Explanation: "abc" of s can change to "bcd".
That costs 3, so the maximum length is 3.
*/
/* We need substring len, whose difference add is less than and 
equal to maxCost, so this means we use SLiding Window
TC: O(n), SSC: O(1).
*/
var equalSubstring = function(s, t, maxCost){
  let n = s.length; //same as t.length
  let maxLen = 0; //this we will return 
  let currCost = 0;
  let i=0, j=0;
  while(j < n){
    //calculate the currCost till j
    currCost += Math.abs(s.charCodeAt(j) - t.charCodeAt(j));

    if(currCost > maxCost){
      //need to remove the ith element, shrink the window
      currCost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
      i++;
    }

    //count the maxLen till j
    maxLen = Math.max(maxLen, (j-i+1));
    j++;
  }
  return maxLen;
}
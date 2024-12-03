/* 2109 Adding Spaces to A String
03 Dec 2024, Leetcode POTD, String, Two Pointers, 

Input: s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]
Output: "Leetcode Helps Me Learn"
Explanation: 
The indices 8, 13, and 15 correspond to the underlined characters in "LeetcodeHelpsMeLearn".
We then place spaces before those characters.
*/

/*In this we use the Two pointer, i ptr on s, and
j ptr on spaces, we traverse over s and check
when i ===j, we add the space in result str.
TC: O(n+m), SC: O(1)
*/
var addSpaces = function(s, spaces) {
  let n = s.length;
  let m = spaces.length;
  let result = "";
  let j = 0; //for traversing over the spaces
  for(let i=0; i<n; i++){
    //now check the i and j
    if(j<m && i === spaces[j]){
      result += " "; //when both i and j matches, add space
      j++; //move the j ptr to next space
    }
    //now add the s char to result
    result += s[i];
  }
  return result;
}
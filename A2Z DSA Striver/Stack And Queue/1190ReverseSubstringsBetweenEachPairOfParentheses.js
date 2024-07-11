/* 1190. Reverse Substrings Between Each Pair of Parentheses
11 July 2024, Leetcode POTD, String, Stack
You are given a string s that consists of lower case English letters and brackets.
Reverse the strings in each pair of matching parentheses, starting from the innermost one. Your result should not contain any brackets.

Example 1:
Input: s = "(abcd)"
Output: "dcba"

Example 2:
Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.

*/


/*In this we maintain the stack, when you see the open "("
store the len of result string in stack, this will keep track
of char len which we need to skip, to reverse the str in ().
TC: O(n^2), SC: O(n)
*/
var reverseParentheses = function(s) {
  let lastSkipLenStack = [];
  let result = "";
  for(let ch of s){
      if(ch === "("){
          lastSkipLenStack.push(result.length);
      }else if(ch === ")"){
          let skipLen = lastSkipLenStack.pop();
          let toReverse = result.slice(skipLen); // _ [toreverse]
          result = result.slice(0,skipLen) + toReverse.split("").reverse().join("");
      }else{
          result += ch;
      }
  }
  return result;
};


/*Method 2: in this we move i pointer to coresponding bracket
when i see (, it will move to its ) and change the direction of
move, start from LTR to RTL, agian when it see ), it will move
to its coresponding to ( and change the direction LTR
TC: O(n)+O(n) ~ O(2n) ~ O(n), SC: O(n)
*/
var reverseParentheses = function(s) {
  let n = s.length;
  let bracket = []; //space for matching the ()
  let door = Array(n).fill(0); //space for movement of pointer

  //first loop for filling the door
  for(let i=0; i<n; i++){
      if(s[i] === "("){
          bracket.push(i); //store the openBrack pointer
      }else if(s[i] === ")"){
          //now while moving we see close brack, take out this place
          let j = bracket.pop();
          //now place this coresponding () in door
          door[i] = j; //if we have "("" at 0 and ")"" at last, so last - first(13-0)
          door[j] = i; //first to last (0 to 13)
      }
  }

  //build the result
  let direction = 1; //for changing the direction intial Dire Left to Right
  let result = "";
  for(let i=0; i<n; i+=direction){
      if(s[i] === "(" || s[i] === ")"){
          //change the i pointer
          i = door[i];
          //change the direction
          direction = -direction; //-1 measn right to left;
      }else{
          result += s[i];
      }
  }
  return result;
};
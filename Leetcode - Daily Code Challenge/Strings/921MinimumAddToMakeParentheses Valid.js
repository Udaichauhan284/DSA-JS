/* 921 Minimum Add to Make Parenthese Valid
09 Oct 2024, Leetcode POTD, String, Stack

Example 1:

Input: s = "())"
Output: 1
Example 2:

Input: s = "((("
Output: 3
*/

/*09 Oct 2024, Method 1 - use of stack
TC: O(n), SC: O(n)
*/
var minAddToMakeValid = function(s) {
  let stack = [];
  let open = 0;
  for(let ch of s){
      if(ch === "("){
          stack.push(ch);
      }else if(stack.length > 0 && stack[stack.length-1] === "("){
          //means for closing ), we got the pair open one on top (, pop it out
          stack.pop();
      }else{
          //here we get close one, so for that take open counter and increase it
          open++;
      }
  }
  //at last we will have odd len parenthese, which means we need to add that much parenthese
  return open+stack.length;
};
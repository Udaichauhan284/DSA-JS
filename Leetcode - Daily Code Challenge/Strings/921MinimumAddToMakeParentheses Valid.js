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




 /*09 Oct 2024, LC POTD
 method 2- this also solve withour using stack, in prev
 method we just increasing the size of stack, on that we
 can take variable. TC O(n), SC: O(1)
 */
 var minAddToMakeValid = function(s) {
  let size = 0;
  let open = 0; //this is odd one
  for(let ch of s){
      if(ch === "("){
          size++;
      }else if(size > 0){
          //if there is size means there is open bracket
          //so if we see closing one, and size > 0, pop it out 
          //means decrease the size
          size--;
      }else{
          //if not open one and not size > 0, measn we get close one, for 
          //that we need to increase the size of open bracket, so that make
          //it even,
          open++;
      }
  }
  return size+open;
};
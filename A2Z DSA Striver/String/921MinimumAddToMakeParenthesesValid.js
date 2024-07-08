/* 921. Minimum Add to Make Parentheses Valid
Example 1:

Input: s = "())"
Output: 1
Example 2:

Input: s = "((("
Output: 3

*/

/*IN this we need to add parenthesis to make a valid pair.
Method 1: for this we will take stack, and psuh opening ( in it.
when we get ) we check length of stack and top of stack, if get
( on top. this will make a valid. and pop it from stack
other wise incrase the count of odd "(" or ")". and at last
return ans + stack.length
TC: O(n), SC: O(n)
*/
var minAddToMakeValid = function(s) {
  let ans = 0;
  let st = [];
  let len = s.length;
  for(let i=0; i<len; i++){
      if(s[i] === "("){
          st.push(s[i]);
      }else{
          //measn we get ")", check the top of stack
          if(st.length !== 0 && st[st.length-1] === "("){
              //valid pair
              st.pop();
          }else{
              ans++; //measn curr onw is odd ")","("
          }
      }
  }
  return ans+st.length;
};


/*Method 2. this is optimal, rather then maintain stack 
we take a variable open and close
TC: O(n), SC: O(1)
*/
var minAddToMakeValid = function(s) {
  let len = s.length;
  let open = 0, close = 0;
  for(let i=0; i<len; i++){
      if(s[i] === "("){
          open++;
      }else{
          //measn we see close one, now check if open 
          //is begger than 0 if yes, valid pair. -ve open
          if(open > 0){
              open--;
          }else{
              //if open is 0, so just increase the close
              close++;
          }
      }
  }
  return open+close;
};
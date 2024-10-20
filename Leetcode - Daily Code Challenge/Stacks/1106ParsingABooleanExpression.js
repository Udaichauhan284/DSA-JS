/*1106 Parsing A Boolean Expression
20 Oct 2024, LEETCODE POTD
Input: expression = "&(|(f))"
Output: false
Explanation: 
First, evaluate |(f) --> f. The expression is now "&(f)".
Then, evaluate &(f) --> f. The expression is now "f".
Finally, return false.

This is also solved by Recursion, which is in A2ZDSA DP on MCM
this is second approach use of Stack
*/

/*Method 2, this also can be solve using the stack, push ch in
stack, and when we see the ), traverse over stack and pop out 
char till (. and push in values arr, now pop it out ( and next
one which is opeartor and send value and op into function and 
push there result into stack. TC: O(n), SC: O(n)
*/

const parseBoolExpr = (expression) => {
  let st = [];
  for(let i=0; i<expression.length; i++){
    if(expression[i] === 't' || expression[i] === 'f'){
      st.push(expression[i]);
    }else if(expression[i] === ','){
      //skip it
      continue;
    }else if(expression[i] === ')'){
      //means now we traverse over stack and pop value
      //till opening bracker
      let values = [];
      while(st[st.length - 1] !== '('){
        //till st top is not equal to open (, push val
        values.push(st.pop());
      }
      st.pop(); //remove the open ( also
      let op = st.pop(); //after removing the (, we will gte the operator
      let resValue = solve(values, op);
      st.push(resValue);
    }else{
      st.push(expression[i]);
    }
  }
  //end case
  if(st[st.length - 1] === 't'){
    return true;
  }
  return false;
}
//helper function
const solve = (values, op) => {
  if(op === '!'){
    return values[0] === 'f' ? 't' : 'f'; //NOT operation
  }
  if(op === '&'){
    for(let ch of values){
      if(ch === 'f'){
        return 'f';
      }
    }
    return 't';
  }
  if(op === '|'){
    for(let ch of values){
      if(ch === 't'){
        return 't';
      }
    }
    return 'f';
  }
  return 't'; //just returning, this is unreachable
}
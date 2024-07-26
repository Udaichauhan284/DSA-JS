//Approach 1- use of stack TC O(n), SC : O(n), when you see the open bracket push in stack, and close bracket remove from the stack. count the st length, is our answer.
// var maxDepth = function(s) {
//     let st = [];
//     let result = 0;
//     for(let i=0; i<s.length; i++){
//       if(s[i] === '('){
//         st.push(s[i]);
//         result = result>st.length ? result : st.length;
//       }else if(s[i] === ')'){
//         st.pop();
//       }
//     }
//     return result;
// };

//Approach 2- use of variable instead of stack - openBracket, when you see the openBracket, increase it, when you see the close one decrease the, at last compare the result and openBracket
const maxDepth = (s) => {
  let openBracket = 0;
  let result = 0;
  for(let i=0; i<s.length; i++){
    if(s[i] === "("){
      openBracket++;
    }else if(s[i] === ")"){
      openBracket--;
    }
    result = result>openBracket ? result : openBracket;
  }
  
  return result;
}
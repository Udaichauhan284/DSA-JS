/* 20. Valid Parenthese.
s = "()"
o/p : true
*/
//Approach 1. simple method
const isValid = (s) => {
  let st = [];
  for(let ch of s){
    if(st.length === 0 || ch === '(' || ch === '{' || ch === '[' ){
      st.push(ch);
      continue;
    }
    if(ch === ')'){
      if(st[st.length-1] === '('){
        st.pop();
      }else {
        return false;
      }
    }else if(ch === ']'){
      if(st[st.length-1] === '['){
        st.pop();
      }else {
        return false;
      }
    }else if(ch === '}'){
      if(st[st.length-1] === '{'){
        st.pop();
      }else {
        return false;
      }
    }
  }
  return st.length === 0;
}
let s = "()[]{}";
// console.log(isValid(s));

//Approach 2. put close bracket corresponding to open brakect in stack.
const isValid1 = (s) => {
  let st = [];
  for(let ch of s){
    if(ch === '('){
      st.push(')');
    }else if(ch === '['){
      st.push(']');
    }else if(ch === '{'){
      st.push('}');
    }else if(st.length === 0 || st[st.length-1] !== ch){
      return false;
    }else {
      st.pop();
    }
  }
  return st.length === 0;
}
console.log(isValid1(s));
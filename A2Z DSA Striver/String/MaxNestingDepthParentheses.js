/* 1614. Maximum Nesting Depth of the Parentheses
Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.

*/
//TC O(n) SC O(1)
const maxDepth = (s) => {
  let arr = [];
  let depth =0;
  for(let i=0; i<s.length; i++){
    if(s[i]==='('){
      arr.push(s[i]);
      depth = depth > arr.length ? depth : arr.length;
    }else if(s[i] === ')'){
      arr.pop(s[i]);
    }
  }
  return depth;
}
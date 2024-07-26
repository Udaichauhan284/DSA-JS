/* 1544. Make the string great
05April2024
s = "leEeetcode"
o/p : "leetcode"

use of stack, and check the top ch of stack if is it equal to curr ch or not
TC : O(n), SC : O(n) use of result stack
*/
const makeStringGreat = (s) => {
  let result = [];
  if(s.length === 0){
    return result.join("");
  }
  for(let ch of s){
    if(result.length > 0 && (result[result.length-1].charCodeAt() - 32 === ch.charCodeAt() || result[result.length-1].charCodeAt() + 32 === ch.charCodeAt())){
      result.pop();
    }else {
      result.push(ch);
    }
  }
  return result.join("");
}
console.log(makeStringGreat("leEeetcode"));
/* 1021. Remove the outermost paranthese
i/p: "(()())(())", o/p : "()()()"
*/
//O(N)
function removeOuterBracket(s){
  let openCount = 0;
  let output = "";
  let len = s.length;
  for(let i=0; i<len; i++){
    if(s[i] === "("){
      if(openCount){
        output += s[i];
      }
      openCount++;
    }else if(s[i] === ")"){
      openCount--;
      if(openCount){
        output += s[i];
      }
    }
  }
  return output;
}
let str = "(()())(())";
console.log(removeOuterBracket(str));
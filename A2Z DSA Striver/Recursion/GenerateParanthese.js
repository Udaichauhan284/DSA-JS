/* 22. Generate Parentheses.
give n pairs of parentheses, generate all combination of weel formed paratheses.
*/
const generateParanthese = (n) => {
  let result = [];
  let temp = [];
  
  solve(n,0,0,result,temp);
  return result;
}
function solve(n,left,right,result,temp){
  if(left+right === 2*n){
    result.push(temp.join("")); //changing temp arr to str. 
    return;
  }
  if(left < n){
    temp.push("(");
    solve(n,left+1,right,result,temp);
    temp.pop();
  }
  if(right < left){
    temp.push(")");
    solve(n,left,right+1,result,temp);
    temp.pop();
  }
}
let n = 3;
console.log(generateParanthese(n));
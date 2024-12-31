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


/*31 Dec 2024, use of Backtracking, as we have option
to push the open one and close one, in method1 we 
take the curr string and in that we add and pop for 
both bracket, and then we check isValid or not.
TC: O(2^2n * 2n) n=3, but with both open and close 2n
and 2n is for checking the valid curr
SC: O(2n)
*/
var generateParanthese1 = (n) => {
  let result = [];
  let curr = [];
  solve(curr, n, result);
  return result;
}
function solve(curr, n, result){
  //base case
  if(curr.length === 2*n){
    if(isValid(curr)){
      result.push(curr.join(""));
    }
    return;
  }

  //now push the open and do backtracking
  curr.push("("); //Do
  solve(curr,n,result); //call for other iteration
  curr.pop(); //Undo

  //now for close 
  curr.push(")");
  solve(curr,n,result);
  curr.pop();
}
function isValid(curr){
  let countOpen = 0;
  for(let ch of curr){
    if(ch === "("){
      countOpen++;
    }else{
      countOpen--;
      if(countOpen < 0){
        return false;
      }
    }
  }
  return countOpen === 0;
}
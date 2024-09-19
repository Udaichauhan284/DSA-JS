/* 241 Different Ways to Add Parentheses
19 Sept 2024, Leetcode POTD, String, Recursion, DP
Input: expression = "2-1-1"
Output: [0,2]
Explanation:
((2-1)-1) = 0 
(2-(1-1)) = 2
*/

/*IN this we can use Recursion while going on expression, at every
operators we have two choice to consider it and divide exp from 
there in left and right for futher recursion, or move to next 
operators. TC: O(n * 2^n) SC: O(n) for recursion stack space
*/
var diffWaysToCompute = function(expression) {
  let result = [];
  for(let i=0; i<expression.length; i++){
      if(expression[i] === "-" || expression[i] === "*" || expression[i] === "+"){
          let left = diffWaysToCompute(expression.substr(0,i));
          let right = diffWaysToCompute(expression.substr(i+1));

          //now loop on both arr left and right, for ans
          for(let x of left){
              for(let y of right){
                  if(expression[i] === "+"){
                      result.push(x+y);
                  }else if(expression[i] === "-"){
                      result.push(x-y);
                  }else{
                      result.push(x*y);
                  }
              }
          }
      }
  }
  if(result.length === 0){
      // measn result is empty we need ot return num itself
      result.push(parseInt(expression));
  }
  return result;
};
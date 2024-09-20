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

/*Method 2 this can also be solved by using DP
in solve function pass start and end and also DP array
*/
var diffWaysToCompute = function(expression) {
  let len = expression.length;
  let dp = Array.from({length : len}, () => Array(len).fill(-1));
  return solve(expression, 0, expression.length-1, dp);
};
function solve(exp,start,end,dp){
  let result = [];
  if(dp[start][end] !== -1) return dp[start][end];
  //first we need to check if the exp have operators
  for(let i=start; i<=end; i++){
      if(exp[i] === "+" || exp[i] === "-" || exp[i] === "*"){
          let left = solve(exp, start, i-1, dp);
          let right = solve(exp, i+1, end, dp);

          for(let x of left){
              for(let y of right){
                  if(exp[i] === "+"){
                      result.push(x+y);
                  }else if(exp[i] === "-"){
                      result.push(x-y);
                  }else {
                      result.push(x*y);
                  }
              }
          }
      }
  }
  if(result.length === 0){
      result.push(parseInt(exp.substr(start)));
  }
  dp[start][end] = result;
  return dp[start][end];
}
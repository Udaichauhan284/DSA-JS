/* 1249. Minimum Remove to Make Valid Parentheses
06 April 2024
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

*/
//Approach 2. Use of open and close variable, step 1. we move from left ro right and take open variable to maintain the count of open bracket, this traversal help in removing the close one. Step 2. move to right to left, and take a close varibale to maintain the close bracket count, so that we can reove the open bracket. TC : O(n)+O(n) => O(2n) ~ O(n), SC : O(n) for result
var minRemoveToMakeValid = function(s) {
  let len = s.length;
  let tempResult = [];
  //left to right- for eliminating the close bracket
  let open = 0;
  for(let i=0; i<len; i++){
    if(s[i] >= 'a' && s[i] <= 'z'){
      tempResult.push(s[i]);
    }else if(s[i] === "("){
      open++;
      tempResult.push(s[i]);
    }else if(open > 0){
      //means we get the close ), so only add close one, when you have open more than 0.
      open--;
      tempResult.push(s[i]);
    }
  }

  //right to left - for elimainating the open bracket, extra
  let close = 0;
  let result = [];
  for(let i=tempResult.length-1; i>=0; i--){
    if(tempResult[i] >= 'a' && tempResult[i] <= 'z'){
      result.push(tempResult[i]);
    }else if(tempResult[i] === ")"){
      close++;
      result.push(tempResult[i]);
    }else if(close > 0){
      close--;
      result.push(tempResult[i]);
    }
  }
  //or i can use the unshift to add ch in the start of arr, so no need of reverse the result arr. "unshift will work, but it will cost more memory"
  return result.reverse().join("");

};
/* 678. valid Parenthesis String
07 April 2024
s = "()" true
*/
//this can also solve by, DP, two stack and also simple loop
//Simple loop method - O(n), O(1)
var checkValidString = function(s) {
  let low = 0, high = 0;
  for(let ch of s){
    if(ch === '('){
      //increment both
      low++;
      high++;
    }else if(ch === ')'){
      //decrement both
      low = Math.max(0, low-1);
      high--;
    }else if(ch === "*"){
      //decrement low and incremenent high
      low = Math.max(0,low-1);
      high++;
    }
    if(high < 0){
      return false;
    }
  }
  return low === 0;
};
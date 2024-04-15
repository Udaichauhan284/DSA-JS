 //Approach 1. In One Loop take a variable of High and Low: O(n), high < 0 return false, if low === 0 return true else false, for * first decrement i and then increase the high. O(n), SC: O(1)
// var checkValidString = function(s) {
//     let low = 0;
//     let high = 0;
//     for(let ch of s){
//       if(ch === "("){
//         //increment both
//         low++;
//         high++;
//       }else if(ch === ')'){
//         //decrement both
//         low = Math.max(0,low-1);
//         high--;
//       }else if(ch === "*"){
//         //decrement of low and increment of high
//         low = Math.max(0,low-1);
//         high++;
//       }
//       if(high < 0){
//         //if high is negative
//         return false;
//       }
//     }
//     return low === 0; //if low === 0 true, else false;
// };

//Approach 2. use of open and close variable, traverse the loop from left to right for open and increase the open, AND right to left for close increase it close, use two loop for clean code O(2n) ~ O(n), SC : O(1)
const checkValidString = (s) => {
  let open = 0;
  let close = 0;
  let len = s.length;
  for(let i=0; i<len; i++){
    if(s[i] === '(' || s[i] === '*'){
      //here * considering as open
      open++;
    }else{
      open--;
    }

    if(open < 0){ //if open is negative
      return false;
    }
  }

  //loop for close, from right to left, and consider * as close )
  for(let i=len-1; i>=0; i--){
    if(s[i] === ')' || s[i] === "*"){
      close++;
    }else{
      close--;
    }

    if(close < 0){
      return false;
    }
  }
  return true;
}
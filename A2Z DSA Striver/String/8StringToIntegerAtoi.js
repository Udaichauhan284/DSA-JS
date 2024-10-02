/* 8. String to Integer (atoi)
*/
// TC O(n) SC O(1)
var myAtoi = function(s) {
  let index = 0;
  let isNeg = false;
  let ans = 0;
  while(index < s.length && s[index] === " "){
    index++;
  }
  if(s[index] == '-' || s[index] == '+'){
    isNeg = s[index] == '-';
    index++;
  }
  while(index < s.length){
    let num = s.charCodeAt(index) - 48; //48 is ASCII code of 0
    if(num < 0 || num > 9){
      break;
    }
    ans *= 10;
    ans += num;
    index++;
  }

  if(isNeg){
    ans = -ans;
  }

  let MIN_INT = Math.pow(-2,31);
  let MAX_INT = Math.pow(2,31)-1;

  if(ans < MIN_INT){
    return MIN_INT;
  }
  if(ans > MAX_INT){
    return MAX_INT;
  }
  return ans;
}; 

//2 Oct 2024, Trying this question again. 
const myAtoi = (s) => {
  let len = s.length;
  let ind = 0;
  let ans = 0;
  let isNeg = false;
  while(ind < len && s[ind] === " "){
    ind++;
  }
  if(s[ind] === "-" || s[ind] === "+"){
    isNeg = (s[ind] === "-");
    ind++;
  }
  while(ind < len){
    let num = s.charCodeAt(ind) - '0'.charCodeAt(0);
    if(num >= 0 && num <= 9){
      //num is have to in range of 0to9
      ans = ans * 10 + num;
    }else{
      //if not then break;
      break;
    }
    ind++;
  }
  if(isNeg){
    ans *= -1;
  }

  let MIN_VAL = Math.pow(-2, 31);
  let MAX_VAL = Math.pow(2, 31)-1;
  if(ans < MIN_VAL){
    return MIN_VAL;
  }
  if(ans > MAX_VAL){
    return MAX_VAL;
  }
  return ans;
}
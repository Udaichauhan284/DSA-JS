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
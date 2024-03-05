/* 13. Roman to Integer
*/
//TC O(n) SC O(n)
var romanToInt = function(s) {
  let len = s.length;
  let roman = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }
  let res = 0;
  for(let i=0; i<len; i++){
    if(i < len && roman[s[i]] < roman[s[i+1]]){
      res -= roman[s[i]];
    }else{
      res += roman[s[i]];
    }
  }
  return res;
};
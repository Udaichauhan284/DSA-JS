/* dividend = 10, divisor = 3
output = 3;
*/
var divide = function(dividend, divisor) {
  if(dividend === -(2**31) && divisor === -1) return (2**31)-1;

  if(divisor === -1) return 0-dividend;
  if(divisor === 1) return dividend;

  if(dividend === divisor) return 1;

  let isNeg = false;
  let count = 0;
  if((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0)) {
    isNeg = true;
  }

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while(dividend >= divisor){
    let x = 1;
    let base = divisor;
    while(base <= (dividend >> 1)){
      base = base << 1;
      x = x<<1;
    }
    count += x;
    dividend -= base;
  }
  if(isNeg) return -count;
  return count;
};
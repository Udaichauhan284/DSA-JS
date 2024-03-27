/* 231. Power Of Two.
check if num is power of 2 or not
*/

 //for having power of 2, n should have atleast 1 set bit, so for checking it do AND of n with n-1. 
 //n=16 => 10000, n-1 = 15 => 1111 ==> n&n-1 === 0 yes power of two
 const isPowerOfTwo = function(n) {
  //edge case
  if(n > Number.MAX_VALUE || n < Number.MIN_VALUE) return false;

  return n!==0 && ((n & (n-1)) === 0);
};
console.log(isPowerOfTwo(1));
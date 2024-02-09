/* Power of Two
Given a postitive integer 'n', determine if the number is a power of 2 or not.
An integer is a power of two is there exists an integer 'x' such that 'n' === 2^x;
isPowerOfTwo(1) = true (2^0) = 1;
isPowerOfTwo(2) = true (2^1) = 2;
isPowwerOfTwo(5) = false

PseudoCode
n=8
8/2 remainder 0
4/2 remaainder 0
2/2 = 1 remainder 0
If remainder is not 0 in any step, 'n' is not a power of 2.
if remainder is 0 and 'n' coes down to 1. n is power of 2.
*/
//Big o - O(logn)
function isPowerOfTwo(n) {
  if(n<1) return false;

  while(n > 1){
    if(n%2 !== 0) return false
    n = n/2;
  }
  return true;
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

//Constant Time complexity using bit wise operator - O(1)- do bitwise AND of n and n-1 is is eqaul to 0 then is power of 2 otherwise not
function isPowerOfTwoBitwise(n){
  if(n<1) return false;

  return (n & (n-1)) === 0;
}
console.log(isPowerOfTwoBitwise(1)); //true
console.log(isPowerOfTwoBitwise(3)); //fasle
console.log(isPowerOfTwoBitwise(4)); //true
console.log(isPowerOfTwoBitwise(7)); //false
/* 50. Pow(x,n)
x = 2, n = 10
o/p 1024
*/
//Bit Wise- iterative method. use AND for multipleing x for only set bits, then, divide n - right shift
const myPow = (x,n) => {
  if(n===0){
    return 1;
  }
  if(x===0){
    return 0;
  }
  if(n<0){
    x = 1/x;
    n = -n;
  }

  let result = 1;
  //main code
  while(n != 0){
    if(n & 1){ // find the set bit
      result = result * x;
    }
    x = x*x;
    n >>>= 1; // dividing the n , doing right shift
    //We use unsigned right shift (n >>>= 1) to shift n to the right by one bit position. This ensures that the sign bit is shifted as well and that the result is always non-negative.
  }
  return result;
}

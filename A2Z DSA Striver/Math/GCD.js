/*
Input: n1 = 4, n2 = 6

Output: 2

Explanation: Divisors of n1 = 1, 2, 4, Divisors of n2 = 1, 2, 3, 6

Greatest Common divisor = 2.
*/
const gcd = (n1, n2) => {
  //in this we need to take the min of both num, then in loop we need to run that till that min one, and find both n1 and n2 % i give 0
  let min = Math.min(n1, n2);
  let gcd = 0;
  for(let i=1; i<=min; i++){
    if(n1 % i === 0 && n2 % i === 0){
      gcd = i;
    }
  }
  return gcd;
}
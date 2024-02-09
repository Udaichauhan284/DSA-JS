/* Give a natural 'n' determine if the number is prime or not.
A prime number is a natural number greater than 1 that is not a prodcut of two smaller natural numbers.
isPrime(5) - true(1*5 and 5*1)
isPrime(4) - false(1*4, 4*1 and 2*2)
*/
//Time Comp - O(n)

//Optimized Primality Test
/* Integers larger than the sqaure root do not not need to be checked because, whenever 'n=a*b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'
n= 24, a=4, b=6
the square root of 24 is 4.89
a is less than sqr root of 24. => 4 < 4.89

 so this means we can change the for loop
 for(let i=2; i<=Math.sqrt(n); i++){}
 Time Complexity - O(logN)
*/
function PrimeNumber(n){
  if(n < 2){
    return false;
  }
  for(let i=2; i<n; i++){ // i<n, because n is always divisble by itself
    if(n%i === 0){
      return false;
    }
    return true;
  }
}
console.log(PrimeNumber(5));
console.log(PrimeNumber(4));
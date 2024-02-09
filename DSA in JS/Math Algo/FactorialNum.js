/* Factorial Of a Number
Problem: Given a integer 'n' find the factorial of that integer.
Fact of 0 - 1
Fact of 4 - 4*3*2*1 = 24
*/
// Time Complexity - O(n)
function Factorial(n){
  if(n<=1){
    return 1;
  }
  let result = 1;
  for(let i=2; i<=n; i++){
    result = result * i;
  }
  return result;
}
console.log(Factorial(0));
console.log(Factorial(1));
console.log(Factorial(2));
console.log(Factorial(4));

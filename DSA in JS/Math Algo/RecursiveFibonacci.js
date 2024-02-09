// Fibonacci sequence using Recursion

//here we are dividing into smaller part
// BIG O - O(2^n)
function recursiveFibonacci(n){
  //base condition 0 - 0, 1 - 1, 2- 0,1
  if(n <=1 ){
    return n
  }else {
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
  }
}
console.log(recursiveFibonacci(2));
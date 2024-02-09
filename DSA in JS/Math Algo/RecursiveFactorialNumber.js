// Recursive Factorial Number
// fact(4) = 4*3*2*1;
// n! = n * (n-1)!

//T.C - O(n)
function recursiveFactorial(n){
  //base condition
  if(n <= 1){
    return 1
  }else{
    return n * recursiveFactorial(n-1);
  }
}
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(1));
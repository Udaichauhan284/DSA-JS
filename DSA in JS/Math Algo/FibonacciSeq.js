// Fibonacci Sequence
// Problem - Given a number 'n', find the first 'n' elements of the Fibonacci Sequence
// In Mathematics, the fibonacci sequence in which each number is the sum of the two preceding ones. 
// The firs two numbers in the sequence are 0 and 1.
// fibonacci(2) - 0,1
// fibonacci(3) - 0,1.1
// fibonacci(4) - 0,1,1,2

//Time Complexity - O(n) - just one loop
function fibonacci(n) {
  const fib = [0,1]
  for(let i=2; i<n; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib;
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
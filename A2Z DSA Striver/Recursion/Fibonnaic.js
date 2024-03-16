// Fibonnaic Series : 0 1 1 2 3 5 8 13 .....
const fib = (n) => {
  if(n <= 1){
    return 1;
  }
  return fib(n-1) + fib(n-2);
}
console.log("Fibonnaic Series " + fib(8));
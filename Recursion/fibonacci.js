
function fib(n) {
  if(n<=1){
      return n;
  }
  let fact = [];
  fact[0] = 0;
  fact[1] = 1;
  for(let i=2; i<=n; i++){
      fact[i] = fact[i-1] + fact[i-2];
  }
  return fact;
};
console.log(fib(5));

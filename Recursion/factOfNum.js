//brute force
// function factOfNum(n){
//   let fact = 1;
//   if(n==0 || n==1){
//     return 1;
//   }
//   for(let i = 1; i<=n;i++){
//     fact *= i;
//   }
//   console.log(fact);
// }
// factOfNum(5);

//functional way
function factorial(n){
  if(n==0){
    return 1;
  }
  return n * factorial(n-1);
}
console.log(factorial(6));
// Factorial 5! = 5*4*3*2*1 = 120
const fact = (n) => {
  if(n===1){
    return 1;
  }
  return n * fact(n-1);
}
console.log("Factorial Number " + fact(5));
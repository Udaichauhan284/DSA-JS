// Power of 2 of N
const pow = (x,n) => {
  if(n===0){
    return 1;
  }
  if(x===0){
    return 0;
  }
  if( n < 0){
    x = 1/x;
    n = -n;
  }
  return x * pow(x,n-1);
}
console.log("Power Function " + pow(2,5));
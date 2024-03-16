// Sum of Square of N natural number 1^2 + 2^2 + 3^2 
const sumOfS = (n) => {
  if(n===1){
    return 1;
  }
  return (n*n) + sumOfS(n-1);
}
console.log("Sum of Square of N Natural Number " + sumOfS(5));
// Sum Of N Natural Number: n = 5 => 1+2+3+4+5
const sumOfN = (n) => {
  if(n===1){
    return 1;
  }
  return n + sumOfN(n-1);
}
console.log("Sum Of N Natural Number " + sumOfN(6));
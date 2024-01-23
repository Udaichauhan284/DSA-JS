// function sumofFirstN(i,sum){
//    let sum =0;
//    for(let i=1;i<=n;i++){
//      sum += i;
//    }
//    console.log(sum);

//   //parameterise way
//   if(i<1){
//     return sum;
//   }
//   return sumofFirstN(i-1,sum+i);
// }
// console.log(sumofFirstN(5,0));

//Functional Way
function sumofFirstN(n){
  if(n==0){
    return 0;
  }
  return n + sumofFirstN(n-1);
}
console.log(sumofFirstN(3));
/* Find the XOR from L to R, number.
l=4, R=7
4^5^6^7.

for this first learn xor from 1 to n.
N=1  0^1 = 1.
N=2  1^2 = 3.
N=3  1^2^2 = 0.
N=4  1^2^3^4 = 4.
this pattern will repaet 
*/
//Brute Method  - for loop - O(n), O(1)
const bruteMethod = (n) => {
  let ans = 0;
  for(let i=1; i<=n; i++){
    ans = ans ^ i
  }
  return ans;
}
// console.log(bruteMethod(5));

//Optimal Method, after every 4, it iw repaeting it itself, like n=1 ans 1, and n=4, asn is 4, n=5 ans is 1, for n=8 ans 8
// const xorrFrom1ToN = (n) => {
//   if(n%4 === 1){
//     return 1;
//   }else if(n%4 === 2){
//     return n+1;
//   }else if(n%4 === 3){
//     return 0;
//   }else {
//     return n;
//   }
// }
// console.log(xorrFrom1ToN(5));

//Now follow up question find the XORR from L to R, TC O(R-L+1), SC O(1)
const func1 = (n) => {
  if(n%4 === 1){
    return 1;
  }else if(n%4 === 2){
    return n+1;
  }else if(n%4 === 3){
    return 0;
  }else {
    return n;
  }
}
const xorRFromLtoR = (l,r) => {
  return func1(l-1) ^ func1(r);
}
console.log(xorRFromLtoR(4,7)); // 0
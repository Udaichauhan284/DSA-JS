/* Find the nth root of m
n =3 m=27 , 3squtrootOF(27) => 3*3*3 = 27 ans = 3;
*/
//Brute, O(logN + m) - logN for finding the exponent of that num func exp(base,exp)
const expo = (base, exp) =>{
  let b = base;
  let ans = 1;
  while(exp > 0){
    if(exp % 2){
      exp--;
      ans = ans * b;
    }else{
      exp /= 2;
      b *= b;
    }
  }
  return ans;
}
const bruteFindNthRootOfM = (n, m) => {
  for(let i=1; i<=m; i++){
    let val = expo(i,n);
    if(val === m){
      return i;
    }
  }
  return -1;
}

//Optimal Approach O(logN)
const expo1 = (mid,n,m) => {
  let ans = 1;
  for(let i=1; i<=n; i++){
    ans = ans * mid;
    if(ans > m) return 2; //means search on left part
  }
  if(ans === m) return 1; //mid is our ans
  return 0; //search in right half
}
const optimalNthRootOfM = (n,m) => {
  let low=1, high=m;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    let returnedValue = expo1(mid,n,m);
    if(returnedValue === 1){
      return mid;
    }else if(returnedValue === 0){
      low = mid + 1; //search in right half
    }else {
      high = mid-1; //search in left half
    }
  }
  return -1;
}
console.log(optimalNthRootOfM(3,27));
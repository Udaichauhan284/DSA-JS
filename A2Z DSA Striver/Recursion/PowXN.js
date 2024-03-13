/* 50. Pow(x,n)
*/
//Iteration O(n), O(1) -- this will give Time Limit Exceed
const myPow = (x,n) => {
  let result = 1;
  if(n === 0){
    return 1;
  }
  if(n < 0){
    x = 1/x;
    n = -n;
  }
  while(n > 0){
    result *= x;
    n--;
  }
  return result;
}

//Recursion Way O(n), O(1), but this will give STtack fill Error
const myPow1 = (x,n) => {
  if(n===0){
    return 1;
  }
  if(n < 0){
    x = 1/x;
    n = -n;
  }
  let xNMinus1 = myPow1(x,n-1);
  let xN = x * xNMinus1;

  return xN;
}

//Recursion O(logN), O(1), this will use like half the pow in every recursive call.
const myPow2 = (x,n) => {
  if(n===0){
    return 1;
  }
  if(x === 0){
    return 0;
  }
  if(n < 0){
    x = 1/x;
    n = -n;
  }
  let halfPower = 1;
  if(n%2===0){
    halfPower = myPow2(x, Math.floor(n/3));
    return halfPower * halfPower;
  }
  else {
    return x * myPow2(x,n-1);
  }
}
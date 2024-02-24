/* FInd the square root of number
*/
//Brute 
const bruteSquareNum = (num) => {
  let ans = 1;
  for(let i=1; i<=num; i++){
    if(i*i <= num){
      ans = i;
    }else {
      break;
    }
  }
  return ans;
}

//Optimal use Binary Search O(logN)
const optimalSquareNum = (num) => {
  let low = 1, high = num;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if((mid*mid) <= num){
      low = mid+1
    }else {
      high = mid-1;
    }
  }
  return high;
}
console.log(optimalSquareNum(7));
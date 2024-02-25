/* 1283. FInd the smallest divisor given a threshold
arr [1,2,5,9] threshold = 6
suppose divisor is 5 - 1/5=1, 2/5=1, 5/5=1, 9/5=2 [1+1+1+2] = 5 < 5 yes ans is 5.
*/
//Brute Force
//find the max range and start dividing from 1 to max
//O(max(arr)*N);
const bruteApp = (nums,limit) => {
  let len = nums.length;
  let max = Math.max(...nums);
  for(let d=1; d<=max; d++){
    let sum=0;
    for(let i=0; i<len; i++){
      sum += Math.ceil(nums[i]/d);
    }
    if(sum <= limit){
      return d;
    }
  }
  return -1;
}

//optimal app - use BS 
//find the sum of divisor
const sumByD = (arr,div) => {
  let n = arr.length;
  let sum=0;
  for(let i=0; i<n; i++){
    sum += Math.ceil(arr[i]/div);
  }
  return sum;
}
const optimalApp = (nums,limit) => {
  let len = nums.length;
  if(len > limit) return -1;
  let low =1;
  let high = Math.max(...nums);
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(sumByD(nums,mid) <= limit){
      high = mid-1;
    }else{
      low = mid+1;
    }
  }
  return low;
}
let nums = [1,2,5,9];
let limit = 6;
console.log(optimalApp(nums,limit));
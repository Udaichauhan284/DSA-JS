/* 162 Find the peak element's index in arr
[1,2,3,1] nums[i-1] < nums[i] > nums[i+1]
ans - index of 3 - 2, and also nums[-1] = nums[n+1] = -infinity
*/
//Brute force - Linear Search
function bruteFindPeak(nums){
  let len = nums.length;
  for(let i=0; i<len; i++){
    if((i===0 || nums[i-1] < nums[i]) && (i===len-1 || nums[i] > nums[i+1])){
      return i;
    }
  }
  return -1;
}

//Optimal approach - BS O(logN)
const optimalFindPeak = (nums) => {
  let len = nums.length;
  if(len<=1) return 0;
  if(nums[0] > nums[1]) return 0;
  if(nums[len-1]>nums[len-2]) return len-1;
  let lwo =1, high = len-2;
  while(lwo<=high){
    let mid = Math.floor((low+high)/2);
    if(nums[mid-1] < nums[mid] && nums[mid] > nums[mid+1]){
      return mid;
    }else if(nums[mid] > nums[mid-1]){
      low=mid+1; //we are on left half, now eliminates the left half. move rto right half
    }else {
      high = mid - 1;
    }
  }
  return -1;
}
let arr = [1,2,3,1];
console.log(bruteFindPeak(arr));
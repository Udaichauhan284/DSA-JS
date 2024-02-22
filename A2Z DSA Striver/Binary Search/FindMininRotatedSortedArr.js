/* 153. Find Minimum in Rotated Sorted Array
*/

var findMin = function(nums) {
  let low = 0;
  let high = nums.length-1;
  let ans = Number.MAX_SAFE_INTEGER;
  while(low <=high){
    let mid = Math.floor((low+high)/2);

    //search space is already sorted, so arr[low] always smaller then arr[high]
    if(nums[low]<=nums[high]){
      ans = Math.min(ans, nums[low]);
      break;
    }

    //left half is sorted
    if(nums[low] <= nums[mid]){
      ans = Math.min(ans,nums[low]);
      low = mid+1; //eleminates left half
    }else {
      ans = Math.min(ans,nums[mid]);
      high = mid-1; //eleminates right half
    }
  }
  return ans;
};
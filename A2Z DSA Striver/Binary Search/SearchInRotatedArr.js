/* 33. Search in rotated array, unique element, arr is rotated, target is givem
use - left part is sorted /or right part is sorted method
*/
//Binary Search - O(logn)
function searchInRotatedArr(nums,target){
  let len = nums.length;
  let low=0, high=len-1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(nums[mid] === target){
      return mid;
    }

    //left part is sorted checking
    if(nums[low] <= nums[mid]){
      if(nums[low] <= target && target <= nums[mid]){
        high = mid - 1; //element exists
      }else {
        low = mid + 1; //element not exists
      }
    }else { //right part is sorted or not
      if(nums[mid] <= target && target <= nums[high]){
        low = mid+1;
      }else {
        high = mid-1;
      }
    }
  }
  return -1;
}
let nums = [7,8,9,1,2,3,4,5,6];
console.log(searchInRotatedArr(nums,10));
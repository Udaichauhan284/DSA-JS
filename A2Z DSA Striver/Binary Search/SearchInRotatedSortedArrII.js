/* 81. Search in roated sorted array II
arr fill with duplicate
use same left and right part sorted techinuq
just check for arr[low] === arr[mid] === arr[high] if yes shrink the arr low++, high-- and continue

Brute app. Linear Search O(n)
Optimal app. BIinary Search - best and average O(logN) and worst case - suppose arr is filled with all duplicate so, we shirnk till high pass low. O(n/2)
*/
function searchInRotatedArrII(nums,target){
  let low=0, high=nums.length-1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);

    if(nums[mid] === target) return true;

    //check if array is filled with duplicate
    if(nums[low] === nums[mid] && nums[mid] === nums[high]){
      low++;
      high--;
      continue;
    }

    //left sorted part
    if(nums[low] <= nums[mid]){
      if(nums[low] <= target && target <= nums[mid]){
        high = mid-1;
      }else {
        low = mid+1;
      }
    }else{ //right 
      if(nums[mid] <= target && target <= nums[high]){
        low = mid+1;
      }else {
        high = mid-1;
      }
    }
  }
  return false;
}
let nums = [2,5,6,0,0,1,2];
console.log(searchInRotatedArrII(nums,3)); //false
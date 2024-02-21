/* Same as Lower bound, need to find smallest index but this time 
arr[ind] > x, only greater than x, not equal to x
*/
// O(logN)
function upperBound(nums, target){
  let len = nums.length;
  let low = 0, high = len-1;
  let ans = len; //assume the ans - index of len of arr
  while(low <= high){
    let mid = Math.floor((low+high)/2);
    if(nums[mid] > target){
      ans = mid;
      high = mid - 1; //look for smaller index on the left
    }else {
      low = mid + 1; //search on the right half
    }
  }
  return ans;
}
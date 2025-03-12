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


/*Method 2, in this we can use the lower bound for finding
the negative number and upper bound for finding the positive
number. 
TC: O(logn), SC: O(1)
*/
var maximumCount = function(nums) {
  let len = nums.length;
  let pos = len - upperBound(nums); //this will have the   
  //index, where num is just bigger then 0, so minus from len

  let neg = lowerBound(nums);

  return Math.max(pos, neg); 
};
//upper bound for finding the pos integer
function upperBound(nums){
  let low = 0;
  let high = nums.length-1;
  let index = nums.length; //if no positive number found
  while(low <= high){
      let mid = low + Math.floor((high-low)/2);

      if(nums[mid] > 0){
          index = mid;
          high = mid-1; //look for smaller index on left
      }else{
          low = mid+1; //look for bigger index on right
      }
  }
  return index;
}

//lower bound for finding the neg count
function lowerBound(nums){
  let index = nums.length; //If all are negative
  let low=0, high=nums.length-1;
  while(low <= high){
      let mid = low + Math.floor((high-low)/2);

      if(nums[mid] >= 0){
          index = mid;
          high = mid-1;
      }else{
          low = mid+1;
      }
  }
  return index;
}
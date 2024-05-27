/* 
Problem statement
You are given an array 'arr' sorted in non-decreasing order and a number 'x'.
You must return the index of lower bound of 'x'.

Note:
For a sorted array 'arr', 'lower_bound' of a number 'x' is defined as the smallest index 'idx' such that the value 'arr[idx]' is not less than 'x'.
arr[ind] >= x, use Binary Search
*/
//TC O(logN)
function LowerBound(arr, target){
  let len = arr.length;
  let low = 0, high = len - 1;
  let ans = len; //assume the last index as of ans

  while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(arr[mid] >= target){
      ans = mid; //assume that it will my ans and chage ans value to new mid, and also if arr[mid] > target, Now need to search in right half
      high = mid - 1;
    }else {
      low = mid + 1; // search in right half;
    }
  }
  return ans;
}
/* 3245 Find the Power of K-Size Subarrays I
16 Nov 2024, Leetcode POTD, Array, Sliding Window

You are given an array of integers nums of length n and a positive integer k.

The power of an array is defined as:
Its maximum element if all of its elements are consecutive and sorted in ascending order.
-1 otherwise.
You need to find the power of all 
subarrays of nums of size k.
Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].
*/

// Brute Method, need to move till len-k+1, then k size
//TC: O(n * k), SC: O(1) if we dont consider result
const resultsArray = (nums, k) => {
  let len = nums.length;
  let result = Array(len-k+1).fill(0);
  //now need to move till len-k+1
  for(let i=0; i<(len-k+1); i++){
    let isConsecutiveAndSorted = true;
    for(let j=i; j<(i+k-1); j++){
      if(nums[j]+1 !== nums[j+1]){
        isConsecutiveAndSorted = false;
        break;
      }
    }

    //if valid take max one
    if(isConsecutiveAndSorted){
      result[i] = nums[i + k - 1];
    }else{
      result[i] = -1;
    }
  }
  return result;
};

/*Method 2-in this we use Sliding Window, for first one, we use
simply for loop till k and then find the ans in 1. and for next
window we use SLiding Window. TC: O(n), SC: O(1)
*/
const resultsArray1 = function(nums, k) {
  let len = nums.length;
  let result = Array(len-k+1).fill(-1);
  let count = 1;
  //for first iteration
  for(let i=1; i<k; i++){
      if(nums[i] === nums[i-1]+1){
          //if curr one is equal to prev one, measn consecutive
          count++;
      }else{
          count = 1;
      }
  }
  if(count === k){
      result[0] = nums[k-1];
  }
  //now we use sliding window
  let i=1; //after first fill i will move to next one
  let j=k;
  while(j < len){
      if(nums[j] === nums[j-1]+1){
          count++;
      }else{
          count=1;
      }

      if(count >= k){
          result[i] = nums[j];
      }
      i++;
      j++;
  }
  return result;
};
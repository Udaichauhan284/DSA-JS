/* 862 Shortest Subarray with Sum at Least K.
17 Nov 2024, Leetcode POTD, Array, Sliding Window, Monotonic Stack

Input: nums = [2,-1,2], k = 3
Output: 3
*/

/*In this we use Sliding Window, and we use monotonic stack
for storing the cumlitive sum in increasing order, as we need
this sum >= k, we store sum in arr, and pointer into deq.
TC: O(n), SC: O(n)
*/

var shortestSubarray = function(nums, k) {
  let len = nums.length;
  let cumulativeSum = Array(len).fill(0);
  let result = Number.MAX_VALUE; //we need shortest subarr len
  let deque = [];
  let j = 0;
  while(j < len){
      if(j===0){
          //for initial cumulativeSum is curr num
          cumulativeSum[j] = nums[j];
      }else{
          cumulativeSum[j] = nums[j]+cumulativeSum[j-1];
      }

      // If the cumulative sum from the start to j is already >= K, update result
      if(cumulativeSum[j] >= k){
          result = Math.min(result, j+1);
      }
      
      // Remove indices from the deque where the subarray sum is >= K
      while(deque.length > 0 && cumulativeSum[j] - cumulativeSum[deque[0]] >= k){
          result = Math.min(result, j-deque[0]);
          //remove the front index, that will useless
          deque.shift();
      }

      // Maintain the monotonic property of the deque (increasing order of cumulative sums)
      while(deque.length > 0 && cumulativeSum[j] <= cumulativeSum[deque[deque.length-1]]){
          deque.pop();
      }
      //otherwise push in deque
      deque.push(j);
      j++;
  }
  return result === Number.MAX_VALUE ? -1 : result;
};
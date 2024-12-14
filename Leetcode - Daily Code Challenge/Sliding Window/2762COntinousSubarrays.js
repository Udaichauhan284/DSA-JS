/*2762. Continuous Subarrays
14 Dec 2024, Leetcoddee POTD, Array, Nested Loop, Subarrays, Monotonic Queue

Input: nums = [5,4,2,4]
Output: 8
Explanation: 
Continuous subarray of size 1: [5], [4], [2], [4].
Continuous subarray of size 2: [5,4], [4,2], [2,4].
Continuous subarray of size 3: [4,2,4].
Thereare no subarrys of size 4.
Total continuous subarrays = 4 + 3 + 1 = 8.
It can be shown that there are no more continuous subarrays.
*/

/*OPtimal, Use of Monotonic Queue, and here we use MaxQ and MinQ
for maintain the max and min of Subarray TC: O(n), SC: O(n)
*/
var continuousSubarrays = function(nums) {
  let len = nums.length;
  let left = 0;
  let right = 0;
  let ans = 0;
  let maxQ = []; //MonotonixQ (decreaseing order)
  let minQ = []; //MOnotonicQ (increasing order)
  while(right < len){
      while(maxQ.length > 0 && nums[right] > maxQ[maxQ.length-1]){
          //if curr one is bigger then last one
          //we will pop out the last elem form queue
          maxQ.pop();
      }
      maxQ.push(nums[right]);
      //now for minQ
      while(minQ.length > 0 && nums[right] < minQ[minQ.length-1]){
          minQ.pop();
      }
      minQ.push(nums[right]);
      //now we wil check the condition
      while(maxQ[0] - minQ[0] > 2){
          if(nums[left] === maxQ[0]){
              maxQ.shift();
          }
          if(nums[left] === minQ[0]){
              minQ.shift();
          }
          left++;
      }
      ans += right - left + 1;
      right++;
  }
  return ans;
};
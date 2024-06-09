/* 974. Subarray Sums Divisible by K
09 June 2024 Leetcode POTD, Array, Prefix, Map
Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
*/
/* Method 1- use of two loop, initialize sum inside first loop
with 0 and start second loop from j=i tolen, sum += nums[j]
check the condition.
TC: O(n^2), SC: O(1)
*/
var subarraysDivByK = function(nums, k) {
  let len = nums.length;
  let count = 0;
  for(let i=0; i<len; i++){
      let sum = 0
      for(let j=i; j<len; j++){
          sum += nums[j];
          if(sum % k === 0) count++;
      }
  }
  return count;
};


/* We can use Map
TC: O(n), SC: O(n)
*/
var subarraysDivByK1 = function(nums, k) {
  let len = nums.length;
  let count = 0;
  let sum = 0;
  let map = new Map();
  //initial rem 0 to 1 time
  map.set(0,1);
  for(let i=0; i<len; i++){
      sum += nums[i];
      let rem = sum % k;
      if(rem < 0){
          //measn if rem is negative add k into it
          rem += k;
      }
      //now check in map
      if(map.has(rem)){
          count += map.get(rem) || 0;
      }
      //else set in map the rem increment
      map.set(rem, (map.get(rem) || 0)+1);
  }
  return count;
};
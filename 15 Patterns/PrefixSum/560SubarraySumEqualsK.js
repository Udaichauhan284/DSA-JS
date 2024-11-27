/*27 Nov 2024
560 Subarray Sum Equals K.
Input: nums = [1,1,1], k = 2
Output: 2
*/
/* 27 Nov 2024
Optimal 1-use of currSum and Map, and check the
raminingSum in map, if yes then count the freq in
result. TC: O(n), SC: O(n)
*/
var subarraySum = function(nums, k) {
  let len = nums.length;
  let map = new Map();
  let result = 0;
  let currSum = 0;
  map.set(currSum, 1);
  //now traverse on nums
  for(let num of nums){
      currSum += num;
      //now find the remaininSum and check map
      let remainingSum = currSum - k;
      if(map.has(remainingSum)){
          result += map.get(remainingSum);
      }
      //now add the currSum in mao
      map.set(currSum, (map.get(currSum) || 0)+1);
  }
  return result;
};
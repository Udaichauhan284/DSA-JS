/* 945. Minimum Increment to Make Array Unique
14 June 2024 Leetcode POTD, Array, soring, greedy
You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.

Return the minimum number of moves to make every value in nums unique.

Input: nums = [1,2,2]
Output: 1
Explanation: After 1 move, the array could be [1, 2, 3].

*/
/* we need to sort the elem, as saem elem will comes 
at same place.
and also we need to check if nums[i] <= nums[i-1]
then we will perfrom increment in nums and moves
TC: O(nlogn)+O(n) ~ O(nlogn), SC: O(1)
*/
var minIncrementForUnique = function (nums) {
  //sort the nums, so that adjecent check can happen
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  let count = 0;
  for (let i = 1; i < len; i++) {
    if (nums[i] <= nums[i - 1]) {
      count += nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }
  return count;
};

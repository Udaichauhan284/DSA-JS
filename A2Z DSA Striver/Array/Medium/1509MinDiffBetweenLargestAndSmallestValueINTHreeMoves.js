/* 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
03/July/2024 Leetcode POTD Array, Greedy, Sorting
Input: nums = [5,3,2,4]
Output: 0
Explanation: We can make at most 3 moves.
In the first move, change 2 to 3. nums becomes [5,3,3,4].
In the second move, change 4 to 3. nums becomes [5,3,3,3].
In the third move, change 5 to 3. nums becomes [3,3,3,3].
After performing 3 moves, the difference between the minimum and maximum is 3 - 3 = 0.
*/

//TC: O(nlogn), SC: O(1)
var minDifference = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let n = nums.length;
  if (n <= 4) {
    return 0;
  }
  let result = Number.MAX_VALUE;
  result = Math.min(result, nums[n - 4] - nums[0]);
  result = Math.min(result, nums[n - 1] - nums[3]);
  result = Math.min(result, nums[n - 3] - nums[1]);
  result = Math.min(result, nums[n - 2] - nums[2]);
  return result;
};

/* Method 2 use of sorting and for loop till i=0 to 3
TC: O(nlogn)+O(3) ~ O(nlogn), SC: O(1)
*/
var minDifference = function (nums) {
  let n = nums.length;
  let result = Number.MAX_VALUE;
  if (n <= 4) {
    return 0;
  }
  //sort the nums to
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= 3; i++) {
    result = Math.min(result, nums[n - 4 + i] - nums[i]);
  }
  return result;
};

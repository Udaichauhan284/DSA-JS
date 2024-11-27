/*
27 Nov 2024
***** LEETCODE 15 Patterns *****
===> Prefix Sum <===
Given an array nums, answer multiple queries about the sum of elements within a specific range [i, j].

Example:

Input: nums = [1, 2, 3, 4, 5, 6], i = 1, j = 3

Output: 9

Explanation:
Preprocess the array A to create a prefix sum array: P = [1, 3, 6, 10, 15, 21].

To find the sum between indices i and j, use the formula: P[j] - P[i-1].

=> 303 Range Sum Query - Immutable
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
*/
class NumArray {
  constructor(nums) {
    this.nums = nums;
  }
  sumRange(left, right) {
    let sum = 0;
    while (left <= right) {
      sum += this.nums[left];
      left++;
    }
    return sum;
  }
}

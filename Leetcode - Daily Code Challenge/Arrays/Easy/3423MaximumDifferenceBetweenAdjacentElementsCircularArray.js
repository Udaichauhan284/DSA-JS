/* 3423. Maximum Difference Between Adjacent Elements in a Circular Array
12 June 2025, Leetcode POTD, Easy Section
Input: nums = [1,2,4]

Output: 3

Explanation:

Because nums is circular, nums[0] and nums[2] are adjacent. They have the maximum absolute difference of |4 - 1| = 3.


*/

//TC: O(n), SC: O(1)
var maxAdjacentDistance = function(nums) {
    let len = nums.length;
    let maxDiff = Math.abs(nums[len-1] - nums[0]);
    for(let i=0; i<=len-2; i++){
        maxDiff = Math.max(maxDiff, Math.abs(nums[i] - nums[i+1]));
    }
    return maxDiff;
};
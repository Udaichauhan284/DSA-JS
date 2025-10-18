/*
3397. Maximum Number of Distinct Elements After Operations
18 oct 2025, leetcode potd, medium
Input: nums = [1,2,2,3,3,4], k = 2

Output: 6

Explanation:

nums changes to [-1, 0, 1, 2, 3, 4] after performing operations on the first four elements.
*/
var maxDistinctElements = function(nums, k) {
    const n = nums.length;
    nums.sort((a, b) => a - b); // sort ascending

    let count = 0;
    let prev = -Infinity; // equivalent to INT_MIN

    for (let i = 0; i < n; i++) {
        const minVal = nums[i] - k;

        if (prev < minVal) {
            // choose nums[i] - k
            prev = minVal;
            count++;
        } else if (prev < nums[i] + k) {
            // move to next available distinct position
            prev = prev + 1;
            count++;
        }
        // if prev >= nums[i] + k, we skip (can't make unique within range)
    }

    return count;
};
/*2200. Find All K-Distant Indices In An array
24 June 2025, leetcode POTD
Input: nums = [2,2,2,2,2], key = 2, k = 2
Output: [0,1,2,3,4]
Explanation: For all indices i in nums, there exists some index j such that |i - j| <= k and nums[j] == key, so every index is a k-distant index. 
Hence, we return [0,1,2,3,4].
*/

//TC: O(n), SC: O(1)
var findKDistantIndices = function(nums, key, k) {
    const n = nums.length;
    const result = [];

    for (let j = 0; j < n; j++) {
        if (nums[j] === key) {
            let start = Math.max(j - k, 0);
            let end = Math.min(j + k, n - 1);

            if (result.length > 0 && result[result.length - 1] >= start) {
                start = result[result.length - 1] + 1;
            }

            for (let i = start; i <= end; i++) {
                result.push(i);
            }
        }
    }

    return result;
};

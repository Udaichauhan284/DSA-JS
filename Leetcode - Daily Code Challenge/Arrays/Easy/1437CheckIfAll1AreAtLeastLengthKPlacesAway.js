/* 1437. Check if all 1's are at least length K places away
17 nov 2025, leetcode potd, easy
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.
*/

var kLengthApart = function(nums, k) {
    let n = nums.length;

    let lastOne = -(k + 1);  // same logic as C++

    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            if (i - lastOne - 1 < k) {
                return false;
            }
            lastOne = i;
        }
    }

    return true;
};
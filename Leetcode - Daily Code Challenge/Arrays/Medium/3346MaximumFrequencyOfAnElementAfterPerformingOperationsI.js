/* 3346. Maximum Frequency of an Element After Performing Operations I
21 oct 2025, leetcode potd, medium
Input: nums = [1,4,5], k = 1, numOperations = 2

Output: 2

Explanation:

We can achieve a maximum frequency of two by:

Adding 0 to nums[1]. nums becomes [1, 4, 5].
Adding -1 to nums[2]. nums becomes [1, 4, 4].
*/

function maxFrequency(nums, k, numOperations) {
    const maxEl = Math.max(...nums) + k;

  // Initialize frequency array
    const freq = new Array(maxEl + 1).fill(0);

  // Count frequency
    for (const num of nums) {
        freq[num]++;
    }

  // Build cumulative frequency
    for (let i = 1; i <= maxEl; i++) {
        freq[i] += freq[i - 1];
    }

    let result = 0;

    for (let target = 0; target <= maxEl; target++) {
        if (freq[target] === 0) continue;

        const leftNum = Math.max(0, target - k);
        const rightNum = Math.min(maxEl, target + k);

        const totalCount = freq[rightNum] - (leftNum > 0 ? freq[leftNum - 1] : 0);
        const targetCount = freq[target] - (target > 0 ? freq[target - 1] : 0);

        const needConversion = totalCount - targetCount;
        const maxPossibleFreq =
        targetCount + Math.min(needConversion, numOperations);

        result = Math.max(result, maxPossibleFreq);
    }

    return result;
}

/* 3347. Maximum Frequency of an Element After Performing Operations II
22 Oct 2025, leetcode potd, HARD
Input: nums = [1,4,5], k = 1, numOperations = 2

Output: 2

Explanation:

We can achieve a maximum frequency of two by:

Adding 0 to nums[1], after which nums becomes [1, 4, 5].
Adding -1 to nums[2], after which nums becomes [1, 4, 4].

*/

function maxFrequency(nums, k, numOperations) {
    const maxVal = Math.max(...nums) + k;

    // Use Map to maintain sorted keys like C++ map
    const diff = new Map();
    const freq = new Map();

    // Build frequency and difference maps
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);

        const l = Math.max(num - k, 0);
        const r = Math.min(num + k, maxVal);

        diff.set(l, (diff.get(l) || 0) + 1);
        diff.set(r + 1, (diff.get(r + 1) || 0) - 1);

        // Ensures target key exists (like `diff[nums[i]] += 0` in C++)
        if (!diff.has(num)) diff.set(num, 0);
    }

    // Sort the diff map by key since JS Map doesn’t sort automatically
    const sortedDiff = [...diff.entries()].sort((a, b) => a[0] - b[0]);

    let result = 1;
    let cumSum = 0;

    for (const [target, val] of sortedDiff) {
        const updatedVal = val + cumSum;

        const targetFreq = freq.get(target) || 0;
        const needConversion = updatedVal - targetFreq;
        const maxPossibleFreq = Math.min(needConversion, numOperations);

        result = Math.max(result, targetFreq + maxPossibleFreq);

        cumSum = updatedVal;
    }

    return result;
}
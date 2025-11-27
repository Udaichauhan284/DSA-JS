var maxSubarraySum = function (nums, k) {
    let n = nums.length;
    let prefixSum = 0;
    let maxSum = -Number.MAX_SAFE_INTEGER;
    let kSum = Array(k).fill(Number.MAX_SAFE_INTEGER / 2);
    kSum[k - 1] = 0;
    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];
        maxSum = Math.max(maxSum, prefixSum - kSum[i % k]);
        kSum[i % k] = Math.min(kSum[i % k], prefixSum);
    }
    return maxSum;
};
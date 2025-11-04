function findTopXSum(mp, x) {
    // Convert Map entries to array of [value, frequency]
    const arr = Array.from(mp.entries()).map(([val, freq]) => [freq, val]);

    // Sort by frequency ascending, then value ascending (like min-heap)
    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // Keep only top x (highest freq/value) elements
    const topX = arr.slice(-x);

    // Calculate sum = freq * val
    let sum = 0;
    for (const [freq, val] of topX) {
        sum += freq * val;
    }

    return sum;
    }

    function findXSum(nums, k, x) {
    const n = nums.length;
    const mp = new Map();
    const result = [];

    let i = 0;
    for (let j = 0; j < n; j++) {
        mp.set(nums[j], (mp.get(nums[j]) || 0) + 1);

        if (j - i + 1 === k) {
        result.push(findTopXSum(mp, x));

        // Remove element from left of window
        mp.set(nums[i], mp.get(nums[i]) - 1);
        if (mp.get(nums[i]) === 0) mp.delete(nums[i]);
        i++;
        }
    }

    return result;
}

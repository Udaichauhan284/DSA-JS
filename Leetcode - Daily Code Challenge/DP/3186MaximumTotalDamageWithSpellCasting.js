/*
3186. Maximum Total Damage With Spell Casting
11 Oct 2025, leetcode potd, medium

Input: power = [1,1,3,4]

Output: 6

Explanation:

The maximum possible damage of 6 is produced by casting spells 0, 1, 3 with damage 1, 1, 4.


*/

var maximumTotalDamage = function(power) {
    const mp = new Map();

    // count frequency
    for (const x of power) {
        mp.set(x, (mp.get(x) || 0) + 1);
    }

    // unique sorted numbers
    const nums = Array.from(mp.keys()).sort((a, b) => a - b);
    const n = nums.length;
    const t = new Array(n).fill(-1);

    function solve(i) {
        if (i >= n) return 0;
        if (t[i] !== -1) return t[i];

        // skip current number
        const skip = solve(i + 1);

        // take current number
        const target = nums[i] + 3;
        const j = lowerBound(nums, target, i + 1);
        const take = nums[i] * mp.get(nums[i]) + solve(j);

        t[i] = Math.max(skip, take);
        return t[i];
    }

    return solve(0);
};

// Helper function for lower_bound (binary search)
function lowerBound(arr, target, start = 0) {
    let l = start, r = arr.length;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (arr[mid] < target) l = mid + 1;
        else r = mid;
    }
    return l;
}
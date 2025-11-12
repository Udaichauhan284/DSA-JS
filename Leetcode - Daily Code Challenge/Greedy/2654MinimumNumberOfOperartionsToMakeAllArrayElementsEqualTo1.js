/* 2654. Minimum Number of Operations to Make All Array Elements Equal to 1
12 Nov 2025, leetcode potd, medium

*/

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function minOperations(nums) {
    const n = nums.length;

    // Count number of 1s
    let count1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) count1++;
    }

    // If there are already some 1s, we just need to make the rest 1
    if (count1 > 0) {
        return n - count1;
    }

    let minStepsTo1 = Infinity;

    // Try all subarrays to find a GCD = 1
    for (let i = 0; i < n; i++) {
        let GCD = nums[i];
        for (let j = i + 1; j < n; j++) {
            GCD = gcd(GCD, nums[j]);
            if (GCD === 1) {
                minStepsTo1 = Math.min(minStepsTo1, j - i);
                break;
            }
        }
    }

    // If GCD 1 is not possible, return -1
    if (minStepsTo1 === Infinity) {
        return -1;
    }

    // Return total operations
    return minStepsTo1 + (n - 1);
}
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function minOperations(nums) {
    const n = nums.length;

    // Count number of 1s
    let count1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) count1++;
    }

    // If there are already some 1s, we just need to make the rest 1
    if (count1 > 0) {
        return n - count1;
    }

    let minStepsTo1 = Infinity;

    // Try all subarrays to find a GCD = 1
    for (let i = 0; i < n; i++) {
        let GCD = nums[i];
        for (let j = i + 1; j < n; j++) {
            GCD = gcd(GCD, nums[j]);
            if (GCD === 1) {
                minStepsTo1 = Math.min(minStepsTo1, j - i);
                break;
            }
        }
    }

    // If GCD 1 is not possible, return -1
    if (minStepsTo1 === Infinity) {
        return -1;
    }

    // Return total operations
    return minStepsTo1 + (n - 1);
}
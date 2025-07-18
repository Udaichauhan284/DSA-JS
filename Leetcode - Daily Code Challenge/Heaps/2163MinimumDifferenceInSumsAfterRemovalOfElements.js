/* 2163. Minimum Difference In Sums After Removal of Elements
18 July 2025, Leetcode POTD, HARD
Input: nums = [3,1,2]
Output: -1
Explanation: Here, nums has 3 elements, so n = 1. 
Thus we have to remove 1 element from nums and divide the array into two equal parts.
- If we remove nums[0] = 3, the array will be [1,2]. The difference in sums of the two parts will be 1 - 2 = -1.
- If we remove nums[1] = 1, the array will be [3,2]. The difference in sums of the two parts will be 3 - 2 = 1.
- If we remove nums[2] = 2, the array will be [3,1]. The difference in sums of the two parts will be 3 - 1 = 2.
The minimum difference between sums of the two parts is min(-1,1,2) = -1. 
*/


var minimumDifference = function (nums) {
    const n3 = nums.length,
        n = Math.floor(n3 / 3);
    const part1 = new Array(n + 1).fill(0);
    let sum = 0;
    // max heap (simulate with opposite numbers)
    const ql = new MaxPriorityQueue();
    for (let i = 0; i < n; ++i) {
        sum += nums[i];
        ql.enqueue(nums[i]);
    }

    part1[0] = sum;
    for (let i = n; i < n * 2; ++i) {
        sum += nums[i];
        ql.enqueue(nums[i]);
        sum -= ql.dequeue();
        part1[i - (n - 1)] = sum;
    }
    let part2 = 0;
    // min heap
    const qr = new MinPriorityQueue();
    for (let i = n * 3 - 1; i >= n * 2; --i) {
        part2 += nums[i];
        qr.enqueue(nums[i]);
    }

    let ans = part1[n] - part2;
    for (let i = n * 2 - 1; i >= n; --i) {
        part2 += nums[i];
        qr.enqueue(nums[i]);
        part2 -= qr.dequeue();
        ans = Math.min(ans, part1[i - n] - part2);
    }
    return ans;
};
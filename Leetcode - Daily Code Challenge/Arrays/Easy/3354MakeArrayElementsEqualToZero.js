/*
3354. Make Array Elements Elements Equal to Zero
28 Oct 2025, leetcode potd, easy

Input: nums = [1,0,2,0,3]

Output: 2

Explanation:

The only possible valid selections are the following:

Choose curr = 3, and a movement direction to the left.
[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,1,0,3] -> [1,0,1,0,3] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,0,0,2] -> [1,0,0,0,2] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,0].
Choose curr = 3, and a movement direction to the right.
[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,2,0,2] -> [1,0,2,0,2] -> [1,0,1,0,2] -> [1,0,1,0,2] -> [1,0,1,0,1] -> [1,0,1,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [0,0,0,0,0].
*/

var countValidSelections = function (nums) {
    let count = 0,
        nonZeros = nums.filter((x) => x > 0).length,
        n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            if (isValid([...nums], nonZeros, i, -1)) count++;
            if (isValid([...nums], nonZeros, i, 1)) count++;
        }
    }
    return count;
};

function isValid(nums, nonZeros, start, direction) {
    let curr = start;
    while (nonZeros > 0 && curr >= 0 && curr < nums.length) {
        if (nums[curr] > 0) {
            nums[curr]--;
            direction *= -1;
            if (nums[curr] === 0) nonZeros--;
        }
        curr += direction;
    }
    return nonZeros === 0;
}
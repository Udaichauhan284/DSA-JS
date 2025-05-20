/* 3355. Zero Array Transformation I
20 May 25, Leetcode POTD, Medium
Input: nums = [1,0,1], queries = [[0,2]]

Output: true

Explanation:

For i = 0:
Select the subset of indices as [0, 2] and decrement the values at these indices by 1.
The array will become [0, 0, 0], which is a Zero Array.
*/

/*In this question, we have to apply queries on the given
range, so in this we can use the Difference Array Techni
for that i take the diff array, in that i will start 
iteration on queries in left i will add 1 and in 
r+1 < len i will subtract the 1, after that i will cummSum
and store in result, and at last i will compare result and
nums, if result[i] < nums[i], means for making the
nums[i] === 0, it will take more steps, so return false
TC: O(Q+n), SC: O(n)
*/
var isZeroArray = function(nums, queries) {
    const len = nums.length;

    // Step 1: Make diff array using queries
    const diff = Array(len).fill(0);
    for (const [l,r] of queries) {
        diff[l] += 1;
        if (r + 1 < len) {
            diff[r + 1] -= 1;
        }
    }

    // Step 2: Find cumulative effect on each index
    const result = Array(len).fill(0);
    let cumSum = 0;
    for (let i = 0; i < len; i++) {
        cumSum += diff[i];
        result[i] = cumSum;
    }

    // Step 3: Check if result has enough decrements for each index
    for (let i = 0; i < len; i++) {
        if (result[i] < nums[i]) {
            return false;
        }
    }

    return true;
};

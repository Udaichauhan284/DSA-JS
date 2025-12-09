/*3583. Count Special Triplets
09 Dec 2025, leetcode potd medium
Input: nums = [6,3,6]

Output: 1

Explanation:

The only special triplet is (i, j, k) = (0, 1, 2), where:

nums[0] = 6, nums[1] = 3, nums[2] = 6
nums[0] = nums[1] * 2 = 3 * 2 = 6
nums[2] = nums[1] * 2 = 3 * 2 = 6
*/

const M = 1e9 + 7;

var specialTriplets = function(nums) {
    let mp_left = new Map();
    let mp_right = new Map();

    // Fill right map with frequencies
    for (let num of nums) {
        mp_right.set(num, (mp_right.get(num) || 0) + 1);
    }

    let result = 0;

    for (let num of nums) {
        mp_right.set(num, mp_right.get(num) - 1); // remove current num from right

        let left  = mp_left.get(num * 2) || 0;
        let right = mp_right.get(num * 2) || 0;

        result = (result + (left * right) % M) % M;

        mp_left.set(num, (mp_left.get(num) || 0) + 1);
    }

    return result;
};

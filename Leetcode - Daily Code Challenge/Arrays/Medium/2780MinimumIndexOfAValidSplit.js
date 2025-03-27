/*2780. Minimum Index of a Valid Split
27 March 25, Leetcode POTD
Input: nums = [1,2,2,2]
Output: 2
Explanation: We can split the array at index 2 to obtain arrays [1,2,2] and [2]. 
In array [1,2,2], element 2 is dominant since it occurs twice in the array and 2 * 2 > 3. 
In array [2], element 2 is dominant since it occurs once in the array and 1 * 2 > 1.
Both [1,2,2] and [2] have the same dominant element as nums, so this is a valid split. 
It can be shown that index 2 is the minimum index of a valid split.
*/

var minimumIndex = function (nums) {
    let len = nums.length;
    let map1 = new Map();
    let map2 = new Map();

    // Count occurrences of each number in map2
    for (let num of nums) {
        map2.set(num, (map2.get(num) || 0) + 1);
    }

    for (let i = 0; i < len; i++) {
        let num = nums[i];

        // Move element from map2 to map1
        map1.set(num, (map1.get(num) || 0) + 1);
        map2.set(num, map2.get(num) - 1);

        let n1 = i + 1;  // Left segment size
        let n2 = len - i - 1;  // Right segment size

        if (
            map1.get(num) > Math.floor(n1 / 2) &&
            map2.get(num) > Math.floor(n2 / 2)
        ) {
            return i;
        }
    }
    return -1;
};

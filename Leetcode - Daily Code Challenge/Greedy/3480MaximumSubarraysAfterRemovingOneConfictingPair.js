/*3480. Maximize Subarrays After Removing One Conflicting Pair
26 July 2025, Leetcode POTD, HARD
Input: n = 4, conflictingPairs = [[2,3],[1,4]]

Output: 9

Explanation:

Remove [2, 3] from conflictingPairs. Now, conflictingPairs = [[1, 4]].
There are 9 subarrays in nums where [1, 4] do not appear together. They are [1], [2], [3], [4], [1, 2], [2, 3], [3, 4], [1, 2, 3] and [2, 3, 4].
The maximum number of subarrays we can achieve after removing one element from conflictingPairs is 9.
*/
var maxSubarrays = function (n, conflictingPairs) {
    const bMin1 = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    const bMin2 = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    for (const pair of conflictingPairs) {
        const a = Math.min(pair[0], pair[1]),
            b = Math.max(pair[0], pair[1]);
        if (bMin1[a] > b) {
            bMin2[a] = bMin1[a];
            bMin1[a] = b;
        } else if (bMin2[a] > b) {
            bMin2[a] = b;
        }
    }
    let res = 0,
        ib1 = n,
        b2 = Number.MAX_SAFE_INTEGER;
    const delCount = Array(n + 1).fill(0);
    for (let i = n; i >= 1; i--) {
        if (bMin1[ib1] > bMin1[i]) {
            b2 = Math.min(b2, bMin1[ib1]);
            ib1 = i;
        } else {
            b2 = Math.min(b2, bMin1[i]);
        }
        res += Math.min(bMin1[ib1], n + 1) - i;
        delCount[ib1] +=
            Math.min(Math.min(b2, bMin2[ib1]), n + 1) -
            Math.min(bMin1[ib1], n + 1);
    }
    return res + Math.max(...delCount);
};
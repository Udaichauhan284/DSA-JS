/* 3495. Minimum Operations to make array elements zero
06 sept 2025, leetcode potd. HARD
Input: queries = [[1,2],[2,4]]

Output: 3

Explanation:

For queries[0]:

The initial array is nums = [1, 2].
In the first operation, select nums[0] and nums[1]. The array becomes [0, 0].
The minimum number of operations required is 1.
For queries[1]:

The initial array is nums = [2, 3, 4].
In the first operation, select nums[0] and nums[2]. The array becomes [0, 3, 1].
In the second operation, select nums[1] and nums[2]. The array becomes [0, 0, 0].
The minimum number of operations required is 2.
The output is 1 + 2 = 3.
*/

function solve(l, r) {
    let L = 1;  // starting point
    let S = 1;  // step weight
    let steps = 0;

    while (L <= r) {
        let R = 4 * L - 1;

        let start = Math.max(L, l);
        let end = Math.min(R, r);

        if (start <= end) {
            steps += (end - start + 1) * S;
        }

        S += 1;
        L = L * 4;
    }

    return steps;
}

function minOperations(queries) {
    let result = 0;

    for (let query of queries) {
        let [l, r] = query;

        let steps = solve(l, r);

        result += Math.floor((steps + 1) / 2);
    }

    return result;
}
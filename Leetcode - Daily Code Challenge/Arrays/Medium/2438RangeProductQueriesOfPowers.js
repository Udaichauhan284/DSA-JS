/*2438. Range Product Queries of Powers
11 Aug 2025, leetcode potd, medium
Input: n = 15, queries = [[0,1],[2,2],[0,3]]
Output: [2,4,64]
Explanation:
For n = 15, powers = [1,2,4,8]. It can be shown that powers cannot be a smaller size.
Answer to 1st query: powers[0] * powers[1] = 1 * 2 = 2.
Answer to 2nd query: powers[2] = 4.
Answer to 3rd query: powers[0] * powers[1] * powers[2] * powers[3] = 1 * 2 * 4 * 8 = 64.
Each answer modulo 109 + 7 yields the same answer, so [2,4,64] is returned.
*/

//Approach (Building powers array using bits information)
//T.C : O(Q), where Q = size of queries
//S.C : O(1)
const M = 1e9 + 7;
var productQueries = function(n, queries) {
    let powers = [];
    let result = [];

    // Build powers array from set bits of n
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) { // ith bit is set
            powers.push(1 << i);
        }
    }

    // Process each query
    for (let query of queries) {
        let start = query[0];
        let end = query[1];

        let product = 1;
        for (let i = start; i <= end; i++) {
            product = (product * powers[i]) % M;
        }

        result.push(product);
    }

    return result;
};

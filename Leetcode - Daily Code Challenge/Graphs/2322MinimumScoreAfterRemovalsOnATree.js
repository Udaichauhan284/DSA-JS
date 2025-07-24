/* 2322. Minimum Score After Removals on a Tree
24 July 2025, Leetcode POTD
Input: nums = [1,5,5,4,11], edges = [[0,1],[1,2],[1,3],[3,4]]
Output: 9
Explanation: The diagram above shows a way to make a pair of removals.
- The 1st component has nodes [1,3,4] with values [5,4,11]. Its XOR value is 5 ^ 4 ^ 11 = 10.
- The 2nd component has node [0] with value [1]. Its XOR value is 1 = 1.
- The 3rd component has node [2] with value [5]. Its XOR value is 5 = 5.
The score is the difference between the largest and smallest XOR value which is 10 - 1 = 9.
It can be shown that no other pair of removals will obtain a smaller score than 9.
*/

//TC: O(n^2), SC: O(n)
var minimumScore = function(nums, edges) {
    const n = nums.length;
    const adj = new Map();
    for (const [u, v] of edges) {
        if (!adj.has(u)) adj.set(u, []);
        if (!adj.has(v)) adj.set(v, []);
        adj.get(u).push(v);
        adj.get(v).push(u);
    }

    const subtreeXor = Array(n).fill(0);
    const inTime = Array(n).fill(0);
    const outTime = Array(n).fill(0);
    let timer = 0;

    function dfs(node, parent) {
        subtreeXor[node] = nums[node];
        inTime[node] = timer++;
        for (const ngbr of adj.get(node) || []) {
            if (ngbr !== parent) {
                dfs(ngbr, node);
                subtreeXor[node] ^= subtreeXor[ngbr];
            }
        }
        outTime[node] = timer++;
    }

    dfs(0, -1);

    function isAncestor(u, v) {
        return inTime[v] >= inTime[u] && outTime[v] <= outTime[u];
    }

    function getScore(a, b, c) {
        return Math.max(a, b, c) - Math.min(a, b, c);
    }

    let result = Infinity;
    for (let u = 1; u < n; u++) {
        for (let v = u + 1; v < n; v++) {
            let xor1, xor2, xor3;

            if (isAncestor(u, v)) {
                xor1 = subtreeXor[v];
                xor2 = subtreeXor[u] ^ subtreeXor[v];
                xor3 = subtreeXor[0] ^ xor1 ^ xor2;
            } else if (isAncestor(v, u)) {
                xor1 = subtreeXor[u];
                xor2 = subtreeXor[v] ^ subtreeXor[u];
                xor3 = subtreeXor[0] ^ xor1 ^ xor2;
            } else {
                xor1 = subtreeXor[u];
                xor2 = subtreeXor[v];
                xor3 = subtreeXor[0] ^ xor1 ^ xor2;
            }

            result = Math.min(result, getScore(xor1, xor2, xor3));
        }
    }

    return result;
};

/* 1339. Maximum Product of Splitted Binary Tree
07 Jan 2026, leetcode potd

Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
*/

var maxProduct = function(root) {
    const MOD = 1000000007n;

    let totalSum = 0n;
    let maxP = 0n;

    // First DFS: compute total sum
    function findTotalSum(node) {
        if (!node) return 0n;

        const leftSum = findTotalSum(node.left);
        const rightSum = findTotalSum(node.right);

        return BigInt(node.val) + leftSum + rightSum;
    }

    // Second DFS: compute max product
    function dfs(node) {
        if (!node) return 0n;

        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);

        const subTreeSum = BigInt(node.val) + leftSum + rightSum;

        const product = subTreeSum * (totalSum - subTreeSum);
        if (product > maxP) maxP = product;

        return subTreeSum;
    }

    totalSum = findTotalSum(root); // 1st traversal
    dfs(root);                     // 2nd traversal

    return Number(maxP % MOD);
};
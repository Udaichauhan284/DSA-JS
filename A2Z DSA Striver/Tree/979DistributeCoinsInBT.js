/* 979. Distribute Coins in Binary Tree
18 May 2024, Leetcode Code Daily Challenge, TOpic: Binary Tree, Recursion
Input: root = [3,0,0]
Output: 2
Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.
*/
/* Recursive move into tree, count the totalExtraCnadies and moves, to send it back to up by recursion
 TC: O(n), SC: O(depth of recursion tree).
 */
var distributeCoins = function (root) {
  if (root === null || (root.left === null && root.right === null)) {
    return 0;
  }
  let moves = [0];
  solve(root, moves);
  return moves[0];
};
function solve(root, moves) {
  if (root === null) {
    return 0;
  }
  let l = solve(root.left, moves);
  let r = solve(root.right, moves);
  let totalExtraCandies = l + r + root.val - 1;
  moves[0] += Math.abs(l) + Math.abs(r);
  return totalExtraCandies;
}

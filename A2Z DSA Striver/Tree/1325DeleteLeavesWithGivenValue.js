/* 1325. Delete Leaves With agiven value
17 May 2024 - Leetcode Daily COde Challenge, Topic: Binary Tree, Depath First Search. 

Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]
Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).
*/

/* Tree - we can use Recursion, assign root left recursion in new root.left and same for root.right, then check for null and target, if target match return null else return root TC: O(n),, SC: O(depth of tree) system stack
 */
var removeLeafNodes = function (root, target) {
  if (root === null) {
    return null;
  }
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  if (root.left === null && root.right === null && root.val === target) {
    return null;
  }
  return root;
};

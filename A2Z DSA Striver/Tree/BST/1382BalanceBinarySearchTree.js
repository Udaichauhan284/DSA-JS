/* 1382. Balance a Binary Search Tree
26 June 2024 Leetcode POTD, Binary Tree, BST
Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.
A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.

*/

/*First we need a sorted array for building the Balanced BST.
for sorted array we can use inorder traversal, then use of ans sorted arr
we can build Balanced BST. TC:O(n+n)~O(2n)~O(n), SC: O(n)
*/
var balanceBST = function (root) {
  let ans = [];
  inOrder(root, ans);
  let len = ans.length;
  //this is for creating a Balance BST
  return solve(0, len - 1, ans); //left, right, sorted array
};
function inOrder(root, ans) {
  if (!root) return;

  //left
  inOrder(root.left, ans);
  //visit
  ans.push(root.val);
  //right
  inOrder(root.right, ans);
}
function solve(l, r, ans) {
  //base case
  if (l > r) return null;

  let mid = l + Math.floor((r - l) / 2);
  let root = new TreeNode(ans[mid]); // making mid root
  root.left = solve(l, mid - 1, ans);
  root.right = solve(mid + 1, r, ans);
  return root;
}

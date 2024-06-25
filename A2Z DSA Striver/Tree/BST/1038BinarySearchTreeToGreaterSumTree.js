/* 1038. Binary Search Tree to Greater Sum Tree
25 June 2024 Leetcode POTD, Binary Search Tree.

Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
*/

/* We need greater value, so we can go right first and then lef
so do Inorder Traversal Recursively and do sum and change that
value to root
TC: O(n), SC: O(1), recursion stack space O(H)
*/
var bstToGst = function(root) {
  let sum = [0];
  solve(root,sum);
  return root;
};
function solve(root, sum){
  //base case
  if(!root) return ;

  //right 
  solve(root.right, sum);
  sum[0] += root.val;
  root.val = sum[0];
  //left
  solve(root.left,sum);
}

/*Method 2- use of Iterative InOrder in reverse order
right -> node -> left. as we want greater value
TC: O(n), SC: O(n)+O(H) recursion stack space
*/
var bstToGst = function(root) {
  if(!root) return;
  let stack = [];
  let curr = root;
  let sum = 0;
  while(curr || stack.length > 0){
      while(curr){
          stack.push(curr);
          curr = curr.right;
      }
      let node = stack.pop();
      sum += node.val;
      node.val = sum;
      curr = node.left;
  }    
  return root;
};
/* 98. Validate Binary Search Tree
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/
//Method 1- Maintain the Range (-Infinity to Infinity), and do the recursion and finding the range of each node TC : O(n), SC : O(n) for recursion
const isValidBST = (root) => {
  return validHelper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
function validHelper(root, min,max){
  if(root === null) return true;

  if(root.val < min || root.val > max) return false;

  return (validHelper(root.left, min, root.val-1) && validHelper(root.right, root.val+1, max));
}


//Method 2 - optimal Method use of InOrder Traversal and take a veriable prevValue just to see next value must be greater than prev Value TC : O(n), SC : O(1), just for recursion auxilary space : O(n)
const isValidBST1 = (root) => {
  let prev = null;
  const helperFunc = (root) => {
    if(root === null) return true;
    if(!helperFunc(root.left)) return false;

    if(prev !== null && prev.val >= root.val) return false;

    prev = root;

    return helperFunc(root.right);
  }

  return helperFunc(root);
}
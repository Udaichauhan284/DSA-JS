/* 623. ADd One Row To tree
Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.

Note that the root node is at depth 1.

The adding rule is:

Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's left subtree root and right subtree root.
cur's original left subtree should be the left subtree of the new left subtree root.
cur's original right subtree should be the right subtree of the new right subtree root.
If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.

Input: root = [4,2,6,3,1,5], val = 1, depth = 2
Output: [4,1,1,2,null,null,6,3,1,5]
*/
//simple question just need to follow the rules for adding the row, and need a recursion function to move in the tree and add the row.
var addOneRow = function(root, val, depth) {
  if(depth === 1){
      let newRoot = new TreeNode(val);
      newRoot.left = root;
      return newRoot;
  }
  let curr = 1;
  return add(root,val,depth,curr);
};
function add(root,val,depth,curr){
  if(root === null){
      return null;
  }
  if(curr === depth-1){ //here is have to add
      //store the current left n right node
      let leftTemp = root.left;
      let rightTemp = root.right;

      //now add create a new node and val in it.
      root.left = new TreeNode(val);
      root.right = new TreeNode(val);

      //now add previous left and right to now curr new val node
      root.left.left = leftTemp;
      root.right.right = rightTemp;

      return root;
  }
  //now traverse the left and right of tree
  root.left = add(root.left,val,depth,curr+1);
  root.right = add(root.right, val, depth,curr+1);

  return root;
}
/* 543. Diameter of Binary Tree
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
*/
 //Brute Method - find the height of left and right subtree and then find the max diameter for each node and then return it, for each node it will take : O(n^2), SC : O(1)
const diameterOfBinaryTree = (root) => {
  if(root === null) return 0;

  let diameter = {val: 0} ; //reference tyep

  const leftHeight = getHeight(root.left, diameter);
  const rightHeight = getHeight(root.right, diameter);

  let currDia = leftHeight+rightHeight;
  return Math.max(currDia, diameter.val);
}
function getHeight(root,diameter){
  if(root === null) return 0;

  const leftHeight = getHeight(root,left, diameter);
  const rightHeight = getHeight(root.right, diameter);

  diameter.val = Math.max(diameter.val, leftHeight+rightHeight);

  return 1+Math.max(leftHeight,rightHeight);
}

//Optimal Method - O(n), O(1)
const diameterOfBinaryTree1 = (root) => {
  if(root === null) return 0;

  let diameter = {val : 0}; //reference type
  calculateDiameter(root,diameter);
  return diameter.val;
}
function calculateDiameter(root,diameter){
  if(root === null) return 0;

  const leftH = calculateDiameter(root.left, diameter);
  const rightH = calculateDiameter(root.right,diameter);

  diameter.val = Math.max(diameter.val, leftH+rightH);
  return 1 + Math.max(leftH, rightH);
}
/* 105. Construct Binary Tree from Preorder and Inorder Traversal

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 //in PreOrder [Root,left,right], InOrder(Left,Root,Right)
 //TC : O(n), SC : O(n) for map, Auxi SC : O(H) for recursion
 var buildTree = function(preorder, inorder) {
  let inMap = new Map();
  inorder.forEach((value,index) => {
      inMap.set(value,index);
  });

  const root = buildTreeHelper(preorder,0,preorder.length-1,inorder,0,inorder.length-1,inMap);

  return root;
};
function buildTreeHelper(preorder,preStart,preEnd,inorder,inStart,inEnd,inMap){
  if(preStart > preEnd || inStart > inEnd){
      return null;
  } 

  const root = new TreeNode(preorder[preStart]);

  //find the index of current root in inOrder
  let inRoot = inMap.get(root.val);

  //nummber of element in left
  let numLeft = inRoot-inStart;

  //recurive call left and right
  root.left = buildTreeHelper(preorder,preStart+1,preStart+numLeft, inorder,inStart,inRoot-1,inMap);

  root.right = buildTreeHelper(preorder,preStart+numLeft+1,preEnd,inorder,inRoot+1,inEnd,inMap);

  return root;
}
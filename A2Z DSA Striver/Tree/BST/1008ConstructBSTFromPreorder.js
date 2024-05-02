/* 1008.Construct Biinary Sarch Tree from Preorder Traversal.
Input: preorder = [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
*/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const bstFromPreorder = (preorder) => {
  let i = [0];
  return buildTree(preorder, i, Number.MAX_SAFE_INTEGER);
};
function buildTree(preorder, i, max) {
  if (i[0] === preorder.length || preorder[i[0]] > max) {
    return null;
  }

  let root = new TreeNode(preorder[i[0]++]);
  root.left = buildTree(preorder,i,root.val);
  root.right = buildTree(preorder,i,max);
  return root;
}

/* 106. Construct Binary Tree from Inorder and Postorder Traversal
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
*/
//TC : O(n)+O(logn) for map, SC : O(n)
var buildTree = function (inorder, postorder) {
  if (inorder.length !== postorder.length) return null;

  let inMap = new Map();

  inorder.forEach((value, index) => {
    inMap.set(value, index);
  });

  return buildTreeHelper(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1,
    inMap
  );
};
function buildTreeHelper(
  inorder,
  inStart,
  inEnd,
  postorder,
  postStart,
  postEnd,
  inMap
) {
  if (inStart > inEnd || postStart > postEnd) {
    return null;
  }

  const root = new TreeNode(postorder[postEnd]);
  const inRoot = inMap.get(root.val);
  const numLeft = inRoot - inStart;

  root.left = buildTreeHelper(
    inorder,
    inStart,
    inRoot - 1,
    postorder,
    postStart,
    postStart + numLeft - 1,
    inMap
  );

  root.right = buildTreeHelper(
    inorder,
    inRoot + 1,
    inEnd,
    postorder,
    postStart + numLeft,
    postEnd - 1,
    inMap
  );

  return root;
}

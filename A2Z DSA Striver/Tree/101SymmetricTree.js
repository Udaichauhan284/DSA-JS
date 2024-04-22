/* 101 Symmetric Tree
root = [1,2,2,3,4,4,3]
o/p: true

root: [1,2,2,null,3,null,3]
o/p: false
*/
//there is mirror, so root.left mustbe equal to root.right and vice versa. TC : O(n), SC:O(1)
var isSymmetric = function(root) {
  if(!root) return true;

  return checkSymmetric(root.left,root.right);
};
function checkSymmetric(root1, root2){
  //check if either subtree is null, if one subtree is null, other should be null for symmetrix, if yes then true else return false.
  if(root1 === null || root2 === null){
      return root1 === root2;
  }

  return (root1.val === root2.val && 
  checkSymmetric(root1.left, root2.right) &&
  checkSymmetric(root1.right, root2.left)
  );
}
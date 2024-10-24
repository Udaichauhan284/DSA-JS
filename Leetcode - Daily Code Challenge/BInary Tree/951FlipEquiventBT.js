/*951 Flip Equivalent Binary Trees
24 Oct 2024, Leetcode POTD, Binary Tree, Recursion

Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.
*/

/*In this we use recursion, first we check root1.left to root2.left
and root1.right to root2.rightm and then we check for in case of flip
so no need to flip it, just check root1.left to root2.right and 
root1.right to root2.left TC: O(4*n), SC: O(depth of tree)~O(n)
*/
var flipEquiv = function (root1, root2) {
  //base case, if both root are nulls, return true
  if (root1 === null && root2 === null) return true;
  //if anyof one is null, means no similarity, no flip check
  if (root1 === null || root2 === null) return false;

  //now check the values for root if yes, move forward
  if (root1.val === root2.val) {
    //first check simple, without flip
    let withoutFlip =
      flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    let withFlip =
      flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

    //if anyone return true, measn true
    return withoutFlip || withFlip;
  }
  return false;
};

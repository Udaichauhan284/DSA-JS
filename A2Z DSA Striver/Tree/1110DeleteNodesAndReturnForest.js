/* 1110. Delete Nodes And Return Forest
17 July 2024, Leetcode POTD, Binary Array, Array, DFS

Given the root of a binary tree, each node in the tree has a distinct value.
After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
Return the roots of the trees in the remaining forest. You may return the result in any order.

Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]
*/

/*IN this if we use BFS, then before reaching the child, we will delete
the parent node, then if we need to delete the child, not able to reach
it then. SO best to use DFS, first reach down and then check for node
val in to_delete, if present in arr or not, if yes, add its left and 
right child in result array. then return null. after this also check 
for root val, is root not present in todelete, if not, add in result 
arr.
TC: O(H) ~ O(n), SC: O(n)for result + O(n) for auxilary stack space
other wise O(1).
*/
var delNodes = function(root, to_delete) {
  let result = []; //for ans
  //calling the delete function
  deleteHelper(root, to_delete, result);

  //now check, if root val is not present in to_delete arr
  if(!(to_delete.includes(root.val))){
      //if not present in arr, so add in result arr
      result.push(root);
  }
  return result;
};
const deleteHelper = (root, to_delete, result) => {
  if(!root){
      return null;
  }

  //run the deleteHelper function, for left and right
  root.left = deleteHelper(root.left, to_delete, result);
  root.right = deleteHelper(root.right, to_delete, result);

  //now on that root, check is that present in arr
  if(to_delete.includes(root.val)){
      //if present , then we need to delete, before delete, check 
      //for left and right child
      if(root.left !== null){
          //add in result
          result.push(root.left);
      }
      if(root.right !== null){
          result.push(root.right);
      }

      //otherwise return null, for deleting the current node
      return null;
  }else{
      //if not match, simple return the root
      return root;
  }
}
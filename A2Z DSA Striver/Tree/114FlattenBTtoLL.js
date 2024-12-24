/* 114. Flatten Binary Tree to Linked List.
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
*/

//Recrusion Method - TC : O(n), SC : O(n) for recrusion
const flatten = (root) => {
  let head = null;

  const preOrder = (root) => {
    if(root.right) preOrder(root.right);
    if(root.left) preOrder(root.left);

    //now change the right and left
    root.right = head;
    root.left = null;
    head = root;
  }

  if(root === null) return ;
  preOrder(root);
}


//or
class Solution {
  // Function to flatten the binary tree into linked list.
  //IN rhis we use Morris Traversal TC: O(n), SC: O(1)
  flatten(root) {
      // your code here
      while(root){
          if(!root.left){
              root = root.right;
          }
          else{
              let curr = root.left;
              while(curr.right){ //go to the right most of left child
                  curr = curr.right;
              }
              //now point currRight to root right
              curr.right = root.right;
              //now root right become root.left
              root.right = root.left;
              root.left = null;
              root = root.right;
          }
      }
  }
}
/* 145 Binary Tree PostOrder Traversal
25 Augusr 2024, Leetcode POTD

Input: root = [1,null,2,3]
Output: [3,2,1]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*Solving on 25 August 2024, leetcode POTD
Method 1- use of Recursiove method, take a help of helper func
PostOrder means -> Left, Right, Root.val
*/
const postorderTraversal = (root) => {
  let ans = [];
  if(root === null) return ans;

  //call the recursive function
  helperFunc(root, ans);
  return ans;
}
function helperFunc(root, ans){
  if(root === null) return;

  helperFunc(root.left, ans);
  helperFunc(root.right, ans);
  ans.push(root.val);
}


/*25 august 2024, 
Method 2- use of iterative method, use of 2 stack, in s1 push
the root, then while loop on st1 and take out from st1 to push
in st2, then chech for left and right push in stack1, at last
from st2 pop it out and push in ans; TC: O(n), SC: O(2n)
*/
const postOrder = (root) => {
  const ans = [];
  if(root === null){
    return ans;
  }

  const st1 = [];
  const st2 = [];
  st1.push(root);
  while(st1.length > 0){
    let node = st1.pop();
    st2.push(node); // push the node in stack 2

    //now check for node's left and right
    if(node.left){
      st1.push(node.left);
    } 
    if(node.right){
      st2.push(node.right);
    }
  }
  //now take out from st2 stack
  while(st2.length > 0){
    let node = st2.pop();
    ans.push(node.val);
  }
  return ans;
}


/*25 August 2024
Method 3- use of only one stack, use of curr = root and temp for handling
the right.
TC: O(n), SC: O(n)
*/
var postorderTraversal1 = function(root) {
  const ans = [];
  if(root === null) return ans;
  
  const st = [];
  let curr = root;
  while(st.length > 0 || curr !== null){
      if(curr !== null){
          st.push(curr);
          curr = curr.left;
      }else {
          let temp = st[st.length-1].right;
          if(temp === null){
              //agr right null hai, to curr one ans mai push kr do
              temp = st.pop();
              ans.push(temp.val);
              while(st.length !== 0 && temp === st[st.length-1].right){
                  temp = st.pop();
                  ans.push(temp.val);
              }
          }else{
              curr = temp; //agr null nhi hai, right mai kuch hai, tab
              //curr mai vo right one daal do.
          }
      }
  }
  return ans;
};
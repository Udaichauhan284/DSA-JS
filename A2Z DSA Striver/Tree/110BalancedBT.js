/* 110. Balance Binary tree
Input: root = [3,9,20,null,null,15,7]
Output: true

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Balance Bt = height(left) - height(right) <= 1
*/
//Brute Method, find the leftHeight and right Height for each node, and see if the difference between them <= 1, true balanced, false, not balanced. for finding the height of each node , we travsere the. tree TC : O(n^2), SC : O(1) (n) for recrusive stack space
var isBalanced = function(root) {
  if(root === null) return true; //balanced

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if(Math.abs(leftHeight - rightHeight) <=1 && (isBalanced(root.left)) && (isBalanced(root.right))) return true;

  return false;
};
function getHeight(root){
  if(root === null) return 0;

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  //return the max height of left and right +1 foc curr node
  return Math.max(leftHeight, rightHeight)+1;
}

//Method 2-compute the height of left and right subtree, by going Bottom-Up approach, and bottomUp approach is done by PostPorder (left,right,root) and this also know as DFS. in dfs function check for left and right one, also return the left and right height , to check is it balance or not TC : O(n), SC : O(1)
const isBalanced1 = (root) => {
  return dfs(root) !== -1;

  //means dfs(root) === 1, return true balanced
  //dfs(root) === -1, return false, unbalance
}
function dfs(root){
  if(root === null) return 0;

  const leftHeight = dfs(root.left);
  if(leftHeight === -1) return -1;

  const rightHeight = dfs(root.right);
  if(rightHeight === -1) return -1;

  if(Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight)+1;
}
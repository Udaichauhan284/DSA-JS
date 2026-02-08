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



//FROM 8 FEB 2026, Leetcode POTD
/*Method 1, in this we can use the recusion, which can tell us
the height of subtree and also check is left and right is balance
or not.
TC: O(n^2), suppose we need to traverse over linear binary tree
so for sum of height n*(n+1)/2, SC: O(n) for recursion stack space.
*/
var isBalanced = function(root) {
    if(root === null) return true;

    let leftH = height(root.left);
    let rightH = height(root.right);

    //now check the difference between
    if(Math.abs(leftH-rightH) > 1) return false;

    //now check if left and right is balance or not
    return isBalanced(root.left) && isBalanced(root.right);
};
function height(node){
    if(node === null) return 0;

    let lH = height(node.left);
    let rH = height(node.right);

    //return the maxHeight from that node to its subtree
    return Math.max(lH,rH)+1;
}


/*Method 2, in this we find the height by going till bottom 
and check if we get balance or not.
TC: O(n), SC: O(1) n just for recursion stack 
*/
var isBalanced = function(root) {
    return dfs(root) !== -1;
};
function dfs(root){
    if(root === null) return 0; //balance;

    let lH = dfs(root.left);
    //now early check
    if(lH === -1) return -1;

    let rH = dfs(root.right);
    //now early check
    if(rH === -1) return -1;

    //now check the balance by checking the abs difference
    if(Math.abs(lH-rH) > 1) return -1;

    return Math.max(lH, rH)+1;
}
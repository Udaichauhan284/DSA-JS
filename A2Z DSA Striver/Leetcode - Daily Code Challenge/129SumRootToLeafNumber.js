/* 129 Sum Root ro leaf numbers
ex: root : [1,2,3], o/p: 25 [12+13]
*/
class TreeNode{
  constructor(root,left,right){
    this.val = (val === undefined) ? 0 : val;
    this.left = (val === undefined) ? null : left;
    this.right = (val === undefined) ? null : right;
  }
}

//in this we take a currNode = 0, for finding the currNode from root to leaf node currNode = currNode*10+root.val, traverse the left and right of tree.
const sumNumbers = (root) => {
  if(root.left === null && root.right === null){
    return root.val;
  }
  //recursion helper function for getting the sum of root to leaf node
  return solve(root, 0); //root, currNode 
}
function solve(root, curr){
  //base condition
  if(root === null){
    return 0;
  }

  //lets find the curr
  curr = curr*10 + root.val;

  //leaf node, return the curr till that leaf
  if(root.left === null && root.right === null){
    return curr;
  }

  //traverse the left and right of tree
  let left = solve(root.left,curr);
  let right = solve(root.right,curr);

  return left+right;
}
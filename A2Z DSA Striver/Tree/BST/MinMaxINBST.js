/* Find The min and max in BST
min will be left most node and max will be right most node in BST
*/
function findMin(root){
  if(root === null) return null;

  let curr = root;
  while(curr.left !== null){
    curr = curr.left;
  }
  return curr.data;
}

function findMax(root){
  if(root === null) return null;

  let curr = root;
  while(curr.right !== null){
    curr = curr.right;
  }
  return curr.data;
}
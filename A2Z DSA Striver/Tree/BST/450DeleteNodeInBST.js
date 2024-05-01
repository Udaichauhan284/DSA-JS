/* 450. Delete Node in a BST
//Need to search the element and then find the min value in right and replace that with particular key and call deleteNode again TC : O(Height of Tree), SC : O(1)
*/
const deleteNode = (root,key) => {
  if(root === null) return root;

  if(key < root.val){
    root.left = deleteNode(root.left,key);
  }
  else if(key > root.val){
    root.right = deleteNode(root.right,key);
  }
  else{
    if(root.left === null){
      return root.right;
    }
    else if (root.right === null){
      return root.left;
    }
    root.val = minValue(root.right);
    root.right = deleteNode(root.right,root.val);
  }
  return root;
}
function minValue(root){
  let minV = root.val;
  while(root.left !== null){
    minV = root.left.val;
    root = root.left;
  }
  return minV;
}
/* 701. Insert into a Binary Search Tree
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
*/
class TreeNode {
  constructor(val,left,right){
    this.val = (val === undefined) ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const insertIntoBST = (root,val) =>{
  const node = new TreeNode(val);
  if(root === null){
    root = node;
    return root;
  }
  let curr = root;
  while(true){
    if(val < curr.data){
      if(curr.left === null){
        curr.left = node;
        break;
      }
      curr = curr.left;
    }
    else{
      if(curr.right === null){
        curr.right = node;
        break;
      }
      curr = curr.right;
    }
  }
  return root;
}
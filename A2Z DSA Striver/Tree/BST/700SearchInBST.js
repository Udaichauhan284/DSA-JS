/* 700 Search in a Binary Search Tree
root = [4,2,7,1,3] val = 2;
o/p: [2,1,3]
*/
const searchBST = (root,val) => {
  while(root !== null && root.val !== val){
    root = val < root.val ? root.left : root.right;
  }
  if(root) return root;
  else return null;
}
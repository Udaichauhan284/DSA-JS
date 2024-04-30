/* Floor value in BST
find the biggest node in BST which is just smaller than the key
if key is 7 so ans will be 6
*/
function floorInBST(root,key){
  let floor = -1;
  if(root.val === key){
    floor = root.val;
    return floor;
  }
  if(key > root.val){
    floor = root.val;
    root = root.right;
  }else{
    root = root.left;
  }
  return floor;
}
/* Inorder Succesor in BST
this quest is same as ceil of BST, just here we need to find the just greater value than given key.
*/
const inorderSuccessor = (root,key) => {
  let successor = null;
  while(root){
    if(key >= root.val){
      root = root.right
    }else{
      successor = root.val;
      root = root.left;
    }
  }
  return successor;
}
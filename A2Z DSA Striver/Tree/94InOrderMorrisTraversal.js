/* 94. Inorder Traversal using Morris Traversal with use any extra space
TC : O(n), SC : O(1)
*/
const inOrder = (root) => {
  let ans = [];
  while(root){
    //if left subtree doesn't exists
    if(!root.left){
      ans.push(root.val);
      root = root.right;
    }
    else{
      //left exits
      //left subtree not traversed
      let curr = root.left;
      while(curr.right && curr.rigjt !== null){
        curr = curr.right;
      }
      if(curr.right === null){
        curr.right = root;
        root = root.left;
      }
      else{
        //already traversed
        curr.right = null; //link breaking
        ans.push(root.val);
        root = root.right;
      }
    }
  }
  return ans;
}
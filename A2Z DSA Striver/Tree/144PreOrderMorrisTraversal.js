/* 144. PreOrder Traversal (Root,left,right) - by Morris Traversal, where just we step up the link
Morris Traversal of PreOrder (Root,left,right) TC  O(n), SC : O(1), 2 condition if left subtree dosenot exists, write the node value and move to right and if exist so check if that left subtree traversed or not.
*/
const preOrder = (root) => {
  let ans = [];
  while(root){
    //if left not there
    if(!root.left){
      ans.push(root.val);
      root = root.right; //move to right
    }else{
      //if left present
      //now see if that not already traversed
      let curr = root.left;
      while(curr.right && curr.right !== root){
        curr = curr.right;
      }
      if(curr.right === null){
        ans.push(root.val); // right the left node value
        curr.right = root; //setup he link
        root = root.left; // move the left
      }else{
        //alredy exist
        curr.right = null; //link breaking
        root = root.right;
      }
    }
  }
  return ans;
}
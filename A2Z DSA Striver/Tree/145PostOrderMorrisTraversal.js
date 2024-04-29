/* 145. Binary Tree PostOrder Traversal
root = [1,null,2,3]
o/p: [3,2,1]
 //Same Morris Traversal, Post Order - Left,Right, Root - reverse it Root,RIght,Left, so this is same as PreOrder, just traverse in right subtree, check for right tree
 TC: O(n), SC : O(1)
*/ 
const postOrder = (root) => {
  let ans = [];
  while(root){
    //if right tree not exists, write the root val and move to left side
    if(!root.right){
      ans.push(root.val);
      root = root.left;
    }else{
      //if tree exist, now check it not traversed alreadu, store the value in ans and make the link from lef ro root and move to right side
      let curr = root.right;
      while(curr.left && curr.right !== null){
        curr = curr.left;
      }
      if(curr.left === null){
        ans.push(root.val);
        curr.left = root;
        root = root.right;
      }else{
        //right already traversed
        curr.left = null;
        curr = curr.left;
      }
    }
  }
  return ans.reverse();
}
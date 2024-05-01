/* 230 Kth Smallest Element BST
root = [3,1,4,null,2], k=1
o/p: 1
*/
//Brute Method - use of recursive Inorder, in this we able to find the kth element TC : O(n), SC : O(n) for recursion
const kthSmallest = (root,k) => {
  let ans = [];
  inOrder(root,ans);
  return ans[k-1]; //retruning the kth smallest in ans array, where inOrder stores
}
function inOrder(root,arr){
  if(root === null){
    return root;
  }

  inOrder(root.left,arr);
  arr.push(root.val);
  inOrder(root.right,arr);
}

//Optimal ethod - by Morris Traversl Inorder TC : O(n), SC : O(1)
const kthSmallestMorris = (root,k) => {
  let kth = 0;
  let count = 0;
  while(root){
    //if left not exist
    if(!root.left){
      count++;
      if(count === k){
        kth = root.val;
      }
      root = root.right;
    }else{
      //left exist, but left not traversaed
      let curr = root.left;
      while(curr.right && curr.right !== root){
        curr = curr.right;
      }
      if(curr.right === null){
        curr.right = root;
        root = root.left;
      }else{
        //already traversed
        //break the link
        curr.right = null;
        count++;
        if(count === k){
          kth = root.val;
        }
        root = root.right;
      }
    }
  }
  return kth;
}
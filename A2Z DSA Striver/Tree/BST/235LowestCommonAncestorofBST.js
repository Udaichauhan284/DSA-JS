/* 235. Lowest Common Ancestor of a Binary Search Tree
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
*/
//Recursive Method 1- TC : O(n), SC : O(H)
const lca = (root,p,q) => {
  if(root === null || root === p || root === q){
    return root;
  }
  let left = lca(root.left,p,q);
  let right = lca(root.right,p,q);

  if(left === null){
    return right;
  }else if (right === null){
    return left;
  }else{
    return root;
  }
}

//Recursive Method 2 - TC : O(n), SC : O(n)
const lca1 = (root,p,q) => {
  if(root === null || root === q || root === p){
    return root;
  }
  if(root.val < p.val && root.val < q.val){
    return lca1(root.right,p,q);
  }
  if(root.val > p.val && root.val > q.val){
    return lca1(root.left,p,q);
  }
  return root;
}

//Iterative Method - TC: O(n), SC : O(1)
const lca2 = (root,p,q) => {
  if(root === null || root === q || root === p){
    return root;
  }
  while(root){
    if(root.val < p.val && root.val < q.val){
      root = root.right;
    }else if (root.val > p.val && root.val > q.val){
      root = root.left;
    }else {
      break;
    }
  }
  return root;
}
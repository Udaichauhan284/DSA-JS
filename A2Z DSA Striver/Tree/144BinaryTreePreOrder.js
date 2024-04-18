/* 144. Binary Tree Preorder Traversal
root = [1,null,2,3]
o/p: [1,2,3]
Preorder measn [root, left,right]
*/
//Approah 1 - use of recursive method TC : O(n), SC :O(n) recrusiove space
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const preOrderTraversal = (root) => {
  const ans = [];
  if (!root) {
    return ans;
  }

  helperFunc(root, ans);
  return ans;
};
function helperFunc(root, ans) {
  if (root === null) {
    return;
  }

  //preOrder [root,left,right]
  ans.push(root.val);
  helperFunc(root.left, ans);
  helperFunc(root.right,ans);
};

//Approach 2. use of Iterative method - just the stack, and push the root and then traverse the stack, pop the node and push in ans node val, and then push right first than left, so that left val on top
const preOrderTraversal1 = (root) => {
  let ans = [];
  if(!root){
    return ans;
  }

  const st = [];
  st.push(root);
  while(st.length > 0){
    const node = st.pop();
    ans.push(node.val);

    if(node.right){
      st.push(node.right);
    }
    if(node.left){
      st.push(node.left);
    }
  }
  return ans;
}

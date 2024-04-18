/* 94. Binary Tree Inorder Traversal
Input: root = [1,null,2,3]
Output: [1,3,2]

Inorder measn - [left,root,right]
*/
//Approach 1. use of Recsuion
const inOrderTraversal = (root) => {
  const ans = [];
  if(!root) return ans;

  helperFunc(root,ans);
  return ans;
}
function helperFunc(root,ans){
  if(!root) return;

  helperFunc(root.left, ans); //left
  ans.push(root.val); //root
  helperFunc(root.right,ans); //right
}

//Approach 2. iterative method use of stack and curr, move the curr to leftmost and start pushing it into st and then pop out the value and push into ans, then move to right.
const inOrderTraversal1 = (root) => {
  const ans = [];
  if(!root) return ans;

  const st = [];
  let curr = root;
  while(curr || st.length > 0){
    //travser to the left most node
    while(curr){
      st.push(curr);
      curr = curr.left;
    }

    curr = st.pop(); //left most value 
    ans.push(curr.val); //pushing the left most value in ans arr

    //move to right
    curr = curr.right;
  }
  return ans;
}
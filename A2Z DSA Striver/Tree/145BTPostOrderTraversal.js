/* 145. Binary Postorder Traversal
post order travsersal means [left,right,root]
Input: root = [1,null,2,3]
Output: [3,2,1]
*/
//Approach 1. use of recrusion TC : O(n), SC : O(n)
const postOrderTraversal = (root) => {
  const ans = [];
  if (!root) return ans;

  helperFunc(root, ans);
  return ans;
};
function helperFunc(root, ans) {
  if (!root) return;

  //post order means left,right,root
  helperFunc(root.left, ans); //left
  helperFunc(root.right, ans); //right
  ans.push(root.val); //root
}

//Approach 2- use of Iterative method , use of 2 stack TC : O(2n), O(2n);
const postOrderTraversal1 = (root) => {
  const ans = [];
  if (!root) return ans;

  const s1 = [];
  const s2 = [];

  s1.push(root); //first push the root into st1;
  while (s1.length > 0) {
    const node = s1.pop();
    s2.push(node); //take out from stack 1 and push into stack 2

    if (node.left) s1.push(node.left);
    if (node.right) s1.push(node.right);
  }
  while (s2.length > 0) {
    //now from above while loop value are in s2, nor push into ans arr
    ans.push(s2.pop().val);
  }
  return ans;
};

//Approach 3 - use of Iterative method with 1 stack only TC : O(n), SC : O(n)
const postOrderTraversal2 = (root) => {
  const ans = [];
  if (!root) return ans;

  const st = [];
  let curr = root;
  while (curr !== null || st.length !== 0) {
    if (curr !== null) {
      st.push(curr);
      curr = curr.left;
    } else {
      let temp = st[st.length - 1].right;
      if (temp === null) {
        temp = st.pop();
        ans.push(temp.val);

        while (st.length !== 0 && temp === st[st.length - 1].right) {
          temp = st.pop();
          ans.push(temp.val);
        }
      } else {
        curr = temp;
      }
    }
  }
  return ans;
};

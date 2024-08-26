/* 590 N-ary Tree Postorder Traversal
26 August 2024, Leetcode POTD, EASY

Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]

*/

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/* In this question this is saying that each level is seperated by null,
so we can use helper func and in helper func we can use for loop for traversing
the child of that curr root
TC: O(n), SC: O(n) by recursive stack space
*/
var postorder = function(root) {
  let ans = [];
  if(root === null){
      return ans;
  }
  traverse(root, ans);
  return ans;
};
function traverse(root, ans){
  if(root === null) return;

  for(let node of root.children){
      //traverse for each child now for that curr root.children
      traverse(node, ans);
  }
  //after traversing add that into ans list
  ans.push(root.val);
}

/*Method 2- use PreOrder Iterative method, just at last reverse the ans
and inside while loop, we take out from st a parent and then check if that 
null or not, if not we move to thier child and push into stack
TC: O(n), SC: O(n) for stack
*/
const postorder1 = (root) => {
  const ans = [];
  const stack = [];
  stack.push(root);
  while(stack.length > 0){
    let parent = stack.pop();
    if(!parent) continue; //measn parent === null, curr node is null
    //first push that parent value in ans
    ans.push(parent.val);
    //now iterate over parents children and push them into stack
    for(let child of parent.children){
      stack.push(child);
    }
  }
  return ans.reverse();
}
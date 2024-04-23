/* 662. Maximum Width of Binary Tree
Given the root of a binary tree, return the maximum width of the given tree.
The maximum width of a tree is the maximum width among all levels.
The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
It is guaranteed that the answer will in the range of a 32-bit signed integer.
Input: root = [1,3,2,5,3,null,9]
Output: 4
Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
*/
//Width - firstNode to lastNode in that level, so level traversal will be done, but here we just need to change the index, i=i-min min will be q[0].position, width = lastNode-firstNode+1 TC : O(n), SC : O(n)
const widthOfBinaryTree = (root) => {
  let ans = 0;
  if(!root) return ans;
  let q = [{node:root, position:0}];

  //level order
  while(q.length > 0){
    let size = q.length;
    let min = q[0].position;
    let first,last;
    for(let i=0; i<size; i++){
      let currId = q[0].position-min;
      let node = q[0].node;
      q.shift();

      if(i === 0) first = currId;
      if(i === size-1) last = currId;

      if(node.left) q.push({node: node.left, position:currId*2+1});
      if(node.right) q.push({node: node.right, position:currId*2+2});
    }
    ans = Math.max(ans,last-first+1);
  }
  return ans;
}
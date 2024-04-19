/* 102 Binary Tree Level order Traversal
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Method - iterative method, take a queue and DS for storing the level, in quese first push the root and then see if that root have left and right, push that in queue and tak eout front from queue TC : O(n), SC : O(1)
*/
const levelOrder = (root) => {
  let ans = [];
  if(!root) return ans;

  let q = []; //queue ds for storing the node at each level
  q.push(root);
  while(q.length > 0){
    let size = q.length;
    let level = [];
    for(let i=0; i<size; i++){
      let node = q.shift();
      level.push(node.val);

      if(node.left !== null) q.push(node.left);
      if(node.right !== null) q.push(node.right);
    }
    ans.push(level);
  }
  return ans;
}
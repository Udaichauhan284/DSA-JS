/* 104 Maximum Deoth of Binary tree
Input: root = [3,9,20,null,null,15,7]
Output: 3
*/
 //This can be done by doing levelOrder Traversal (Breadth First Traversal), take a queue and variable for level to count the max level tree goes and return the level.
const maxDepth = (root) => {
  if(!root) return [];
  let level = 0;
  let q = [];
  q.push(root);
  while(q.length > 0){
    let size = q.length;
    for(let i=0; i<size; i++){
      const node = q.shift(); //remove the first

      if(node.left !== null) q.push(node.left);
      if(node.right !== null) q.push(node.right);
    }
    level++;
  }
  return level;
} 
/* 103. Binary Tree Zigzag Level Order Traversal
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
*/
//THis can be solve by level order traversal, just for right to left we need to take the flag, when flag = false, put the node in res in reverse order size-i-1
var zigzagLevelOrder = function(root) {
  let ans = [];
  if(!root) return ans;
  let queue = []; //for level order
  queue.push(root); 
  let lefttoRight = true;
  while(queue.length > 0){
      let level = [];
      let size = queue.length;
      for(let i=0; i<size; i++){
          const node = queue.shift(); //take out first one
          //now check which level are you at
          const index = lefttoRight ? i : size-i-1;
          level[index] = node.val;

          if(node.left){
              queue.push(node.left);
          } 
          if(node.right){
              queue.push(node.right);
          }
      }
      lefttoRight = !lefttoRight;
      ans.push(level);
  }
  return ans;
};
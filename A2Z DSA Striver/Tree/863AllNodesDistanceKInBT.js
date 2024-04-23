/* 863. All Nodes Distance K in Binary Tree
Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
*/
 //here we have to traverse and do the level order but keep in mind here have to take consideration of parent node, for that take a map, when in queue during level order level === 2 break.
const distanceK = (root,target,k) => {
  let parent = new Map();
  let ans = [];
  addParent(root,parent); //this is a inorder traversal
  BFS(target,k,ans,parent);
  return ans;
}
//add parent is nothing just a Inorder, just before adding in map, check is there left or right present 
function addParent(root,parent){
  if(!root) return;
  if(root.left) parent.set(root.left,root);

  addParent(root.left,parent);

  if(root.right) parent.set(root.right,root);

  addParent(root.right,parent);
}

//BFS function 
function BFS(target, k, ans, parent){
  let que = [];
  que.push(target);
  let visited = new Set();
  visited.add(target.val);
  while(que.length > 0){
    let size = que.length;
    if(k === 0) break;

    for(let i=0; i<size; i++){
      let curr = que.shift();

      if(curr.left && !visited.has(curr.left.val)){
        que.push(curr.left);
        visited.add(curr.left.val);
      }
      if(curr.right && !visited.has(curr.right.val)){
        que.push(curr.right);
        visited.add(curr.right.val);
      }
      if(parent.has(curr) && !visited.has(parent.get(curr).val)){
        que.push(parent.get(curr));
        visited.add(parent.get(curr).val);
      }
    }
    k--;
  }

  //add in ans arr
  while(que.length > 0){
    let temp = que.shift();
    ans.push(temp.val);
  }
}
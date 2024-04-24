/* Minimum Time to Burn a Binary Tree from a Node/Leaf Node
TC : O(n)+O(n) ~ O(n), SC : O(n)
same findParent and doo the level traversal
*/
const timeBurnTree = (root,start) => {
  if(!root) return;

  let parent = new Map();
  let target = bfsToMapParent(root,parent,start);
  let mini = findMinTime(parent,target);
  return mini;
}
function bfsToMapParent(root,parent,start){
  let que = [];
  que.push(root);
  let res = 0;
  while(que.length > 0){
    let node = que.shift();
    if(node.val === start) res = start;

    if(node.left){
      parent.set(node.left,node);
      que.push(node.left);
    }
    if(node.right){
      parent.set(node.right,node);
      que.push(node.right);
    }
  }
  return res;
}
function findMinTime(parent,target){
  let que = [];
  let visited = new Set();
  que.push(target);
  visited.add(target,1);
  let mini = 0;
  while(que.length > 0){
    let size = que.length;
    let flag = 0;
    for(let i=0; i<size; i++){
      let node = que.shift();
      if(node.left && !visited.has(node.left)){
        flag = 1;
        visited.add(node.left,1);
        que.add(node.left);
      }
      if(node.right && !visited.has(node.right)){
        flag = 1;
        visited.add(node.right,1);
        que.add(node.right);
      }
      if(parent.has(node) && !visited.has(parent.get(node))){
        flag = 1;
        visited.add(parent.get(node),1);
        que.push(parent.get(node));
      }
    }
    if(flag === 1) mini++;
  }
  return mini;
}
/*2415. Reverse Odd Levels of Binary Tree
20 Dec 2024, Leetcode POTD, BFS, DFS
Input: root = [2,3,5,8,13,21,34]
Output: [2,5,3,8,13,21,34]
Explanation: 
The tree has only one odd level.
The nodes at level 1 are 3, 5 respectively, which are reversed and become 5, 3.
*/

/*BFS, in this, we first iterate over the lebel, and take 
out the node of each level and store into the levelNode
array, and after that we will reverse it. 
TC: O(2*n)~ O(n), SC: O(n)
*/
var reverseOddLevels = (root) => {
  let que = [];
  que.push(root);
  let level = 0;
  while(que.length > 0){
    let queLen = que.length;
    let levelNode = [];
    while(queLen--){
      let curr = que.shift();
      levelNode.push(curr);

      //now check the right and left child of curr and push into the que
      if(curr.left !== null){
        que.push(curr.left);
      }
      if(curr.right !== null){
        que.push(curr.right);
      }
    }

    //now we will reverse the levelNode 
    if(level%2 === 1){
      //odd
      let left = 0;
      let right = levelNode.length-1;
      while(left < right){
        let temp = levelNode[left].val;
        levelNode[left].val = levelNode[right].val;
        levelNode[right].val = temp;
        left++;
        right--;
      }
    }
    level++;
  }
  return root;
}

/*DFS
TC: O(n), SC: O(depth of tree) SC: O(logn)
*/
var reverseOddLevels = (root) => {
  solve(root.left, root.right, 1);
  return root;
}
function solve(LEFT, RIGHT, level){
  //base case
  if(LEFT === null || RIGHT === null){
    return;
  }
  //now swap on level 1, where we have only two nodes, which is left and right
  //child of root node
  if(level%2 === 1){
    let temp = LEFT.val;
    LEFT.val = RIGHT.val;
    RIGHT.val = temp;
  }

  //now call solve function again for futher level, where we jave multiples nodes
  solve(LEFT.left, RIGHT.right, level+1);
  solve(LEFT.right, RIGHT.left, level+1);
}
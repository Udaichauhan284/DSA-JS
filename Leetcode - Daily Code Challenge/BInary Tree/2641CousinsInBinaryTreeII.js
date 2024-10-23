/* 2641. Cousins In Binary tree II
23 Oct 2024, leetcode POTD, Binary Tree, BFS

Input: root = [5,4,9,1,10,null,7]
Output: [0,0,0,7,7,null,11]
Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 5 does not have any cousins so its sum is 0.
- Node with value 4 does not have any cousins so its sum is 0.
- Node with value 9 does not have any cousins so its sum is 0.
- Node with value 1 has a cousin with value 7 so its sum is 7.
- Node with value 10 has a cousin with value 7 so its sum is 7.
- Node with value 7 has cousins with values 1 and 10 so its sum is 11.
*/


/*IN this we use BFS first we find the level sum and store into arr
and then again we do BFS and find the cousinsSub = levelSUm-silbingS
at parentNOde, we check we have child, we add that

Steos - use BFS, in first BFS find the levelSUm
steps 2- use second BFS in this take idx = 1 and first find 
the sibSum = currNOde.left !== null ? currNode.left.val : 0
then if statement change the currNode.left.val = levelSum[i] - sibSub
TC: two pass BFS O(2 * n), SC: O(n)
*/

var replaceValueInTree = function (root) {
  if (root === null) {
      return root;
  }
  let que = [];
  que.push(root);
  let levelSum = [];
  while (que.length > 0) {
      let currSum = 0;
      let len = que.length;
      while (len--) {
          let currNode = que.shift();
          currSum += currNode.val;
          if (currNode.left !== null) {
              que.push(currNode.left);
          }
          if (currNode.right !== null) {
              que.push(currNode.right);
          }
      }
      levelSum.push(currSum);
  }
  //step2 update each node value with cousin sum
  //here que is empty we can use it again
  que.push(root);
  root.val = 0; //root has not any cousin
  let i = 1; //this start from second level, for getting levelSum
  while(que.length > 0){
      let len = que.length;
      while(len--){
          let currNode = que.shift();
          let sibSum = currNode.left !== null ? currNode.left.val : 0;
          sibSum += currNode.right !== null ? currNode.right.val : 0;

          if(currNode.left !== null){
              currNode.left.val = levelSum[i] - sibSum; 
              que.push(currNode.left);
          }
          if(currNode.right !== null){
              currNode.right.val = levelSum[i] - sibSum;
              que.push(currNode.right);
          }
      }
      i++;
  }
  return root;
};

/*In this we can do in pass, becuase in BFS when we at parentNode
we can find nextLevelSum and currLevelSum of level is root.val and 
also find the siblingSum from parentNode.
TC: O(n), SC: O(n)
*/
var replaceValueInTree = function(root) {
  let que = [];
  que.push(root);
  let levelSum = root.val;
  while(que.length > 0){
      let nextLevelSum = 0;
      let len = que.length;
      while(len--){
          let currNode = que.shift();
          currNode.val = levelSum - currNode.val; //this currNode.val have sibSum
          let sibSum = currNode.left !== null ? currNode.left.val : 0;
          sibSum += currNode.right !== null ? currNode.right.val : 0;
          if(currNode.left !== null){
              nextLevelSum += currNode.left.val;
              currNode.left.val = sibSum;
              que.push(currNode.left);
          }
          if(currNode.right !== null){
              nextLevelSum += currNode.right.val;
              currNode.right.val = sibSum;
              que.push(currNode.right);
          }
      }
      levelSum = nextLevelSum;
  }
  return root;
};
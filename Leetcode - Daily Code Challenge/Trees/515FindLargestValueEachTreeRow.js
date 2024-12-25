/*515. Find Largest Value Each Tree Row
25 Dec 2024, Leetcode POTD, Tree, BFS, DFS

Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]
*/

/*IN this i have use BFS and in each level i have find the 
maxElem, TC: O(n), SC: O(n)
*/
var largestValues = function(root) {
  let ans = [];
  if(root === null) return ans;
  let que = [];
  que.push(root);
  while(que.length > 0){
      let len = que.length;
      let currMax = -Infinity;
      while(len--){
          let currNode = que.shift();
          currMax = Math.max(currMax, currNode.val);

          if(currNode.left) que.push(currNode.left);
          if(currNode.right) que.push(currNode.right);
      }
      ans.push(currMax);
  }
  return ans;
};



/*In thid using DFS, in this we need to go for depth and in that
we need to see if we visiting firts time, so put that in result
if not, compare. TC: O(n), SC: O(n) for recursion stack
*/
var largestValues = function(root) {
  let ans = [];
  if(root === null) return ans;
  DFS(root, 0, ans);
  return ans;
};
function DFS(root, depth, ans){
  if(root === null) {
      return;
  }
  if(ans.length === depth){
      //means we are visiting this depth first time
      ans.push(root.val);
  }else{
      //we already visited so, need to compare and then puhs
      ans[depth] = Math.max(ans[depth], root.val);
  }
  //now go left and right
  DFS(root.left, depth+1, ans);
  DFS(root.right, depth+1, ans);
}
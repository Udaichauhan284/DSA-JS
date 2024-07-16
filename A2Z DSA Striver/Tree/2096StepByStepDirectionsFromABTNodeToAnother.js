/* 2096. Step-By-Step Directions From a Binary Tree Node to Another
16 July 2024, Leetcode POTD, Binary Tree

Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
Output: "UURL"
Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*As in this question we need to go Up, to access the parent, but
in tree we cant go up, so with "Naive Approach" change tree to 
graph and do BFS for shortest distance from start and end
TC: O(n)+O(n) ~ O(n)
SC: O(n)
*/
var getDirections = function(root, startValue, destValue) {
  //first we need a graph
  let graph = new Map();

  //build the graph from tree
  const buildGraph = (node, parent=null) => { //O(n)
      if(!node) return
      if(!graph.has(node.val)) graph.set(node.val, []);
      if(parent){
          graph.get(node.val).push([parent.val, "U"]);
          graph.get(parent.val).push([node.val, ""]);
      }
      if(node.left){
          graph.get(node.val).push([node.left.val, "L"]);
          buildGraph(node.left, node);
      }
      if(node.right){
          graph.get(node.val).push([node.right.val, "R"]);
          buildGraph(node.right, node);
      }
  };
  buildGraph(root);

  //BFS, for shortest distance from start to end
  const bfs = (start, end) => { //O(n)
      let queue = [];
      queue.push([start, ""])
      let visited = new Set();
      visited.add(start);
      while(queue.length > 0){
          let [node, path] = queue.shift();
          if(node === end){
              return path;
          }
          for(let [nextNode, dir] of graph.get(node)){
              if(!visited.has(nextNode)){
                  visited.add(nextNode);
                  queue.push([nextNode, path+dir]);
              }
          }
      }
  };

  return bfs(startValue, destValue);
};




/*Optimal Method - in this we need to go back to parent, so for 
that we need LCA(least common ancestor), then we need to find the
path for LCAtosrc and LCAtodest
TC: O(n), SC: O(n)
*/
//Helper LCA function
const LCA = (root, s, d) => {
  if (!root) return null;
  if (root.val === s || root.val === d) return root;

  let left = LCA(root.left, s, d);
  let right = LCA(root.right, s, d);

  if (!left) return right;
  if (!right) return left;
  return root;
}
//helper findPath function
const findPath = (lca, target, path) => {
  if(!lca){
      return false;
  }
  if(lca.val === target){
      return true;
  }

  //explore Left first
  path.push("L");
  if(findPath(lca.left, target, path)){
      return true;
  }
  //reach at last not found, revert back, pop the last one
  path.pop();
  //now explore the right
  path.push("R");
  if(findPath(lca.right, target, path)){
      return true;
  }
  path.pop();
  return false;
}
var getDirections = function(root, startValue, destValue) {
  //first we need to find the LCA
  let lca = LCA(root,startValue, destValue);
  let LCAToSrc = [];
  let LCAToDest = [];

  //findPath from LCA to start node
  findPath(lca, startValue, LCAToSrc);
  //findPath from LCA to dest node
  findPath(lca, destValue, LCAToDest);

  let result = "";
  for(let i=0; i<LCAToSrc.length; i++){ //need to change dir
  //going from start to lca, thats why U
      result += "U";
  }
  //now add path of LCAtodest
  result += LCAToDest.join("");
  return result;
};

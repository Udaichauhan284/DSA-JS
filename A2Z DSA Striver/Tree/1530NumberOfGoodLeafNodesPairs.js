/* 1530. Number of Good Leaf Nodes Pairs
18 Kuly 2024, Leetcode POTD, BInary Tree, change to graoh, BFS
You are given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.

Return the number of good leaf node pairs in the tree.

Input: root = [1,2,3,null,4], distance = 3
Output: 1
Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.

*/ 

/*First form the graph from tree, while creation of graph, count the leaf
node. then in main code, do level wie traversal BFS, till level <= dis
count the distance from two leaf node, measn we need to do BFS in forloop
of set
TC: O(n)+O(n^2) ~ O(n^2)
SC: O(n)
*/
//Make Graph helper function
const makeGraph = (root, prevNode, graph, set) => {
  if (!root) return;

  //count the leaf node and add in set
  if (root.left === null && root.right === null) {
      set.add(root);
  }

  if (prevNode !== null) {
      if (!graph.has(root)) graph.set(root, []);
      if (!graph.has(prevNode)) graph.set(prevNode, []);

      graph.get(root).push(prevNode);
      graph.get(prevNode).push(root);
  }
  makeGraph(root.left, root, graph, set);
  makeGraph(root.right, root, graph, set);
}
var countPairs = function (root, distance) {
  const graph = new Map();
  const set = new Set();

  makeGraph(root, null, graph, set); // root, prevNode
  let count = 0;

  for (let leaf of set) {
      const queue = [];
      const visited = new Set();
      queue.push([leaf, 0]);
      visited.add(leaf);

      while (queue.length > 0) {
          let [curr, level] = queue.shift();

          if (level > distance) break;

          // check this curr
          if (curr !== leaf && set.has(curr) && level <= distance) {
              count++;
          }


          if (graph.has(curr)) {
              for (let nextNode of graph.get(curr)) {
                  if (!visited.has(nextNode)) {
                      visited.add(nextNode);
                      queue.push([nextNode, level + 1]);
                  }
              }
          }
      }
  }
  return Math.floor(count / 2); // we dividing count as, count the distance b/w two node twice.
};
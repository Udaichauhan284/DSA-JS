/* 1791. FInd Center of Star Graph
27 June 2024 Leetcode POTD, Graph
There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
*/

/* WE have n vertices, so we know the edges will n-1
here we use indegree concept, as middle node, will have indegree
of n-1, so take a map put the node and degre there and iterate
over map to know the degree
TC: O(n), SC: O(n)
*/
var findCenter = function (edges) {
  let n = edges.length;
  let map = new Map();
  for (let [u, v] of edges) {
    if (map.has(u)) {
      map.set(u, (map.get(u) || 0) + 1);
    } else {
      map.set(u, 1);
    }
    if (map.has(v)) {
      map.set(v, (map.get(v) || 0) + 1);
    } else {
      map.set(v, 1);
    }
  }
  for (let [node, degree] of map) {
    if (degree === n) {
      return node;
    }
  }
  return -1;
};

/*Method 2- observation, we know, one vertice will be common in 
all the edges, so tak etwo edges and check the commmon one
TC: O(1), SC: O(1)
*/
var findCenter = function (edges) {
  let first = edges[0]; //{a,b};
  let second = edges[1]; //{c,a};
  if (first[0] === second[0] || first[0] === second[1]) {
    return first[0];
  }
  return first[1];
};

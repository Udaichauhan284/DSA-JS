/* 310 Minimum Height Trees
23 Apr 2024
Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
*/
//This is donewhy doing the Topological sort, measn for finding ans, we dont need to see for leaf node, move inward, find the central node, this central node is our ans, from where we get the mini height of tree. for finding the middle node, we need the leaf node, in indegree is 1, means we need to move inward. and find the middle node push thta in que. TC : O(V+E), SC : O(V+E)
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];

  const ans = [];
  const indegree = new Array(n).fill(0);
  const adj = new Map();

  for (const [u, v] of edges) {
    indegree[u]++;
    indegree[v]++;
    if (!adj.has(u)) adj.set(u, []);
    if (!adj.has(v)) adj.set(v, []);

    adj.get(u).push(v);
    adj.get(v).push(u);
  }

  //adding all leaf node in que, so that can remove later
  let que = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 1) que.push(i);
  }

  //BFS, till n is atmost 2
  while (n > 2) {
    let size = que.length;
    n -= size;
    for (let i = 0; i < size; i++) {
      const u = que.shift();
      for (let v of adj.get(u)) {
        indegree[v]--;
        if (indegree[v] === 1) {
          que.push(v);
        }
      }
    }
  }

  while (que.length > 0) {
    ans.push(que.shift());
  }
  return ans;
};

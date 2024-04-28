/* 834. Sum of Distance in tree
 */
//DFS for getting the ans of for root and counting the child node
//againg DFS for finding the distance TC O(n), SC : O(n)
var sumOfDistancesInTree = function (n, edges) {
  let graph = Array(n)
    .fill(0)
    .map(() => []);
  let subtreeCount = Array(n).fill(1);
  let distanceSum = Array(n).fill(0);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const postOrder = (node, parent) => {
    for (let child of graph[node]) {
      if (child === parent) continue;
      postOrder(child, node);
      subtreeCount[node] += subtreeCount[child];
      distanceSum[node] += distanceSum[child] + subtreeCount[child];
    }
  };

  const preOrder = (node, parent) => {
    for (let child of graph[node]) {
      if (child === parent) continue;
      distanceSum[child] =
        distanceSum[node] - subtreeCount[child] + (n - subtreeCount[child]);
      preOrder(child, node);
    }
  };

  postOrder(0, -1);
  preOrder(0, -1);

  return distanceSum;
};

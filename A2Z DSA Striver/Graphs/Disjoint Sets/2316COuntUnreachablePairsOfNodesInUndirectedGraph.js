/* 2316. Count Unreachable Pairs of Nodes in an Undirected Graph
Input: n = 3, edges = [[0,1],[0,2],[1,2]]
Output: 0
Explanation: There are no pairs of nodes that are unreachable from each other. Therefore, we return 0.
Example 2
Input: n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
Output: 14
Explanation: There are 14 pairs of nodes that are unreachable from each other:
[[0,1],[0,3],[0,6],[1,2],[1,3],[1,4],[1,5],[2,3],[2,6],[3,4],[3,5],[3,6],[4,6],[5,6]].
Therefore, we return 14.
*/
/*Method 1- solving by DFS, need to count the sizeofcomponent
need to implement for each node and increase the count of sizeOfComponent
formula to find the total unreacheable result += size * (n-size)
O(V+E), SC: O(V+E)
*/
var countPairs = function (n, edges) {
  let visited = Array(n).fill(false);
  let adj = Array(n)
    .fill(null)
    .map(() => []);
  //form the undirected graph
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  let remainingNodes = n;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      let sizeOfComponent = { val: 0 }; // Pass by reference
      dfsHelper(i, adj, visited, sizeOfComponent);
      result += sizeOfComponent.val * (remainingNodes - sizeOfComponent.val);
      //decrease the remaining node, for next component
      remainingNodes -= sizeOfComponent.val;
    }
  }
  return result;
};
//dfs helper function
function dfsHelper(curr, adj, visited, sizeOfComponent) {
  visited[curr] = true;
  sizeOfComponent.val++;
  for (let v of adj[curr]) {
    if (!visited[v]) {
      dfsHelper(v, adj, visited, sizeOfComponent);
    }
  }
}

//Method 2 - by BFS
var countPairs1 = function (n, edges) {
  let visited = Array(n).fill(false);
  let adj = Array(n)
    .fill(null)
    .map(() => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  let remainingNode = n;

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      let sizeOfComponent = { val: 0 };
      bfsHelper(i, adj, visited, sizeOfComponent);
      result += sizeOfComponent.val * (remainingNode - sizeOfComponent.val);
      remainingNode -= sizeOfComponent.val;
    }
  }
  return result;
};
//bfs helper
function bfsHelper(u, adj, visited, sizeOfComponent) {
  visited[u] = true;
  let queue = [];
  queue.push(u);
  sizeOfComponent.val++;
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let v of adj[curr]) {
      if (!visited[v]) {
        visited[v] = true;
        queue.push(v);
        sizeOfComponent.val++;
      }
    }
  }
}
/* Method 3 by DSU
 in this, we need to form the component, by union and then 
 we need to find the size of that componet, using Map, then i traverse on map and count the result by using the same formula,
 size * (n-size) TC: O(v+e)
 */
var countPairs = function (n, edges) {
  let parent = Array(n).fill(0);
  let rank = Array(n).fill(0);
  //set the parent to index
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }
  //form the union - component
  for (let [u, v] of edges) {
    Union(u, v, parent, rank);
  }
  //now we need size of componet, use map
  let map = new Map();
  for (let i = 0; i < n; i++) {
    let leader = find(i, parent);
    map.set(leader, (map.get(leader) || 0) + 1);
  }

  let remainingNode = n;
  let result = 0;
  //iterate over map to find the ans
  for (let [key, value] of map) {
    let sizeOfComponent = value;
    result += sizeOfComponent * (remainingNode - sizeOfComponent);
    remainingNode -= sizeOfComponent;
  }
  return result;
};
function find(x, parent) {
  if (x !== parent[x]) {
    parent[x] = find(parent[x], parent);
  }
  return parent[x];
}
function Union(x, y, parent, rank) {
  let xParent = find(x, parent);
  let yParent = find(y, parent);
  if (xParent === yParent) {
    return;
  }
  if (rank[xParent] > rank[yParent]) {
    parent[yParent] = xParent;
  } else if (rank[xParent] < rank[yParent]) {
    parent[xParent] = yParent;
  } else {
    parent[xParent] = yParent;
    rank[yParent]++;
  }
}

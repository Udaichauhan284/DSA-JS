/* 2392. Build a Matrix With Conditions

Input: k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
Output: [[3,0,0],[0,0,1],[0,2,0]]
Explanation: The diagram above shows a valid example of a matrix that satisfies all the conditions.
The row conditions are the following:
- Number 1 is in row 1, and number 2 is in row 2, so 1 is above 2 in the matrix.
- Number 3 is in row 0, and number 2 is in row 2, so 3 is above 2 in the matrix.
The column conditions are the following:
- Number 2 is in column 1, and number 1 is in column 2, so 2 is left of 1 in the matrix.
- Number 3 is in column 0, and number 2 is in column 1, so 3 is left of 2 in the matrix.
Note that there may be multiple correct answers.
*/

//TC: O(k^2)+O(k)+O(k) ~ O(k^2), SC: O(k)
var buildMatrix = function (k, rowConditions, colConditions) {
  let orderRows = topoSort(rowConditions, k);
  let orderColumns = topoSort(colConditions, k);

  // We might have found cycle. That's why topo order is empty
  if (orderRows.length === 0 || orderColumns.length === 0) return [];

  let matrix = Array.from({ length: k }, () => Array(k).fill(0));

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      if (orderRows[i] === orderColumns[j]) {
        matrix[i][j] = orderRows[i];
      }
    }
  }

  return matrix;
};
function topoSort(edges, n) {
  let adj = new Map();
  let st = [];
  let order = [];
  // 0 : not visited
  // 1 : visiting (currently in stack via some other DFS)
  // 2 : visited
  let visited = Array(n + 1).fill(0);
  let hasCycle = { value: false };

  for (let edge of edges) {
    let u = edge[0];
    let v = edge[1];
    if (!adj.has(u)) {
      adj.set(u, []);
    }
    adj.get(u).push(v);
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) {
      dfs(i, adj, visited, st, hasCycle);
      if (hasCycle.value) return []; // no ordering possible
    }
  }

  while (st.length > 0) {
    order.push(st.pop());
  }
  return order;
}
function dfs(node, adj, visited, st, hasCycle) {
  visited[node] = 1; // Mark node as visiting
  // First, visit node's children
  for (let nbr of adj.get(node) || []) {
    if (visited[nbr] === 0) {
      dfs(nbr, adj, visited, st, hasCycle);
    } else if (visited[nbr] === 1) {
      // Cycle detected
      hasCycle.value = true;
      return;
    }
  }

  visited[node] = 2; // Mark node as visited
  st.push(node); // Now node can be added
}

//Use of TopoSort for knowing the ordering Topo-by BFS- Kahn's Algo
//TC: O(K)+O(K)+O(k^2) ~ O(k^2), SC: just for result matrix: O(n^2)
var buildMatrix = function (k, rowConditions, colConditions) {
  let topoRow = topoSort(rowConditions, k);
  let topoCol = topoSort(colConditions, k);
  let matrix = Array.from({ length: k }, () => Array(k).fill(0));

  if (topoRow.length === 0 || topoCol.length === 0) {
    return [];
  }

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < k; j++) {
      if (topoRow[i] === topoCol[j]) {
        matrix[i][j] = topoRow[i]; //or topoCol[j];
      }
    }
  }
  return matrix;
};
//helper topoSort function using BFS for knowing the order
function topoSort(edges, n) {
  let graph = new Map();
  let queue = [];
  let result = [];
  let indegree = Array(n + 1).fill(0);
  let count = 0; // for cycle detection

  // Build the map
  for (let edge of edges) {
    let u = edge[0];
    let v = edge[1];
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u).push(v);
    // Increase the indegree for v
    indegree[v]++;
  }

  // Check for indegree = 0
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  // Apply BFS
  while (queue.length > 0) {
    let curr = queue.shift();
    result.push(curr);
    count++;
    for (let v of graph.get(curr) || []) {
      indegree[v]--;
      if (indegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  if (count !== n) {
    return [];
  } else {
    return result;
  }
}

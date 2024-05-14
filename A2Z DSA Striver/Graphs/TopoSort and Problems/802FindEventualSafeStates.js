/* 802 FInd Eventual Safe States.
Terminal Node measn jaha sye koi node na nikale.
Return the safe Node in ascending order.
Safe nodes measn jaha ky sare edges terminal nodes jaye.
Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Explanation: The given graph is shown above.
Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.
*/
//Method1-solve by DFS, if solving by DFS measn, we need to solve this question by Detecting the Cycle in Directed Graph by DFS, taking inrecursion array, and retruing the False one nodes, in INrecursion array. TC: O(V+E), SC: O(V) recursion
const eventualSafeNodes = (graph) => {
  let v = graph.length;
  let inRecursion = Array(v).fill(false);
  let visited = Array(v).fill(false);
  for (let i = 0; i < v; i++) {
    if (!visited[i]) {
      //call the isCycleDFS function
      isCycleDFS(graph, i, visited, inRecursion);
    }
  }
  let safeNode = [];
  for (let i = 0; i < v; i++) {
    if (!inRecursion[i]) {
      safeNode.push(i);
    }
  }
  return safeNode;
};
//DFS checking cycle function
function isCycleDFS(graph, curr, visited, inRecursion) {
  visited[curr] = true;
  inRecursion[curr] = true;
  for (let v of graph[curr]) {
    if (!visited[v] && isCycleDFS(graph, v, visited, inRecursion)) {
      return true;
    } else if (inRecursion[v] === true) {
      return true;
    }
  }
  inRecursion[curr] = false;
  return false;
}

//Method2- solve b BFS, measn we need to implement Topo Sort by BFS, (Kahn's Algo), need to maintain the indegree and safe array, mark true,which came out from the queue. TC: TC: O(v+e), SC: O(v)
var eventualSafeNodes1 = function(graph) {
  let v = graph.length;
  let queue = []; // for bfs
  let safeNode = []; // for returning the ans
  let safe = Array(v).fill(false); // for marking the node true
  let indegree = Array(v).fill(0); // Fix: Initialize indegree with 0s
  let adj = Array(v).fill(null).map(() => []);
  
  // Build adjacency list and calculate indegree
  for (let u = 0; u < v; u++) {
      for (let neighbor of graph[u]) {
          adj[neighbor].push(u);
          indegree[u]++;
      }
  }

  // Push nodes with indegree 0 to queue
  for (let i = 0; i < v; i++) {
      if (indegree[i] === 0) {
          queue.push(i);
      }
  }

  // Apply BFS
  while (queue.length > 0) {
      let curr = queue.shift();
      // Mark the node as safe
      safe[curr] = true;
      for (let neighbor of adj[curr]) {
          indegree[neighbor]--;
          if (indegree[neighbor] === 0) {
              queue.push(neighbor);
          }
      }
  }

  // Collect safe nodes
  for (let i = 0; i < v; i++) {
      if (safe[i]) {
          safeNode.push(i);
      }
  }
  return safeNode;
};


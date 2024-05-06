/*Detect cycle in an undirected graph
Given an undirected graph with V vertices labelled from 0 to V-1 and E edges, check whether it contains any cycle or not. Graph is in the form of adjacency list where adj[i] contains all the nodes ith node is having edge with.
V = 5, E = 5
adj = {{1}, {0, 2, 4}, {1, 3}, {2, 4}, {1, 3}} 
Output: 1
*/
class Solution {
  // Function to detect cycle in an undirected graph.
  detectCycleBFS(src, adj, visited) {
    visited[src] = 1;
    let queue = [];
    queue.push([src, -1]); //this for first one.
    while (queue.length > 0) {
      let [node, parent] = queue.shift();
      for (let adjacentNode of adj[node]) {
        if (!visited[adjacentNode]) {
          visited[adjacentNode] = 1;
          queue.push([adjacentNode, node]);
        } else if (parent !== adjacentNode) {
          return true;
        }
      }
    }
    return false;
  }
  isCycle(V, adj) {
    // code here
    let visited = Array(V).fill(0);
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (this.detectCycleBFS(i, adj, visited) === true) {
          return true;
        }
      }
    }
    return false;
  }
}

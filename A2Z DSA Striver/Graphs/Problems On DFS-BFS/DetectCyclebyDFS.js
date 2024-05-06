class Solution {
  isCycle(V, adj) {
    const visited = new Array(V).fill(0);
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (this.dfs(i, -1, adj, visited)) {
          return true;
        }
      }
    }
    return false;
  }

  dfs(node, parent, adj, visited) {
    visited[node] = 1;
    for (const adjacentNode of adj[node]) {
      if (!visited[adjacentNode]) {
        if (this.dfs(adjacentNode, node, adj, visited)) {
          return true;
        }
      } else if (adjacentNode !== parent) {
        return true;
      }
    }
    return false;
  }
}

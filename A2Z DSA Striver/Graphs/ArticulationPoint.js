/* Articulation Point - 1
Given an undirected connected graph with V vertices and adjacency list adj. You are required to find all the vertices removing which (and edges through it) disconnects the graph into 2 or more components and return it in sorted manner.
Note: Indexing is zero-based i.e nodes numbering from (0 to V-1). There might be loops present in the graph.


*/
//This is same as Bridges in Graph, just need to modify DFS, mark and parent and time
//TC: O(V+2E)+O(V) ~ O(V+2E), SC: O(3V)
class Solution {
  // Function to find articulation points in an undirected graph.
  articulationPoints(V, adj) {
    // Code here
    let visited = Array(V).fill(false);
    let time = Array(V).fill(0);
    let low = Array(V).fill(0);
    let mark = Array(V).fill(0);
    let timer = [1];
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        this.dfs(i, -1, visited, time, low, mark, timer, adj);
      }
    }
    let ans = [];
    for (let i = 0; i < V; i++) {
      if (mark[i] === 1) {
        ans.push(i);
      }
    }
    //check the size of ans
    if (ans.length === 0) return [-1];
    return ans;
  }

  dfs(node, parent, visited, time, low, mark, timer, adj) {
    visited[node] = true;
    time[node] = timer[0];
    low[node] = timer[0];
    timer[0]++;
    let child = 0;
    for (let curr of adj[node]) {
      if (curr === parent) continue;
      if (!visited[curr]) {
        this.dfs(curr, node, visited, time, low, mark, timer, adj);
        low[node] = Math.min(low[node], low[curr]);
        if (low[curr] >= time[node] && parent !== -1) {
          mark[node] = 1;
        }
        child++;
      } else {
        low[node] = Math.min(low[node], time[curr]);
      }
    }
    if (child > 1 && parent === -1) {
      mark[node] = 1;
    }
  }
}

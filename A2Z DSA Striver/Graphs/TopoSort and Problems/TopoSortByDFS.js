/* Topo Sort by DFS
topo sort means, first parent will come and then child one will come.

*/
class Solution {
  //Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
    // code here
    let visited = [false];
    let stackAns = [];
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        this.DFSUtil(adj, i, visited, stackAns);
      }
    }
    let result = [];
    while (stackAns.length > 0) {
      result.push(stackAns.pop());
    }
    return result;
  }
  DFSUtil(adj, source, visited, stackAns) {
    visited[source] = true;
    for (let v of adj[source]) {
      if (!visited[v]) {
        this.DFSUtil(adj, v, visited, stackAns);
      }
    }
    stackAns.push(source);
  }
}

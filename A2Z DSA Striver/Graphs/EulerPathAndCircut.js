/*An Eulerian Path is a path in graph that visits every edge exactly once. An Eulerian Circuit is an Eulerian Path which starts and ends on the same vertex. Given an undirected graph with V nodes, and E edges, with adjacency list adj, return 2 if the graph contains an eulerian circuit, else if the graph contains an eulerian path, return 1, otherwise, return 0.
*/
class Solution {
  DFS(adj,visited,u){
      visited[u] = true;
      for(let v of adj[u]){
          if(!visited[v]){
              this.DFS(adj,visited,v);
          }
      }
  }
  isConnected(V, adj){
      let nonZeroDegree = [-1];
      let visited = Array(V).fill(false);
      for(let i=0; i<V; i++){
          if(adj[i].length !== 0){
              nonZeroDegree[0] = i;
              break;
          }
      }
      //class dfs for that nonZeroDegree vertice
      this.DFS(adj,visited,nonZeroDegree[0]);
      for(let i=0; i<V; i++){
          if(visited[i] === false && adj[i].length > 0){
              return false;
          }
      }
      return true;
  }
  isEulerCircuit(V,Adj){
      //code here
      //1.check non-zero degree's vertice are connected or not
      if(this.isConnected(V,Adj) === false){
          return 0
      }
      let oddDegreeCount = 0;
      for(let i=0; i<V; i++){
          if(Adj[i].length % 2 !== 0){
              oddDegreeCount++;
          }
      }
      if(oddDegreeCount > 2){
          return 0;
      }
      if(oddDegreeCount === 2){
          return 1; //Euler Path
      }
      return 2; //euliear circut
  }
}
/* Kahn's Algo is just Topo SOrt using BFS
in this we just maintain the indegree and increase the indegree and when indegree will 0  push in queue of BFS
*/
class Solution {
  //Function to return list containing vertices in Topological order.
  //Kahn's Algo (Topo Sort using BFS) in this we just need to maintain the indegree
  topoSort(V, adj) {
    // code here
    let indegree = Array(V).fill(0);
    let result = [];
    let queue = []; //for BFS

    //fill indegree of Node
    for (let u = 0; u < V; u++) {
      for (let v of adj[u]) {
        indegree[v]++;
      }
    }

    //fill the queue based on indegree === 0
    for (let i = 0; i < V; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
      }
    }

    //apply BFS
    while (queue.length > 0) {
      let curr = queue.shift();
      result.push(curr);
      for (let v of adj[curr]) {
        indegree[v]--;
        if (indegree[v] === 0) {
          queue.push(v);
        }
      }
    }
    return result;
  }
}

/* Detect the cycle in undirected cycle by BFS
this is done by Kahn's Algo.
maintain the count , apply kahn algo, and count ===v measn return false, means we traverse the whole graph and queue is empty no cycle, when cycle present we only able to traverse the graph by 1 in graph.
*/
class Solution {
  // Function to detect cycle in a directed graph.
  //Finding cycle in Graph using BFS, in this simply put the Kahn's Algo, and also maintain the count.
  isCyclic(V, adj) {
    // code here
    let indegree = Array(V).fill(0);
    let queue = []; //for BFS

    //fill the indegree
    for (let u = 0; u < V; u++) {
      for (let v of adj[u]) {
        indegree[v]++;
      }
    }

    //now fill the quueu, also increase the count based on indegree 0
    let count = 0;
    for (let i = 0; i < V; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
        count++;
      }
    }

    //apply the BFS
    while (queue.length > 0) {
      let curr = queue.shift();

      for (let v of adj[curr]) {
        indegree[v]--;
        if (indegree[v] === 0) {
          queue.push(v);
          count++;
        }
      }
    }
    //count === V measn it traverse on all the node, and queue is empty, so no cycle
    if (count === V) return false; //no cycle
    else return true;
  }
}

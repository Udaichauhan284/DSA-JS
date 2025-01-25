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

/*24 Jan 25,Method1 use of DFS, we have Directed graph and
in this we need to find the safe nodes, so basically in 
this we need to remove the nodes which are in cycle, so 
detec cycle DFS will work here, use of visited and inRecur
arr and at last those are not inRecurrsion, measn false
we will return it.
TC: O(V+E), SC: O(V)
*/
var eventualSafeNodes1 = function(graph) {
  let v = graph.length; //n nodes
  let safeNodes = []; //return ans
  let visited = Array(v).fill(false);
  let inRecursion = Array(v).fill(false);

  //now call the cycleDFS for not visited
  for(let i=0; i<v; i++){
      if(!visited[i]){
          isCycleDFS(graph, i, visited, inRecursion);
      }
  }

  //now fill the safeNode
  for(let i=0; i<v; i++){
      if(!inRecursion[i]){
          safeNodes.push(i);
      }
  }
  return safeNodes;
};
function isCycleDFS(graph, curr, visited, inRecursion){
  visited[curr] = true;
  inRecursion[curr] = true;
  for(let neighbor of graph[curr]){
      if(!visited[neighbor] && isCycleDFS(graph, neighbor, visited, inRecursion)){
          return true;
      }else if(inRecursion[neighbor] === true){
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



/*24 Jan 25, Method2, use of BSF, in this we need to detect the cycle, so for this
we can use the Topological Sort (Kahn's Algo), in this we reverse the edges to see the
indegree and while traversing over node, decrease the indegree, when indegree is zero
we add in queue, for futher. 
TC: O(V+E), SC: O(V+E) for adj graph
*/
var eventualSafeNodes2 = function(graph) {
  let v = graph.length;
  let safeNodes = []; //return ans
  let safe = Array(v).fill(false);
  let indegree = Array(v).fill(0);
  let queue = []; //for having the node of indegree 0 and for BFS
  let adj = Array.from({length: v}, () => []);

  //now fill the adj
  for(let u=0; u<v; u++){
      for(let neighbor of graph[u]){
          adj[neighbor].push(u);
          indegree[u]++;
      }
  }

  //push the indegree 0 nodes in queue
  for(let i=0; i<v; i++){
      if(indegree[i] === 0){
          queue.push(i);
      }
  }

  //now apply BFS
  let front = 0;
  while(front < queue.length){
      let curr = queue[front];
      front++;
      safe[curr] = true;
      for(let v of adj[curr]){
          indegree[v]--;
          if(indegree[v] === 0){
              queue.push(v);
          }
      }
  }

  //now add in safeNodes, those who are safe
  for(let i=0; i<v; i++){
      if(safe[i]){
          safeNodes.push(i);
      }
  }
  return safeNodes;
};


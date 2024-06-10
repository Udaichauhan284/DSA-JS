/* 1192. Critical Connections in a Network

Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.

this can be done by Bridges in Graph. which are also critical pointes in graph,
if we remove these bridegs, graph will divided into two components.
*/
/* THis is a Bridges in Graph, this is done by DFS Algo
and extra two array time and low, in low we add low time for node and 
adj node.
TC: O(v+2e)
SC: O(v+2e) + O(3v)
*/
var criticalConnections = function (n, connections) {
  let adj = Array(n)
    .fill(0)
    .map(() => []);
  for (let [u, v] of connections) {
    adj[u].push(v);
    adj[v].push(u);
  }
  let visited = Array(n).fill(false);
  let time = Array(n).fill(0);
  let low = Array(n).fill(0);
  let timer = [1];
  let bridges = []; //for ans
  dfs(0, -1, adj, visited, time, low, timer, bridges);
  return bridges;
};
function dfs(node, parent, adj, visited, time, low, timer, bridges) {
  visited[node] = true;
  time[node] = timer[0];
  low[node] = timer[0];
  timer[0]++;
  for (let curr of adj[node]) {
    if (curr === parent) continue;
    if (!visited[curr]) {
      dfs(curr, node, adj, visited, time, low, timer, bridges);
      //in low time , we add min time of curr and node
      low[node] = Math.min(low[node], low[curr]);
      if (low[curr] > time[node]) {
        bridges.push([curr, node]);
      }
    } else {
      low[node] = Math.min(low[node], low[curr]);
    }
  }
}

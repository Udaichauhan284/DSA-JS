/* 2872 Maximum Number of K-Divisible Components
21 Dec 2024, Leetcode POTD, Tree, DFS

Input: n = 5, edges = [[0,2],[1,2],[1,3],[2,4]], values = [1,8,1,4,4], k = 6
Output: 2
Explanation: We remove the edge connecting node 1 with 2. The resulting split is valid because:
- The value of the component containing nodes 1 and 3 is values[1] + values[3] = 12.
- The value of the component containing nodes 0, 2, and 4 is values[0] + values[2] + values[4] = 6.
It can be shown that no other valid split has more than 2 connected components.
*/ 
//TC: O(n+m), SC: O(n+m)
const maxKDivisibleComponents = (n, edges, values, k) => {
  //build the adjList
  let adjList = Array.from({length: n}, () => []);
  for(let [u,v] of edges){
    adjList[u].push(v);
    adjList[v].push(u);
  }
  let components = [0];
  //call the dfs
  dfs(0,-1,adj,values,components);
  return components[0];
}
function dfs(curr,parent,adj,values,components){
  let sum = 0;
  for(let neighbor of adj[curr]){
    if(neighbor !== parent){
      // Recursive DFS call for child nodes
      sum += dfs(neighbor,curr,adj,values,components);
      sum %= k;
    }
  }
  //add the curren node to sum
  sum += values[curr];

  //check if the subtree sum is divisible by k
  if(sum % k === 0){
    components[0]++;
  }
  return sum;
}
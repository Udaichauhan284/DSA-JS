/* 2192. All Ancestors of a Node in a Directed Acyclic Graph
Input: n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
Output: [[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]
Explanation:
The above diagram represents the input graph.
- Nodes 0, 1, and 2 do not have any ancestors.
- Node 3 has two ancestors 0 and 1.
- Node 4 has two ancestors 0 and 2.
- Node 5 has three ancestors 0, 1, and 3.
- Node 6 has five ancestors 0, 1, 2, 3, and 4.
- Node 7 has four ancestors 0, 1, 2, and 3.

*/

/* Better Method, use of DFS
TC: O(n*(n+m)), SC: O(n*m)
*/
var getAncestors = function(n, edges) {
  let result = Array.from({length: n}, () => []);
  let adj = Array.from({length: n}, () => []);
  for(let [u,v] of edges){
      adj[u].push(v);
  }
  for(let i=0; i<n; i++){
      let ancestor = i;
      dfs(ancestor, adj, i, result);
  }
  return result;
};
function dfs(ancestor, adj, currNode, result){
  for(let nbgr of adj[currNode]){
      if(result[nbgr].length === 0 || result[nbgr][result[nbgr].length-1] !== ancestor){
          result[nbgr].push(ancestor);
          dfs(ancestor,adj,nbgr,result);
      }
  }
}
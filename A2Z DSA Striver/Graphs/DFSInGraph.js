/* DFS in Graph
means first go to depth of graph, then move to next one
Input: V = 5 , adj = [[2,3,1] , [0], [0,4], [0], [2]]
Output: 0 2 4 3 1
Explanation: 
0 is connected to 2, 3, 1.
1 is connected to 0.
2 is connected to 0 and 4.
3 is connected to 0.
4 is connected to 2.
so starting from 0, it will go to 2 then 4,
and then 3 and 1.
Thus dfs will be 0 2 4 3 1.
*/
const dfsTraversal = (V, adj) => {
  let start = 0;
  let viisted = new Array(V).fill(false);
  let ans = [];

  dfsHelper(start, adj, viisted, ans);
  return ans;
}
function dfsHelper(start, adj, visited, ans){
  visited[start] = true;
  ans.push(start);

  //depth recursiob traversal;
  for(let node of adj[start]){
    if(!visited[node]){
      dfsHelper(node, adj, visited, ans);
    }
  }
}
console.log(dfsTraversal(5, [[2,3,1],[0],[0,4],[0],[2]]));
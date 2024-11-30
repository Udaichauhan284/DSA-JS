/*2097 Valid Arrangement of Pairs
30 Nov 2024, Leetcode POTD, 2D Array, Euler Path, DFS

Input: pairs = [[5,1],[4,5],[11,9],[9,4]]
Output: [[11,9],[9,4],[4,5],[5,1]]
Explanation:
This is a valid arrangement since endi-1 always equals starti.
end0 = 9 == 9 = start1 
end1 = 4 == 4 = start2
end2 = 5 == 5 = start3
*/

/*Approach-1 (DFS Using Stack) - Hierholzer's Algorithm to find Euler Path
this algo says, build the adj list, build the 
indegree and outdegree and then find the startNode 
using the Euleriean, and also only visit each node 
only once. TC: O(V+E), SC: O(v+E)
*/

const validArrangement = (pairs) => {
  // Build the adjacency list, and indegree and outdegree maps
  let adj = new Map();
  let indegree = {};
  let outdegree = {};
  let path = [];
  //now build the adj list
  for(let [u,v] of pairs){
    if(!adj.has(u)){
      adj.set(u, []);
    }
    adj.get(u).push(v); //u ---> v
    if(!(u in outdegree)) outdegree[u] = 0;
    if(!(v in indegree)) indegree[v] = 0;

    outdegree[u]++;
    indegree[v]++;
  }
  //now find the start node
  let startNode = pairs[0][0];
  for(let [node, _] of adj){
    let outOne = outdegree[node] || 0;
    let inOne  = indegree[node] || 0;
    if(outOne - inOne === 1){
      startNode = node;
      break;
    }
  }
  //perform the DFS
  let st = [startNode];
  let eulerPath = [];
  while(st.length > 0){
    let curr = st[st.length - 1];
    if(adj.has(curr) && adj.get(curr).length > 0){
      let neighbor = adj.get(curr).pop();
      st.push(neighbor);
    }else{
      eulerPath.push(st.pop()); //curr One
    }
  }
  // Reverse the Euler path to construct the final path
  eulerPath.reverse();
  //convert the eulre path to edge pairs
  for(let i=0; i<eulerPath.length-1; i++){
    path.push([eulerPath[i], eulerPath[i+1]]);
  }
  return path;
}
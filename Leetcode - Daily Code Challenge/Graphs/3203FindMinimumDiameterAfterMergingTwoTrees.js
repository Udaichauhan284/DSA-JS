/* 3202 Find Minimum Diameter After Merging Two Trees
24 Dec 2024, Leetcode POTD, Graphs, Tree Diameter

Input: edges1 = [[0,1],[0,2],[0,3]], edges2 = [[0,1]]

Output: 3

Explanation:

We can obtain a tree of diameter 3 by connecting node 0 from the first tree with any node from the second tree.
*/


/*IN this ques, we need to find the Tree Diameter, for diameter,
we need to use the BFS level wise in this we first take random node
and then find the farthest node and then again bfs from farthest node
now we will find the diameter. 
TC: O(V+E), SC: O(V+E)
*/
function buildAdjList(edges){
  let adj = new Map();
  for(let [u,v] of edges){
      if(!adj.has(u)) adj.set(u, []);
      if(!adj.has(v)) adj.set(v, []);
      adj.get(u).push(v);
      adj.get(v).push(u);
  }
  return adj;
}
var minimumDiameterAfterMerge = function(edges1, edges2) {
  //make the adj1 list
  let adj1 = buildAdjList(edges1);
  //now create adj2 for edges2
  let adj2 = buildAdjList(edges2);

  //now find the Diameter for both adj1 and adj2
  let d1 = findDiameter(adj1);
  let d2 = findDiameter(adj2);

  //now find the half of both, so that we can join edge to have 
  //min diameter
  let combined = (Math.ceil(d1/2) + Math.ceil(d2/2) + 1);
  return Math.max(d1, d2, combined);
};
function findDiameter(adjList){
  //first from random node
  const [farthestNode] = findFarthestNode(adjList, 0);
  //now again BFS from fathest Node, we will have other end of 
  //diameter
  const [_, diameter] = findFarthestNode(adjList, farthestNode);

  return diameter;
}
function findFarthestNode(adj, sourceNode){
  //IN this i implement BFS
  let que = [];
  let len = adj.size;
  let visited = Array(len).fill(false);
  que.push(sourceNode);
  visited[sourceNode] = true;

  let maxDistance = 0;
  let farthestNode = sourceNode;
  //now loop on queue
  while(que.length > 0){
      let queLen = que.length;
      while(queLen--){
          let currNode = que.shift();
          farthestNode = currNode; //now curr will farthest one
          for(let neighbor of adj.get(currNode) || []){
              if(!visited[neighbor]){
                  visited[neighbor] = true;
                  que.push(neighbor);
              }
          }
      }
      if(que.length > 0) maxDistance++;
  }
  return [farthestNode, maxDistance];
}
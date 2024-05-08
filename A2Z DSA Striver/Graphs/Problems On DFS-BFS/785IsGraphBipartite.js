/* 785 Is Graph Bipartite
this is solve by usiing DFS same as GFG question to check whether graph is bipartite or not.

*/
//this can be done by DFS. take two color red-1, green-0 and try to fill the color, is two adjecent node have same color return false, else true. TC: O(v+e)
var isBipartite = function (graph) {
  let nodes = graph.length;
  let color = new Array(nodes).fill(-1); //initial there will no color that i fill with -1;
  for (let i = 0; i < nodes; i++) {
    if (color[i] === -1) {
      //i will call dfs and also check what its returing
      if (checkBipartiteDFS(graph, i, color, 1) === false) {
        return false;
      }
    }
  }
  return true;
};
function checkBipartiteDFS(graph, currNode, color, currColor) {
  //fill the currNode
  color[currNode] = currColor;
  for (let v of graph[currNode]) {
    if (color[v] === color[currNode]) {
      return false;
    }

    if (color[v] === -1) {
      //not traverse yet
      let colorOfV = 1 - currColor; //1-0=1, or 1-1=0
      if (checkBipartiteDFS(graph, v, color, colorOfV) === false) {
        return false;
      }
    }
  }
  return true;
}

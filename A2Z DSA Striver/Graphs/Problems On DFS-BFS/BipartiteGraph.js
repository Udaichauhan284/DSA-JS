/* Bipartite Graph
GFG question.
bipartite graph measn when we take two color and try to paint the graph, no two node have same 
color. is yes that will known as Bipartite Graph.
Odd Cycle graphh will never Bipartite Grapgh - Point to remeber.
*/
class Solution {
  isBipartite(V, adj) {
    // Take a color array for visiting
    let color = new Array(V).fill(-1);
    // Red -1, Green -0
    for (let i = 0; i < V; i++) {
      if (color[i] === -1) {
        if (this.checkBipartiteDFS(adj, i, color, 1) === false) return false;
      }
    }
    return true;
  }

  checkBipartiteDFS(adj, currNode, color, currColor) {
    color[currNode] = currColor;

    for (let v of adj[currNode]) {
      if (color[v] === color[currNode]) {
        return false;
      }
      if (color[v] === -1) {
        // Find which color to fill
        let colorOfV = 1 - currColor;
        if (this.checkBipartiteDFS(adj, v, color, colorOfV) === false)
          return false;
      }
    }
    return true;
  }
}

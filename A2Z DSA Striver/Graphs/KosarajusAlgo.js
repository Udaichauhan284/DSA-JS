/* Strongly Connected Component | Kosaraju's Algo
Pick A and B we can move from A to B, and also B to A, so this is a SCC
THis Algo Says
1.Push elem in Stack in topo sort.
2. reverse the original graph
2. for finding SCC- stack order DFS call.
TC: O(v+e), SC: O(v+e)
*/
class Solution {
  kosaraju(arr, v, e) {
      // Step 1 - Push nodes into stack according to their finish time
      let stack = [];
      let visited = Array(v).fill(false);
      for(let i = 0; i < v; i++){
          if(!visited[i]){
              this.dfsFill(i, arr, visited, stack);
          }
      }
      
      // Step 2 - Reverse the graph
      let adjReverse = Array(v).fill(0).map(() => []);
      for(let u = 0; u < v; u++){
          for(let v of arr[u]){
              adjReverse[v].push(u);
          }
      }

      // Step 3 - Count the SCCs
      let countSCC = 0;
      visited = Array(v).fill(false);  // Reset visited array
      while(stack.length > 0){
          let node = stack.pop();  // Use pop instead of shift
          if(!visited[node]){
              this.dfsTraverse(node, adjReverse, visited);
              countSCC++;
          }
      }
      return countSCC;
  }

  dfsFill(i, arr, visited, stack) {
      visited[i] = true;
      for(let v of arr[i]){
          if(!visited[v]){  
              this.dfsFill(v, arr, visited, stack);
          }
      }
      stack.push(i);  // Push node to stack after its neighbors are visited
  }

  dfsTraverse(node, adjReverse, visited) {
      visited[node] = true;
      for(let v of adjReverse[node]){
          if(!visited[v]){
              this.dfsTraverse(v, adjReverse, visited);
          }
      }
  }
}
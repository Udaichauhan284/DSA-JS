/* BFS - traversal
need to return the nodes in arr by doing BFS

//V is vertices, adj are arr with adj edges
TC : O(n)+O(2E), SC : O(2n) for queue and visited object
*/
const bfsTraversal = (V, adj) => {
  let queue = []; //queue
  let visited = new Array(V).fill(false);
  let ans = []; //for storing for ans

  queue.push(0);
  visited[0] = true;
  while(queue.length > 0){
    let current = queue.shift();
    ans.push(current);

    //traversal the level of graph - BFS
    for(let node of adj[current]){
      if(!visited[node]){
        visited[node] = true;
        queue.push(node); //adding the adjacent neighbor in arr.
      }
    }
  }
  return ans;
}
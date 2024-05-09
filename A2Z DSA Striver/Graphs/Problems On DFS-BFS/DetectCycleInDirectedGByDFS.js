/* Detect Cycle in a Directed Graph
*/
//GFG way to solve this JS code
class Solution {
  constructor(){
    this.visited = [];
  }
  isCycle(V,adj){
    let inRecursion = [];
    for(let i=0; i<V; i++){
      this.visited.push(0); //0 means false, 1 measn true
      inRecursion.push(0);
    }

    for(let i=0; i<V; i++){
      if(this.visited[i] === 0){
        //not visited
        if(this.isCycleDFS(adj,i,inRecursion)){
          return true;
        }
      }
    }
    return false;
  }

  isCycleDFS(adj,curr,inRecursion){
    inRecursion[curr] = 1;
    this.visited[curr] = 1;
    for(let i=0; i<adj[curr].length; i++){
      let v = adj[curr][i];
      if(this.visited[v] === 0){
        if(this.isCycleDFS(adj,v,inRecursion)){
          return true;
        }
      }else if(inRecursion[v]){
        return true;
      }
    }
    inRecursion[curr] = 0;
    return false;
  }
}

//My Method 
function isCycle(V,adj){
  let vis = [false];
  let inRecursion = [false];
  for(let i=0; i<V; i++){
    if(!vis[i] && isCycleDFS(adj,i,vis,inRecursion)){
      return true;
    }
  }
  return false;
}
function isCycleDFS(adj,curr,vis,inRecursion){
  vis[curr] = true;
  inRecursion[curr] = true;
  for(let v of adj[curr]){
    if(vis[v] === false && isCycleDFS(adj,v,vis,inRecursion)){
      return true;
    }else if(inRecursion[v] === true){
      return true;
    }
  }
  inRecursion[curr] = false;
  return false;
}
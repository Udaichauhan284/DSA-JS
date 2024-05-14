/* 210 Course Schedule II
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
*/
 //this ques based on Topological sorted order, if doing by BFS, doit in Kahn's Algo, maintain indegree and start pushing in que accordingly
const findOrder = function(numCourses, prerequisites){
  let n = numCourses;
  let adj = Array(n).fill(null).map(() => []); //graph
  let indegree = Array(n).fill(0);
  //lets create a adj graph
  for(let [a,b] of prerequisites){
    if(adj[b]){
      adj[b].push(a);
    }else{
      adl[b] = [a];
    }
    indegree[a]++;
  }

  //fill the queue based on indegree
  let count =0;
  let result = [];
  let queue = []; //for bfs
  for(let i=0; i<n; i++){
    if(indegree[i] === 0){
      queue.push(i);
      count++;
    }
  }
  //perform bfs
  while(queue.length > 0){
    let curr = queue.shift();
    result.push(curr);
    for(let v of adj[curr]){
      indegree[v]--;
      if(indegree[v] === 0){
        queue.push(v);
        count++;
      }
    }
  }
  if(count === n){
    return result;
  }
  return [];
}

//Topo Sort by DFS, dfs topo done by stackAns, ke phle mere child ko daale phir mujhe daalo, here we need to check cycle also, if cycle present measn we cant do topo sort and need to return the empty arr, for cycle check inRecurrsion we need to do.
var findOrder1 = function (numCourses, prerequisites) {
  let n = numCourses;
  let adj = Array(n).fill(null).map(() => []);
  let visited = Array(n).fill(false);
  let inRecursion = Array(n).fill(false);
  let hasCycle = [false]; //for checking is there cycle or not 
  let stackAns = []; //for stroing the topo by dfs
  let result = []; // for main result;

  //first create a adj graph
  for (let [a, b] of prerequisites) {
      if (adj[b]) {
          adj[b].push(a);
      } else {
          adj[b] = [a];
      }
  }

  //now perform DFS for n
  for(let i=0; i<n; i++){
      if(!visited[i]){
          DFS(adj,i,stackAns,inRecursion,hasCycle,visited);
      }
  }

  //now check is there a cycle, no topo perform and no course can complete
  if(hasCycle[0]){
      return [];
  }
  //now fill the result array
  while(stackAns.length > 0){
      result.push(stackAns.pop());
  }
  return result;
};
//DFS helper function
function DFS(adj,i,stackAns,inRecursion,hasCycle,visited){
  visited[i] = true;
  inRecursion[i] = true;
  for(let v of adj[i]){
      //cycle is there
      if(inRecursion[v]){
          hasCycle[0] = true;
          return;
      }
      if(!visited[v]){
          //call again DFS
          DFS(adj,v,stackAns,inRecursion,hasCycle,visited);
      }
  }
  inRecursion[i] = false;
  stackAns.push(i);
}


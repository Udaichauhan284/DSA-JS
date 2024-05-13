/* 207 Course Schedule
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
*/
//Method 1-solve by BFS, in this we have to apply Kahn's Algo, measn if there is cycle, we not able to perform the all course completion, else return false
// var canFinish = function (numCourses, prerequisites) {
//     let n = numCourses;
//     let adjGraph = [];
//     let indegree = Array(n).fill(0);
//     //first create a adjGraph so later we can traverse on it
//     for (let [a, b] of prerequisites) {
//         //b-->a
//         if (adjGraph[b]) {
//             adjGraph[b].push(a);
//         } else {
//             adjGraph[b] = [a];
//         }
//         indegree[a]++;
//     }

//     //now indegree filled, need to check === 0
//     let count = 0;
//     let queue = [];
//     for (let i = 0; i < n; i++) {
//         if (indegree[i] === 0) {
//             queue.push(i);
//             count++;
//         }
//     }

//     //perform BFS
//     while (queue.length > 0) {
//         let curr = queue.shift();
//         if (adjGraph[curr]) {
//             for (let v of adjGraph[curr]) {
//                 indegree[v]--;
//                 if (indegree[v] === 0) {
//                     queue.push(v);
//                     count++;
//                 }
//             }
//         }
//     }
//     if (count === n) {
//         // measn we complete all courses
//         return true;
//     }
//     return false;
// };

//Making more Optimize, rather creating the adjGraph, simple traverse on prereq.. like [course,prereq]
const canFinish = function (numCourses, prerequisites) {
    let len = numCourses;
    let indegree = Array(len).fill(0);

    //prereq --> course, need to complete prereq first
    for(let [course,prereq] of prerequisites){
        indegree[course]++;
    }

    let count = 0;
    let queue = []; //for bfs
    //fill the queue, based on indegree
    for(let i=0; i<len; i++){
        if(indegree[i] === 0){
            queue.push(i);
            count++;
        }
    }

    //apply bfs
    while(queue.length > 0){
        let curr = queue.shift();
        for(let [course,prereq] of prerequisites){
            if(prereq === curr){
                indegree[course]--;
                if(indegree[course] === 0){
                    queue.push(course);
                    count++;
                }
            }
        }
    }

    if(count === len){
        //traverse all the graph, measn no cycle, course complete
        return true;
    }
    return false;
}

//Method-2, DOnw by DFS, in this we know we need to find the cycle, and here 
//we are doing by DFS, so use Detect Cycle in Directed Graph in DFS.
//means in this we need to maintain the onrecursion array also, with visited to.
var canFinish1 = function (numCourses, prerequisites) {
  let n = numCourses;
  let visited = Array(n).fill(false);
  let inRecursion = Array(n).fill(false);
  let adjGraph = Array(n).fill(null).map(() => []);

  // Create adjacency list for traversing the graph
  for (let [a, b] of prerequisites) {
      adjGraph[b].push(a);
  }

  for (let i = 0; i < n; i++) {
      if (!visited[i] && isCycleDetectedDFS(adjGraph, i, visited, inRecursion)) {
          //agar yeah if true hogaya, measn cycle hao, no we not able to 
          //complete all the course, false
          return false
      }
  }
  return true;
};
function isCycleDetectedDFS(adjGraph, curr, visited, inRecursion) {
  visited[curr] = true;
  inRecursion[curr] = true;
  for (let v of adjGraph[curr]) {
      if (!visited[v]) {
          if (isCycleDetectedDFS(adjGraph, v, visited, inRecursion)) {
              return true;
          }
      } else if (inRecursion[v] === true) {
          return true;
      }
  }
  inRecursion[curr] = false;
  return false;
}
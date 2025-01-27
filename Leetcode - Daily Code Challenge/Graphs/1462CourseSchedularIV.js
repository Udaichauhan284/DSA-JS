/* 1462. COurses Schedule IV
27 Jan 25, Leetcode POTD, Graph

Input: numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
Output: [false,true]
Explanation: The pair [1, 0] indicates that you have to take course 1 before you can take course 0.
Course 0 is not a prerequisite of course 1, but the opposite is true.
*/

/*In Brute Method, we go on every Query and then see if we go from src to 
dest by use of DFS, we able to do that, return true otherwise false
TC: O(Q * (V+E)), SC: O(V+E)
*/
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    //first make the adjList
    let adj = Array.from({length: numCourses}, () => []);
    for(let [u,v] of prerequisites){
        adj[u].push(v); //u-->v
    }

    let QLen = queries.length;
    
    let result = Array(QLen);
    for(let i=0; i<QLen; i++){
        let src = queries[i][0];
        let dest = queries[i][1];
        let visited = Array(QLen).fill(false);
        result[i] = dfs(adj, visited, src, dest);
    }
    return result;
};
function dfs(adj, visited, src, dest){
    //mark visited
    visited[src] = true;
    if(src === dest){
        return true; //we able to reach destination from src
    }

    let reachable = false;
    for(let adjNode of adj[src]){
        if(!visited[adjNode]){
            reachable = reachable || dfs(adj, visited, adjNode, dest);
        }
    }
    return reachable;
}


/*In Optimal Method, we need to see queries and then for completing
the 0 we need to complete 1, is there link between them, measn
can we travel from 1->0. In this we use TopoSort by BFS, which is
Kahn's Algo, in this we maintain the indegree and also prereq for
every nodes 
TC: O(V^2 * (V+E)), SC: O(V+E)
*/
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    let adj = Array.from({ length: numCourses }, () => []);
    let indegree = Array(numCourses).fill(0);
    for (let [u, v] of prerequisites) {
        adj[u].push(v); //u --> v
        indegree[v]++;
    }
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let prevCourses = new Map();
    let front = 0;
    while (front < queue.length) {
        let node = queue[front];
        front++;
        for (let adjNode of adj[node]) {
            if (!prevCourses.has(adjNode)) {
                prevCourses.set(adjNode, new Set());
            }
            prevCourses.get(adjNode).add(node);

            if (prevCourses.has(node)) {
                for (let prev of prevCourses.get(node)) {
                    prevCourses.get(adjNode).add(prev);
                }
            }

            indegree[adjNode]--;
            if (indegree[adjNode] === 0) {
                queue.push(adjNode);
            }
        }
    }

    let result = []
    for (const [src, dest] of queries) {
        result.push(
            prevCourses.has(dest) && prevCourses.get(dest).has(src)
        );
    }
    return result;
};
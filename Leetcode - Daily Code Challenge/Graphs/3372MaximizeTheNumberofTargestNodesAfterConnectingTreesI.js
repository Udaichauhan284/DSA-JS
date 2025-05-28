/* 3372. Maximize the Number of Target Nodes After Connecting Trees I
28 may 25, Leetcode POTD, Medium
Input: edges1 = [[0,1],[0,2],[2,3],[2,4]], edges2 = [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]], k = 2

Output: [9,7,9,8,8]

Explanation:

For i = 0, connect node 0 from the first tree to node 0 from the second tree.
For i = 1, connect node 1 from the first tree to node 0 from the second tree.
For i = 2, connect node 2 from the first tree to node 4 from the second tree.
For i = 3, connect node 3 from the first tree to node 4 from the second tree.
For i = 4, connect node 4 from the first tree to node 4 from the second tree.
*/


/*
For each node in Tree1, find the total number of nodes reachable within distance k from it in Tree1, and add the maximum number of nodes reachable within distance k-1 from any node in Tree2.

🔍 Key Steps:
BFS Traversal:

bfs(start, adj, d, N) → Counts nodes reachable from start within distance d using Breadth-First Search.

Count for Each Tree:

findCount(edges, d) → For each node in the tree, runs BFS to count reachable nodes within d distance.

result1 = findCount(edges1, k) → Count for Tree1.

result2 = findCount(edges2, k-1) → Count for Tree2.

Combine Results:

Find max value in result2 (i.e., best possible gain from Tree2).

Add this max value to each value in result1.

Return Final Result:

Updated result1 is the answer.

TC: O(N*(N+E)), SC: O(N+E)
*/
var maxTargetNodes = function(edges1, edges2, k) {
    let nodes = edges1.length+1;
    //now find the count of nodes in tree1 to reach from zero node using bfs
    let result1 = findCount(edges1, k);
    let result2 = findCount(edges2, k-1);

    //now find the maxCountofNodes which are from tree2 to give the best result
    let maxTargetNodesCount = Math.max(...result2);

    for(let i=0; i<nodes; i++){ //O(N)
        result1[i] += maxTargetNodesCount;
    }
    return result1;
};
function findCount(edges, dis){
    let N = edges.length+1;
    let result = Array(N).fill(0);

    let adj = {};
    //now form the adj graph from edges
    for(let [u,v] of edges){
        if(!adj[u]) adj[u] = [];
        if(!adj[v]) adj[v] = [];
        adj[u].push(v);
        adj[v].push(u);
    }

    //now traverse over the edges len
    for(let i=0; i<N; i++){ //O(N)
        result[i] = bfs(i, adj, dis, N); //O(N+E)
    }
    return result;
}
function bfs(start, adj, dis, N){
    let queue = [[start,0]]; //startnode, dis
    let count = 0;
    let visited = Array(N).fill(false); //visited node
    visited[start] = true; //mark currone with true

    while(queue.length > 0){
        let [curr, d] = queue.shift();
        if(d > dis) continue;
        count++;
        //now iterate over the neighbor one
        for(let nextOne of adj[curr] || []){
            if(!visited[nextOne]){
                visited[nextOne] = true;
                queue.push([nextOne, d+1])
            }
        }
    }
    return count;
}
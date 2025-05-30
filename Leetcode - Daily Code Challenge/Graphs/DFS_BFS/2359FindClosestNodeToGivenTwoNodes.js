/* 2359. Find Closest Node to Given Two Nodes
30 May 2025, Leetcode POTD, medium
Input: edges = [2,2,3,-1], node1 = 0, node2 = 1
Output: 2
Explanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.
The maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.
*/

/*In this we use the DFS from both the nodes and find the dist
from that nodes to other nodes using DFS, we maintain the 
dist array with distance from node1 to other node, and then
we find the maxDistance from each i iteration and then check
if that is small from minDistTillNow we will update the dist and
update the node and then return the node.
TC: O(n)+O(n)+O(n)~ O(3n) ~ O(n), in this we using the dfs for times and each time
nodes will travse one time, SC: O(4n) ~ O(n)
*/
var closestMeetingNode = function(edges, node1, node2) {
    let len = edges.length;
    let dist1 = Array(len).fill(Number.MAX_VALUE); //SC:O(n)
    let dist2 = Array(len).fill(Number.MAX_VALUE); //SC:O(n)
    //dist from same node to same node is zero
    dist1[node1] = 0;
    dist2[node2] = 0;

    //now also for dfs we need to maintain the visited array
    let visited1 = Array(len).fill(false); //SC: O(n)
    let visited2 = Array(len).fill(false); //SC: O(n)

    //now hit the dfs
    dfs(edges, node1, dist1, visited1); //O(n)
    dfs(edges, node2, dist2, visited2); //O(n)

    let minDisNode = -1;
    let minDistTravelNow = Number.MAX_VALUE;
    //traverse over the index
    for(let i=0; i<len; i++){ //TC: O(n)
        //find the maxD, from both dist at i
        let maxD = Math.max(dist1[i], dist2[i]);
        if(minDistTravelNow > maxD){
            minDistTravelNow = maxD;
            minDisNode = i;
        }
    }
    return minDisNode;
};
const dfs = (edges, node, dist, visited) => {
    //mark the this node true
    visited[node] = true;
    //now take the adj node from this curr Node from edges
    //because we know from one node only one outbound is going
    //which maintain in the edges
    let v = edges[node];
    //now check
    if(v !== -1 && !visited[v]){
        //mark that visited, and update the dist
        visited[v] = true;
        dist[v] = 1+dist[node]; //1 plus till previous node
        dfs(edges, v, dist, visited); //now call the dfs for futher neighbor node
    }
}
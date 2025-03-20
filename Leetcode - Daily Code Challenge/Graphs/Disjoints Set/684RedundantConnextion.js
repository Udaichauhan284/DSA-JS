/* 684. Redundant Connection
29 Jan 25, Leetcode POTD, Graphs, Edges, BFS, DFS, DSU

Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]
*/

/*In Method, we use the DFS, in this we iterate
on every nodes, and check if that in adj or not
and also check if we able to go from u->v in that edge
if yes, return that edge, measn that is redundant edge
(extra). TC: O(n^2) in worst case, SC: O(n)
*/
var findRedundantConnection = function(edges) {
    let len = edges.length;
    let adj = new Map();

    for(let i=0; i<len; i++){
        let u = edges[i][0];
        let v = edges[i][1];

        let visited = Array(len).fill(false);
        if(adj.has(u) && adj.has(v) && dfs(adj,u,v,visited)){
            return edges[i];
        }

        //now push into adj
        if(!adj.has(u)) adj.set(u, []);
        adj.get(u).push(v); //u-->v

        if(!adj.has(v)) adj.set(v, []);
        adj.get(v).push(u); //v-->u
    }
    return [];
};
function dfs(adj,u,v,visited){
    //mark visited true for curr one
    visited[u] = true;

    if(u === v){
        return true;
    }
    //now traverse to nextNode
    for(let nextNode of adj.get(u) || []){
        if(!visited[nextNode] && dfs(adj,nextNode,v, visited)){
            return true;            
        }
    }
    return false;
}


/*Method 2- use of BFS
TC: O(n^2), SC: O(n)
*/
var findRedundantConnection = function (edges) {
    let len = edges.length;
    let adj = new Map();

    for (let i = 0; i < len; i++) {
        let u = edges[i][0];
        let v = edges[i][1];

        let visited = Array(len).fill(false);
        if (adj.has(u) && adj.has(v) && bfs(adj, u, v, visited)) {
            return edges[i];
        }

        if (!adj.has(u)) adj.set(u, []);
        adj.get(u).push(v); //u --> v

        if (!adj.has(v)) adj.set(v, []);
        adj.get(v).push(u); //v --> u
    }
    return [];
};
function bfs(adj, u, v, visited) {
    visited[u] = true;

    let queue = [];
    queue.push(u);

    let front = 0;
    while (front < queue.length) {
        let curr = queue[front];
        front++;

        if (curr === v) {
            return true;
        }
        for (let nextNode of adj.get(curr) || []) {
            if (!visited[nextNode]) {
                visited[nextNode] = true;
                queue.push(nextNode);
            }
        }
    }
    return false;
}



/*Optimal Method, use of DSU, in this, we make the one component
use of DSU, and then we see if u and v are have same parent,
means return that edge, otherwise []
*/
class DSU{
    constructor(n){
        this.parent = Array(n+1).fill(0);
        this.rank = Array(n+1).fill(0);
        for(let i=0; i<n; i++){
            this.parent[i] = i;
        }
    }

    find(x){
        if(x !== this.parent[x]){
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x,y){
        let xParent = this.find(x);
        let yParent = this.find(y);

        if(xParent === yParent) return;

        if(this.rank[xParent] < this.rank[yParent]){
            this.parent[xParent] = yParent;
        }else if(this.rank[xParent] > this.rank[yParent]){
            this.parent[yParent] = xParent;
        }else{
            this.parent[yParent] = xParent;
            this.rank[xParent]++;
        }
    }
}
//TC: O(n * alpha(n)), SC: O(n)
var findRedundantConnection = function(edges) {
    let len = edges.length;
    let dsu = new DSU(len); //TC: O(alpha(n))

    for(let i=0; i<len; i++){ //TC: O(n)
        let u = edges[i][0];
        let v = edges[i][1];

        if(dsu.find(u) === dsu.find(v)){
            return edges[i];
        }

        dsu.union(u,v);
    }
    return [];
};
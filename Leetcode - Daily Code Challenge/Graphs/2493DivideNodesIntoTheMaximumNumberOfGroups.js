/* 2493. Divide Nodes Into The maximum Number of Groups
30 Jan 25, Leercode POTD, Graphs HARD

Input: n = 6, edges = [[1,2],[1,4],[1,5],[2,6],[2,3],[4,6]]
Output: 4
Explanation: As shown in the image we:
- Add node 5 to the first group.
- Add node 1 to the second group.
- Add nodes 2 and 4 to the third group.
- Add nodes 3 and 6 to the fourth group.
We can see that every edge is satisfied.
It can be shown that that if we create a fifth group and move any node from the third or fourth group to it, at least on of the edges will not be satisfied.
*/


//TC: O(V * (V+E)), SC: O(V+E)
var magnificentSets = function(n, edges) {
    let adj = new Map();
    for(let edge of edges){
        let u = edge[0]-1;
        let v = edge[1]-1;

        if(!adj.has(u)) adj.set(u, []);
        adj.get(u).push(v); //u--<v
        if(!adj.has(v)) adj.set(v, []);
        adj.get(v).push(u); //v-->u
    }

    //now check the bipartite check
    let colors = Array(n).fill(-1);
    for(let node=0; node<n; node++){
        if(colors[node] === -1){
            if(isBipartite(adj,node,colors,1) === false){
                return -1;
            }
        }
    }

    //now use the bfs, to find the level for each node
    let levels = Array(n).fill(0);
    for(let node=0; node<n; node++){
        levels[node] = bfs(adj,node,n);
    }

    //now find the maxGroup for each component
    let maxGroupEachComponent=0;
    let visited = Array(n).fill(false);
    for(let node=0; node<n; node++){
        if(!visited[node]){
            maxGroupEachComponent += getMaxGroup(adj,node,visited,levels); 
        }
    }
    return maxGroupEachComponent;
};

function isBipartite(adj, currNode, colors, currColor){
    colors[currNode] = currColor;

    for(let nextNode of adj.get(currNode) || []){
        if(colors[currNode] === colors[nextNode]){
            return false;
        }

        if(colors[nextNode] === -1){
            if(isBipartite(adj,nextNode,colors, 1-currColor) === false){
                return false;
            }
        }
    }
    return true;
}
function bfs(adj,currNode, n){
    let queue = [];
    queue.push(currNode);
    let visited = Array(n).fill(false);
    visited[currNode] = true;

    let levels = 1; //max groups in that components
    while(queue.length > 0){
        let size = queue.length;
        while(size--){
            let curr = queue.shift();

            for(let nextNode of adj.get(curr) || []){
                if(!visited[nextNode]){
                    visited[nextNode] = true;
                    queue.push(nextNode);
                }
            }
        }
        levels++;
    }
    return levels-1; //1 extra will be incremeented in the last loop
}
function getMaxGroup(adj,node,visited,levels){
    let maxGroup = levels[node];
    visited[node] = true;

    for(let nextNode of adj.get(node) || []){
        if(!visited[nextNode]){
            maxGroup = Math.max(maxGroup, getMaxGroup(adj,nextNode,visited,levels));
        }
    }
    return maxGroup;
}
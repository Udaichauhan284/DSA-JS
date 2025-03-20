/* 3108. Minimum Cost Walk in Weighted Graph
20 March 25, Leetcode POTD, Graph DSU
Input: n = 5, edges = [[0,1,7],[1,3,7],[1,2,1]], query = [[0,3],[3,4]]

Output: [1,-1]

Explanation:


To achieve the cost of 1 in the first query, we need to move on the following edges: 0->1 (weight 7), 1->2 (weight 1), 2->1 (weight 1), 1->3 (weight 7).

In the second query, there is no walk between nodes 3 and 4, so the answer is -1.
*/

var minimumCost = function(n, edges, query) {
    let parent = Array(n).fill(0);
    for(let i=0; i<n; i++){
        parent[i] = i;
    }
    let cost = Array(n).fill(-1);
    let res = [];

    //now apply DSU
    const find = (x) => {
        if(x === parent[x]){
            return x;
        }
        return parent[x] = find(parent[x]);
    }

    const union = (x,y) => {
        parent[y] = x;
    }

    //now travser over the edges
    for(let [u,v,w] of edges){
        let parentU = find(u);
        let parentV = find(v);

        if(parentU !== parentV){
            cost[parentU] &= cost[parentV];
            union(parentU, parentV);
        }
        cost[parentU] &= w;
    }

    //now on queries
    for(let [source, target] of query){
        //find the parent
        let pS = find(source);
        let pT = find(target);
        if(source === target){
            res.push(0);
        }else if(pS !== pT){
            res.push(-1);
        }else{
            res.push(cost[pS]);
        }
    }
    return res;
};
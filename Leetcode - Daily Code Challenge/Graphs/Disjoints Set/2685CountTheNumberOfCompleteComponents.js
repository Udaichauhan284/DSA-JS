/* 2685. Count the Number of Compete Components
22 March 25, Leetcode POTD
Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
Output: 3
Explanation: From the picture above, one can see that all of the components of this graph are complete.
*/

/*In this we need to find the complete components
so for that we can use the DSU
TC: O(e * alpha(v)), SC: O(v)
*/
class DSU {
    constructor(n) {
        this.parent = Array(n).fill(0);
        this.size = Array(n).fill(1);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }
    find(x) {
        if (x !== this.parent[x]) {
            return this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(x, y) {
        let xParent = this.find(x);
        let yParent = this.find(y);
        if (xParent === yParent) {
            return;
        }
        if (this.size[xParent] < this.size[yParent]) {
            this.parent[xParent] = yParent;
            this.size[yParent] += this.size[xParent];
        } else if (this.size[xParent] > this.size[yParent]) {
            this.parent[yParent] = xParent;
            this.size[xParent] += this.size[yParent];
        } else {
            this.parent[yParent] = xParent;
            this.size[xParent] += this.size[yParent];
        }
    }
}
const countCompleteComponents =  (n, edges) => {
    let count = 0;
    let dsu = new DSU(n);
    let edgeCount = new Map(); // Stores edges count for each component root

    //union the nodes
    for(let [u,v] of edges){
        dsu.union(u,v);
    }

    //count te edges for component root
    for(let [u,v] of edges){
        let root = dsu.find(u);
        edgeCount.set(root, (edgeCount.get(root) || 0)+1);
    }

    //check for complete components
    for(let i=0; i<n; i++){
        if(dsu.find(i) === i){
            let vertices = dsu.size(i);
            let edges = edgeCount.get(i) || 0; // Edges in this component

            if ((vertices * (vertices - 1)) / 2 === edges) {
                count++;
            }
        }
    }
    return count;
}
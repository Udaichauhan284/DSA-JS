/*1579. Remove Max Number of Edges to Keep Graph Fully Traversable
30 June 2024 Leetcode POTD, Graph
Alice and Bob have an undirected graph of n nodes and three types of edges:

Type 1: Can be traversed by Alice only.
Type 2: Can be traversed by Bob only.
Type 3: Can be traversed by both Alice and Bob.

Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
Output: 2
Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.

*/

class DSU {
  constructor(n){
      this.parent = Array(n+1).fill(0);
      this.rank = Array(n+1).fill(0);
      this.component = n;
      //fill the parent
      for(let i=0; i<n+1; i++){
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
      if(xParent === yParent) return 0;
      if(this.rank[xParent] > this.rank[yParent]){
          this.parent[yParent] = xParent;
      }else if(this.rank[xParent] < this.rank[yParent]){
          this.parent[xParent] = yParent;
      }else{
          this.parent[xParent] = yParent;
          this.rank[yParent]++;
      }
      this.component--; // as we do union edges will come together.
      return 1;
  }
  isSingle(){
      return this.component === 1;
  }
}
/*This is solve by DSU, and we need to connt edges for Alice and Bob
respectively. then total Edges.length - edgecount
TC: O(mlogm) + O(m*n)
SC: O(n)
*/
var maxNumEdgesToRemove = function(n, edges) {
  //declare ALice and bob DSU
  let Alice = new DSU(n);
  let Bob = new DSU(n);
  //sort the edges by type in descending order
  edges = edges.sort((a,b) => b[0]-a[0]);
  let edgeCount = 0;
  //now traverse over the edges
  for(let [type,u,v] of edges){
      if(type === 3){ //where Alice and Bob travel together
          let addEdgeCountFlag = false;
          //alice
          if(Alice.find(u) !== Alice.find(v)){
              Alice.union(u,v);
              addEdgeCountFlag = true;
          }
          //bob
          if(Bob.find(u) !== Bob.find(v)){
              Bob.union(u,v);
              addEdgeCountFlag = true;
          }
          if(addEdgeCountFlag === true){
              edgeCount++;
          }
      }else if(type === 2){ //bob can travel
          if(Bob.find(u) !== Bob.find(v)){
              Bob.union(u,v);
              edgeCount++;
          }
      }else{
          if(Alice.find(u) !== Alice.find(v)){
              Alice.union(u,v);
              edgeCount++;
          }
      }
  }
  if(Alice.isSingle() === true && Bob.isSingle() === true){
      return edges.length - edgeCount;
  }
  return -1;
};
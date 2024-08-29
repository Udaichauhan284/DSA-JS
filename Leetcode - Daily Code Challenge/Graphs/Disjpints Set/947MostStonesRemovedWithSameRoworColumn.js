/* 947 Most Stones Removed with Same Row or COlumn
29 August 2024, Leetcode POTD

Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
Output: 5
Explanation: One way to remove 5 stones is as follows:
1. Remove stone [2,2] because it shares the same row as [2,1].
2. Remove stone [2,1] because it shares the same column as [0,1].
3. Remove stone [1,2] because it shares the same row as [1,0].
4. Remove stone [1,0] because it shares the same column as [0,0].
5. Remove stone [0,1] because it shares the same row as [0,0].
Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane.
*/

/*29 August 2024, LC POTD
Method 1 - use of DFS, traverse over the len of stones and if that is not
visited apply dfs and in dfs mark that visited and apply for dfs for same
row and col stones
TC: O(n^2), SC: O(n)
*/
var removeStones = function(stones) {
  let len = stones.length;
  let group = 0;
  let visited = Array(len).fill(false);

  for(let i=0; i<len; i++){
      if(visited[i] === true) continue; //skip that one, if already visited

      //now apply for DFS for seeing the adj stones and removing it
      dfs(stones, i, visited);
      group++;
  }
  return len-group; //in each group only one will left, x-1 => n-group
};
function dfs(stones, index, visited){
  //mark that curr one visited
  visited[index] = true;
  //now get the curr row and col for checking with next adjROw and adj col
  let row = stones[index][0];
  let col = stones[index][1];
  for(let i=0; i<stones.length; i++){
      if((visited[i] === false) && (stones[i][0] === row || stones[i][1] === col)){
          //call for DFS for next row and col stones
          dfs(stones, i, visited);
      }
  }
}


/*29 August 2024, 
Method 2 - use of DSU, first if stones in same row and col do union
and then in again loop search for parent for each i.
TC: O(n^2) + O(n), SC: O(n)
*/
class DSU{
  constructor(n){
      this.parent = Array(n).fill(0);
      this.rank = Array(n).fill(0);
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
  union(x, y){
      let xParent = this.find(x);
      let yParent = this.find(y);

      if(xParent === yParent) return;

      if(this.rank[xParent] < this.rank[yParent]){
          this.parent[xParent] = yParent;
      }else if(this.rank[xParent] > this.rank[yParent]){
          this.parent[yParent] = xParent;
      }else{
          this.parent[yParent] = xParent;
          this.rank[xParent] += 1;
      }
  }
}
var removeStones = function(stones) {
  let len = stones.length;
  let dsu = new DSU(len);
  let group = 0; 
  //now form the union, for each i go j+1
  for(let i=0; i<len; i++){
      for(let j=i+1; j<len; j++){
          if(stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]){
              dsu.union(i, j);
          }
      }
  }

  //now look for group, for seeing the parent
  for(let i=0; i<len; i++){
      if(dsu.parent[i] === i){
          group++;
      }
  }
  return len - group;
};
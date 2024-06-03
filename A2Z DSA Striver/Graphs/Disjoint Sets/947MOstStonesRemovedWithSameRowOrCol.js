/* 947. Most Stones Removed with Same Row or Column
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
/* Method 1- use DFS, when that stine is not visited apply 
 DFS for that, and one DFS will cover one group
 return n-group, group measn one components at last only that will left which not share row and col with other stone.
 */
var removeStones = function (stones) {
  let len = stones.length;
  let visited = Array(len).fill(false);
  let components = 0;
  for (let i = 0; i < len; i++) {
    if (!visited[i]) {
      DFS(stones, i, visited);
      components++;
    }
  }
  return len - components;
};
function DFS(stones, index, visited) {
  visited[index] = true;
  let row = stones[index][0];
  let col = stones[index][1];
  for (let i = 0; i < stones.length; i++) {
    if (!visited[i] && (stones[i][0] === row || stones[i][1] === col)) {
      DFS(stones, i, visited);
    }
  }
}

class DSU {
  constructor(n) {
    this.parent = Array(n).fill(0);
    this.rank = Array(n).fill(1);
    //fill the parent
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    let parentX = this.find(x);
    let parentY = this.find(y);
    if (parentX === parentY) {
      return;
    }
    if (this.rank[parentX] < this.rank[parentY]) {
      this.parent[parentX] = parentY;
    } else if (this.rank[parentX] > this.rank[parentY]) {
      this.parent[parentY] = parentX;
    } else {
      this.parent[parentY] = parentX;
      this.rank[parentX]++;
    }
  }
}
var removeStones = function (stones) {
  let len = stones.length;
  let dsu = new DSU(len);
  let components = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        dsu.union(i, j); //union will happen
      }
    }
  }
  //let see how many componenet created
  for (let i = 0; i < len; i++) {
    if (dsu.parent[i] === i) {
      components++;
    }
  }
  return len - components;
};

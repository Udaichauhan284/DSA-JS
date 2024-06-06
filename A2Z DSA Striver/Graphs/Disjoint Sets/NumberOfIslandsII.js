/* Number of Islands II
Input: n = 4
m = 5
k = 4
A = {{1,1},{0,1},{3,3},{3,4}}

Output: 1 1 2 2
Explanation:
0.  00000
    00000
    00000
    00000
1.  00000
    01000
    00000
    00000
2.  01000
    01000
    00000
    00000
3.  01000
    01000
    00000
    00010
4.  01000
    01000
    00000
    00011
*/
class DSU {
  constructor(n) {
    this.parent = Array(n).fill(0);
    this.rank = Array(n).fill(1);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  find(x) {
    if (x != this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    let xParent = this.find(x);
    let yParent = this.find(y);
    if (xParent === yParent) {
      return;
    }
    if (this.rank[xParent] < this.rank[yParent]) {
      this.parent[xParent] = yParent;
    } else if (this.rank[xParent] > this.rank[yParent]) {
      this.parent[yParent] = xParent;
    } else {
      this.parent[yParent] = xParent;
      this.rank[xParent]++;
    }
  }
}
//TC: O(Q * 4) - Q is query and 4 is directions ~ O(Q)
//SC: O(Q) + O(rows * cols) ~ O(rows * cols)
class Solution {
  //Function to count the number of islands.
  numOfIslands(rows, cols, operators) {
    //your code here
    let dsu = new DSU(rows * cols);
    let visited = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(0));
    let ans = [];
    let cnt = 0;
    for (let [row, col] of operators) {
      if (visited[row][col] === 1) {
        ans.push(cnt);
        continue;
      }
      visited[row][col] = 1;
      cnt++;

      //move into directions
      let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];
      for (let [dx, dy] of directions) {
        let adjR = dx + row;
        let adjC = dy + col;
        if (adjR >= 0 && adjR < rows && adjC >= 0 && adjC < cols) {
          if (visited[adjR][adjC] === 1) {
            let nodeNo = row * cols + col;
            let adjNodeNo = adjR * cols + adjC;
            if (dsu.find(nodeNo) !== dsu.find(adjNodeNo)) {
              cnt--;
              dsu.union(nodeNo, adjNodeNo);
            }
          }
        }
      }
      ans.push(cnt);
    }
    return ans;
  }
}

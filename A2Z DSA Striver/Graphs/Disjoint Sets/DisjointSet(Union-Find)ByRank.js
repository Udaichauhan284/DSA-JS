//Disjoint Set (Union-Find) using Rank
class Solution {
  constructor(size) {
    this.rank = Array(size).fill(0);
  }
  find(parent, x) {
    // if(x !== parent[x]){
    //   parent[x] = this.find(parent, parent[x]);
    // }
    // return parent[x];
    //OR
    if (x === parent[x]) {
      return x;
    }
    return (parent[x] = this.find(parent, parent[x]));
  }

  union(parent, x, y) {
    let xParent = this.find(parent, x);
    let yParent = this.find(parent, y);

    if (this.rank[xParent] > this.rank[yParent]) {
      parent[yParent] = xParent;
    } else if (this.rank[xParent] < this.rank[yParent]) {
      parent[xParent] = yParent;
    } else {
      //both rank same, make anyone parent and increase the rank for that
      parent[xParent] = yParent;
      this.rank[yParent]++;
    }
  }
}

//Geeks for Geeks code
//Disjoint Set (Union-Find) using Rank
class Solution {
  constructor(size) {
    this.rank = Array(size).fill(0);
  }
  /*Complete the functions below*/
  find(A, X) {
    //A is array, X we need to find, in rank method, we just need to
    //make small recursion tree, so just assign previous parent
    //add code here
    if (X !== A[X]) {
      A[X] = this.find(A, A[X]);
    }
    return A[X];
  }

  unionSet(A, X, Z) {
    // in this we use rank system
    //add code here
    let xParent = this.find(A, X);
    let zParent = this.find(A, Z);

    if (this.rank[xParent] > this.rank[zParent]) {
      A[zParent] = xParent;
    } else if (this.rank[xParent] < this.rank[zParent]) {
      A[xParent] = zParent;
    } else {
      //make anyone parent, because both rank is same, also increase the rank
      A[xParent] = zParent;
      this.rank[zParent]++;
    }
  }
}

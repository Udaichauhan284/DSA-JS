/* Disjoint Set By Size and Path Comparison
this is same as by Rank, but at place of Rank, we take a size array, and while union we add the size of that one which is adding.
*/
class DSU{
  constructor(n){
    this.parent = Array(n).fill(0);
    this.size = Array(n).fill(1);
    for(let i=0; i<n; i++){
      this.parent[i] = i;
    }
  }
  find(x){
    if(x !== this.parent[x]){
      this.parent[x] = this.find(parent[x]);
    }
    return this.parent[x];
  }
  union(x,y){
    let xParent = this.find(x);
    let yParent = this.find(y);
    if(xParent === yParent){
      return;
    }
    if(this.size[xParent] < this.size[yParent]){
      this.parent[xParent] = yParent;
      this.size[yParent] += this.size[xParent];
    }else if(this.size[xParent] > this.size[yParent]){
      this.parent[yParent] = xParent;
      this.size[xParent] += this.size[yParent]
    }else{
      this.parent[yParent] = xParent;
      this.size[xParent] += this.size[yParent];
    }
  }
}
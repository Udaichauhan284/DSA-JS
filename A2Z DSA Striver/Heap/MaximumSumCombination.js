class MaxHeap{
  constructor(){
  this.data = [];
}
getParentIndex(idx){
  return Math.floor((idx-1) / 2);
}
getLeftChildIndex(idx){
  return (2*idx)+1;
}
getRightChildIndex(idx){
  return (2*idx)+2;
}

swap(i1,i2){
  let temp = this.data[i1];
  this.data[i1] = this.data[i2];
  this.data[i2] = temp;
}

push(key){
  this.data[this.data.length] = key; //at last
  this.heapifyUp();
}
heapifyUp(){
  let currIndex = this.data.length-1;
  while(this.data[currIndex] > this.data[this.getParentIndex(currIndex)]){
    this.swap(currIndex, this.getParentIndex(currIndex));

    currIndex = this.getParentIndex(currIndex);
  }
}
  //remove the frist element
  poll(){
    if(this.data.length === 0) return null;
    if(this.data.length === 1) return this.data.pop();
    const maxValue = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);

    return maxValue;
  }
  heapifyDown(currIndex){
    let biggestIndex = currIndex;
    let leftChild = this.getLeftChildIndex(currIndex);
    let rigthChild = this.getRightChildIndex(currIndex);

    if(leftChild < this.data.length && this.data[leftChild] > this.data[biggestIndex]){
      biggestIndex = leftChild;
    }
    if(rigthChild < this.data.length && this.data[rigthChild] > this.data[biggestIndex]){
      biggestIndex = rigthChild;
    }

    if(biggestIndex !== currIndex){
      this.swap(biggestIndex,currIndex);
      this.heapifyDown(biggestIndex);
    }
  }
  peek(){
    return this.data[0];
  }
  size(){
      return this.data.length;
  }
}
//param A : array of integers
//param B : array of integers
//param C : integer
//return a array of integers
function solve(A, B, C){
      // let n = A.length;
      // let m = B.length;
      // let ans = [];
      // for(let i=0; i<n; i++){
      //     for(let j=0; j<m; j++){
      //         ans.push({sum : A[i]+B[j], indices: [i,j]});
      //     }
      // }
      // ans.sort((a,b) => b.sum-a.sum);
      // // let result = [];
      // // for(let i=0; i<C; i++){
      // //     result.push(ans[i].sum);
      // // }
      // // return result;
      // return ans.slice(0,C).map(item => item.sum);
      
      const maxHeap = new MaxHeap();
A.sort((a, b) => b - a);
B.sort((a, b) => b - a);
const result = [];
const visited = new Set(); // Track visited pairs to avoid duplicates

// Insert initial sum (A[0] + B[0]) into max heap
maxHeap.push({ sum: A[0] + B[0], indices: [0, 0] });
visited.add(`${0},${0}`);

while (C--) {
  const max = maxHeap.peek();
  maxHeap.poll();
  result.push(max.sum);

  const [indexA, indexB] = max.indices;

  // Add next possible sums to max heap
  if (indexA + 1 < A.length && !visited.has(`${indexA + 1},${indexB}`)) {
      maxHeap.push({ sum: A[indexA + 1] + B[indexB], indices: [indexA + 1, indexB] });
      visited.add(`${indexA + 1},${indexB}`);
  }
  if (indexB + 1 < B.length && !visited.has(`${indexA},${indexB + 1}`)) {
      maxHeap.push({ sum: A[indexA] + B[indexB + 1], indices: [indexA, indexB + 1] });
      visited.add(`${indexA},${indexB + 1}`);
  }
}

return result;
}
const A = [1,2];
const B = [3,4];
console.log(solve(A,B,2));
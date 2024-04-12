/* 703. Kth Largest Element in a Stream
Example 1:

Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8

*/
class MinHeap{
  constructor(){
    this.data = [];
  }
  getParentIndex(idx){
    return Math.floor((idx-1)/2);
  }
  getLeftChildIndex(idx){
    return 2*idx+1;
  }
  getRightChildIndex(idx){
    return 2*idx+2;
  }
  swap(i1,i2){
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(key){
    this.data[this.data.length] = key;
    this.heapifyUp();
  }
  heapifyUp(){
    let currIndex = this.data.length-1;
    while(currIndex > 0 && this.data[currIndex] < this.data[this.getParentIndex(currIndex)]){
      this.swap(currIndex, this.getParentIndex(currIndex));
      currIndex = this.getParentIndex(currIndex);
    }
  }
  poll(){
    if(this.data.length === 0) return 0;
    if(this.data.length === 1) return this.data.pop();
    let minValue = this.data[0];
    this.data[0] = this.data.pop();

    this.heapifyDown(0);
    return minValue;
  }
  heapifyDown(currIndex){
    let smallest = currIndex;
    let leftChild = this.getLeftChildIndex(currIndex);
    let rightChild = this.getRightChildIndex(currIndex);

    if(leftChild < this.data.length && this.data[leftChild] < this.data[smallest]){
      smallest = leftChild;
    }
    if(rightChild < this.data.length && this.data[rightChild] < this.data[smallest]){
      smallest = rightChild;
    }
    if(smallest !== currIndex){
      this.swap(currIndex, smallest);
      this.heapifyDown(smallest);
    }
  }
  peek(){
    return this.data[0];
  }
  size(){
    return this.data.length;
  }
}

class KthLargest {
  constructor(k,nums){
    this.k = k;
    this.nums = nums;
    this.minHeap = new MinHeap();
    for(let num of this.nums){
      this.minHeap.push(num);
    }
  }
  add(val){
    this.minHeap.push(val);
    while(this.minHeap.size() > this.k){
      this.minHeap.poll();
    }
    return this.minHeap.peek();
  }
}
//In this we need MinHeap and MaxHeap both, divide the nums list into two part, left part will be in leftMaxHeap and right heap will be in rightMinHeap, left heap will be equal or just one big than rightHeap, for even, both Heap size will be same, return the heap top, and for odd, return the leftMaxHeap top.
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
    if(this.data.length === 0) return null;
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
      this.swap(smallest,currIndex);
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
//MaxHeap
class MaxHeap{
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
    while(currIndex > 0 && this.data[currIndex] > this.data[this.getParentIndex(currIndex)]){
      this.swap(currIndex, this.getParentIndex(currIndex));
      currIndex = this.getParentIndex(currIndex);
    }
  }
  poll(){
    if(this.data.length === 0) return null;
    if(this.data.length === 1) return this.data.pop();
    let maxValue = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);
    return maxValue;
  }
  heapifyDown(currIndex){
    let biggest = currIndex;
    let leftChild = this.getLeftChildIndex(currIndex);
    let rightChild = this.getRightChildIndex(currIndex);
    if(leftChild < this.data.length && this.data[leftChild] > this.data[biggest]){
      biggest = leftChild;
    }
    if(rightChild < this.data.length && this.data[rightChild] > this.data[biggest]){
      biggest = rightChild;
    }
    if(biggest !== currIndex){
      this.swap(biggest,currIndex);
      this.heapifyDown(biggest);
    }
  }
  peek(){
    return this.data[0];
  }
  size(){
    return this.data.length;
  }
}
class MedianFinder{
  constructor(){
    this.leftMaxHeap = new MaxHeap();
    this.rightMinHeap = new MinHeap();
  }
  addNum(num){
    if(this.leftMaxHeap.size() === 0 || this.leftMaxHeap.peek() > num){
      //if my mapHeap size is 0 OR top of Heap is bigger than comming num, then only add in leftMaxHeap else add in rightMax heap
      this.leftMaxHeap.push(num);
    }else{
      this.rightMinHeap.push(num);
    }

    if(Math.abs(this.leftMaxHeap.size() - this.rightMinHeap.size()) > 1){
      //difference of both heap not more than 1, till than push in right heap
      this.rightMinHeap.push(this.leftMaxHeap.poll());
    }else if(this.leftMaxHeap.size() < this.rightMinHeap.size()){
      //left heap not be less than right Heap, if yes, push in left heap.
      this.leftMaxHeap.push(this.rightMinHeap.poll());
    }
  }
  
  findMedian(){
    //for even list, both heap size will be same, so take out the peek and find out the median
    if(this.leftMaxHeap.size() === this.rightMinHeap.size()){
      return (this.leftMaxHeap.peek() + this.rightMinHeap.peek())/2;
    }else{
      //means odd, so just return the top of left, max one
      return this.leftMaxHeap.peek();
    }
  }
}
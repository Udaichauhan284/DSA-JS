class MinHeap {
  constructor() {
    this.data = [];
  }

  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIndex(idx) {
    return 2 * idx + 1;
  }
  getRightChildIndex(idx) {
    return 2 * idx + 2;
  }
  swap(i1, i2) {
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(key) {
    this.data[this.data.length] = key;
    this.heapifyUp();
  }
  heapifyUp() {
    let currIndex = this.data.length - 1;
    while (this.data[currIndex] < this.data[this.getParentIndex(currIndex)]) {
      this.swap(currIndex, this.getParentIndex(currIndex));

      currIndex = this.getParentIndex(currIndex);
    }
  }

  poll() {
    if(this.data.length === 0) return null;
    if(this.data.length === 1) return this.data.pop();
    let minValue = this.data[0];
    this.data[0] = this.data.pop();

    this.heapifyDown(0);

    return minValue;
  }
  heapifyDown(currIndex) {
    let smallestIndex = currIndex;
    let leftChild = this.getLeftChildIndex(currIndex);
    let rightChild = this.getRightChildIndex(currIndex);

    if(leftChild < this.data.length && this.data[leftChild] < this.data[smallestIndex]){
      smallestIndex = leftChild;
    }
    if(rightChild < this.data.length && this.data[rightChild] < this.data[smallestIndex]){
      smallestIndex = rightChild;
    }
    if(smallestIndex !== currIndex){
      this.swap(smallestIndex, currIndex);
      this.heapifyDown(smallestIndex);
    }
  }
  peek(){
    return this.data[0];
  }
}

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

//another method for MinHeap for pair push, this is good
class MinHeap1 {
  constructor() {
    this.data = [];
  }
  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIndex(idx) {
    return idx * 2 + 1;
  }
  getRightChildIndex(idx) {
    return idx * 2 + 2;
  }
  swap(i1, i2) {
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(pair) {
    this.data.push(pair);
    this.heapifyUp();
  }
  heapifyUp() {
    let idx = this.data.length - 1;
    while (idx > 0) {
      let parentIndex = this.getParentIndex(idx);
      if (this.data[idx][0] < this.data[parentIndex][0]) {
        this.swap(idx, parentIndex);
        idx = parentIndex;
      } else {
        break;
      }
    }
  }
  poll() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();
    let minValue = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);
    return minValue;
  }
  heapifyDown(idx) {
    while (true) {
      let smallest = idx;
      let left = this.getLeftChildIndex(idx);
      let right = this.getRightChildIndex(idx);
      if (
        left < this.data.length &&
        this.data[left][0] < this.data[smallest][0]
      ) {
        smallest = left;
      }
      if (
        right < this.data.length &&
        this.data[right][0] < this.data[smallest][0]
      ) {
        smallest = right;
      }
      if (smallest !== idx) {
        this.swap(idx, smallest);
        idx = smallest;
      } else {
        break;
      }
    }
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

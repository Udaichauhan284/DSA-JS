/* 846. Hand of Straights
hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
o/p: true
1. Method 1, use of Minheap, we need the smallest value and eed to chek the second samller value also maintain the count of value, if count of that value become zero we need to remove from the minHeap.
*/
class MinHeap{
  constructor(){
    this.data = [];
  }
  getParentIndex(idx){
    return Math.floor((idx-1)/2);
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
    while (currIndex > 0 && this.data[currIndex] < this.data[this.getParentIndex(currIndex)]) {
      this.swap(currIndex, this.getParentIndex(currIndex));
      currIndex = this.getParentIndex(currIndex);
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
  
  heapifyDown(currIndex) {
    let smallest = currIndex;
    let leftChild = this.getLeftChildIndex(currIndex);
    let rightChild = this.getRightChildIndex(currIndex);

    if (leftChild < this.data.length && this.data[leftChild] < this.data[smallest]) {
      smallest = leftChild;
    }
    if (rightChild < this.data.length && this.data[rightChild] < this.data[smallest]) {
      smallest = rightChild;
    }
    if (smallest !== currIndex) {
      this.swap(currIndex, smallest);
      this.heapifyDown(smallest);
    }
  }
  
  peek() {
    return this.data[0];
  }
  
  size() {
    return this.data.length;
  }
}
//Now main code start - O(nlogn), SC : O(2n)
const isNStraightHand =(hand, groupSize) => {
  //check is hadnlength divied by groupSize or not
  if(hand.length % groupSize !== 0) return false;

  let count = new Map();
  const minHeap = new MinHeap();

  for(let val of hand){
    count.set(val, (count.get(val) || 0)+1);
  }
  for(let val of count.keys()){
    minHeap.push(val);
  }

  while(minHeap.size() > 0){
    let currMin = minHeap.peek();
    for(let i=currMin; i<currMin+groupSize; i++){
      if(!count.has(i)) return false;
      count.set(i, count.get(i)-1);
      if(count.get(i) === 0){
        if(i !== minHeap.peek()) return false;
        minHeap.poll();
      }
    }
  }
  return true;
}
console.log(isNStraightHand([1,2,3,6,2,3,4,7,8],3));

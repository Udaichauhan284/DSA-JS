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

//06 June 2024 - Leetcode POTD 
/* In this we need to form a group from a hand in consecutive order
of groupSize, for this we can take a Map, where we put the freq.
TC: O(nlogn + n*groupSize) ~ O(nlogn), SC: O(n)
*/
var isNStraightHan1 = function(hand, groupSize) {
  let len = hand.length;
  // If len mod groupSize is not 0, these means we can't create groups
  if (len % groupSize !== 0) return false;

  let map = new Map();
  // Setting the frequency of hands in the map
  for (let value of hand) {
      map.set(value, (map.get(value) || 0) + 1);
  }

  // Convert map to an array and sort it to ensure we process in order
  let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);

  // Iterate over sorted keys
  for (let key of sortedKeys) {
      let freq = map.get(key);
      if (freq > 0) {
          // Try to form a group starting from current key
          for (let i = 0; i < groupSize; i++) {
              let currKey = key + i;
              if (map.get(currKey) == null || map.get(currKey) < freq) {
                  return false; // If we can't form the group
              }
              map.set(currKey, map.get(currKey) - freq);
              if (map.get(currKey) === 0) {
                  map.delete(currKey); // Clean up map
              }
          }
      }
  }
  return true;
};

/* *************************************************
****************************************************
****************************************************
*/
//This is a Good approach, follow this one
class MinHeap {
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

  push(key) {
      this.data.push(key);
      this.heapifyUp();
  }

  heapifyUp() {
      let idx = this.data.length - 1;
      while (idx > 0) {
          let parent = this.getParentIndex(idx);
          if (this.data[idx] < this.data[parent]) {
              this.swap(idx, parent);
              idx = parent;
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
          if (left < this.data.length && this.data[left] < this.data[smallest]) {
              smallest = left;
          }
          if (right < this.data.length && this.data[right] < this.data[smallest]) {
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

  peek() {
      return this.data[0];
  }

  isEmpty() {
      return this.data.length === 0;
  }

  size() {
      return this.data.length;
  }
}
//TC: O(m * logn), SC: O(n)+O(n) ~ O(n)
var isNStraightHand1 = function(hand, groupSize) {
  let len = hand.length;
  if (len % groupSize !== 0) return false;

  let count = new Map();
  for (let value of hand) { //O(n)
      count.set(value, (count.get(value) || 0) + 1);
  }

  let minHeap = new MinHeap();
  for (let value of count.keys()) { //O(m)
      minHeap.push(value);
  }

  while (minHeap.size() > 0) { //O(m * logn) 
      let currMin = minHeap.peek();
      for (let i = currMin; i < currMin + groupSize; i++) {
          if (!count.has(i)) return false;
          count.set(i, count.get(i) - 1);
          if (count.get(i) === 0) {
              count.delete(i);
              if(i !== minHeap.peek()) return false;
              minHeap.poll();
          }
      }
  }
  return true;
};

/* 23. Marge k sorted Lists

1. Approach 1. us ethe recursive call of merge2Soretd list for lists
2. use of minHeap.

*/
//Aproach 1 - use of recurisve call O(nk), Sc : O(n) for recrusive call
const mergeKLists = (list) => {
  let ans = null;
  for(let i=0; i<list.length; i++){
    ans = merge2SortedList(ans,lists[i]);
  }
  return ans;
}
function merge2SoretdList(l1,l2){
  if(!l1) return l2;
  if(!l2) return l1;

  if(l1.val < l2.val){
    l1.next = merge2SoretdList(l1.next,l2);
    return l1;
  }
  else {
    l2.next = merge2SoretdList(l2.next,l1);
    return l2;
  }
}

//Approach 2- use of Minheap
//MinHeap
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
    if (this.data.length === 0) return 0;
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
    return this.data[0]
  }
  size() {
    return this.data.length;
  }
}
//Aproach 2. use of minHeap, O(nlogk) ~ O(nlogn), SC : O(n)
var mergeKLists1 = function (lists) {
  const minHeap = new MinHeap();
  
  // Push the initial node values of all lists to the minHeap
  for(let list of lists){
    let currNode = list;
    if(currNode){
      minHeap.push(currNode.val);
      currNode = currNode.next;
    }
  }

  //construct the list
  const dummyNode = new ListNode();
  let currNode = dummyNode;
  while(minHeap.size() > 0){
    currNode.next = new ListNode(minHeap.poll());
    currNode = currNode.next;
  }
  return dummyNode.next;
};
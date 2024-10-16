/* 1405. Longest Happy String
16 Oct 2024, Leetcode POTD, String, MaxHeap, Greedy

Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
*/

/*In this we need to create the longest string, so we take a 
maxheap for maintain the largect freq char on top, so that we
can form longest string easily, and we check with result str
2 char back if that matching with currchar if yes, then we take
second max char for pushing in result, and then we check if 
freq-- > 0 we again push in maxHeap. TC: O(a+b+c), SC: O(3)
as maxHeap length will be always 3 ~ O(1)
*/
const longestDiverseString = (a, b, c) => {
  let result = "";
  let maxHeap = new MaxHeap();
  //now check the freq of a,b,c and if > 0 then only push
  if (a > 0) {
    maxHeap.push([a, "a"]); //freq, char
  }
  if (b > 0) {
    maxHeap.push([b, "b"]);
  }
  if (c > 0) {
    maxHeap.push([c, "c"]);
  }
  //now loop on maxHeap, for finding the freq and making the longest happy string
  while (!maxHeap.isEmpty()) {
    let [currFreq, currChar] = maxHeap.poll();
    //now check this currChar with result previous two char
    if (
      result.length >= 2 &&
      result[result.length - 1] === currChar &&
      result[result.length - 2] === currChar
    ) {
      //measn we cant take currChar, need to take next top
      //maxfreq one char, nut before taking next one, check
      //if maxHeap.isEmpty or not
      if (maxHeap.isEmpty()) {
        break;
      }
      //now take nextChar
      let [nextFreq, nextChar] = maxHeap.poll();
      result += nextChar;
      nextFreq--;
      //now check for nextFreq > 0
      if (nextFreq > 0) {
        maxHeap.push([nextFreq, nextChar]);
      }
    } else {
      //measn we can use currCHar
      result += currChar;
      currFreq--;
    }
    //now check the currFreq
    if (currFreq > 0) {
      maxHeap.push([currFreq, currChar]);
    }
  }
  return result;
};

//maxHeap
class MaxHeap {
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
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  push(pair) {
    this.data.push(pair);
    this.heapifyUp();
  }
  heapifyUp() {
    let idx = this.data.length - 1;
    while (idx > 0) {
      let parentIndex = this.getParentIndex(idx);
      if (this.data[idx][0] > this.data[parentIndex][0]) {
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
    let maxValue = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown(0);
    return maxValue;
  }
  heapifyDown(idx) {
    while (true) {
      let largest = idx;
      let left = this.getLeftChildIndex(idx);
      let right = this.getRightChildIndex(idx);
      if (
        left < this.data.length &&
        this.data[left][0] > this.data[largest][0]
      ) {
        largest = left;
      }
      if (
        right < this.data.length &&
        this.data[right][0] > this.data[largest][0]
      ) {
        largest = right;
      }
      if (idx !== largest) {
        this.swap(idx, largest);
        idx = largest;
      } else {
        break;
      }
    }
  }
  isEmpty() {
    return this.data.length === 0;
  }
  size() {
    return this.data.length;
  }
}

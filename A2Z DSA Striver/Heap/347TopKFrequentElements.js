//Brute Method - use of Map for freq and then store the freq in arr, sort the array according the freq in descending order, and return the result TC : O(3nlogn) +O(k) ~ O(nlogn), SC : O(2n)
var topKFrequent = function(nums, k) {
  let map = new Map();
  let freqArr = [];
  let result = [];

  //put the freq into map
  for(let num of nums){ //O(n)
    map.set(num, (map.get(num) || 0)+1);
  }

  //now the freq and num into freqArr
  for(let [num,freq] of map){ //O(n)
    freqArr.push({num,freq});
  }

  //sort the freq in descending order
  freqArr.sort((a,b) => b.freq-a.freq); //O(nlogn)
  for(let i=0; i<k; i++){ //O(k)
    result.push(freqArr[i].num);
  }
  return result;
};


//Method 2 - use of MinHeap, in MinHeap we are storing the {freq, num}, so at place of key, we need to take the obj. and form the minHeap, according the freq. if size > k, then we poll and then we push the peek into result.
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
  push(obj) { //for this question we are pushing the freq and num, obj
    this.data[this.data.length] = obj;
    this.heapifyUp();
  }
  heapifyUp() {
    let currIndex = this.data.length - 1;
    while (currIndex > 0 && this.data[currIndex].freq < this.data[this.getParentIndex(currIndex)].freq) {
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

    if(leftChild < this.data.length && this.data[leftChild].freq < this.data[smallestIndex].freq){
      smallestIndex = leftChild;
    }
    if(rightChild < this.data.length && this.data[rightChild].freq < this.data[smallestIndex].freq){
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
  size(){
    return this.data.length;
  }
}
 //Method 2, use of Map, for freq and MinHeap, which is by its freq, when size > k, poll from minHeap and then return the ans; TC : O(nlog(n-k)), SC : O(2n)
var topKFrequent = function(nums, k) {
    let minHeap = new MinHeap();
    let map = new Map();
    let result = [];

    //store the freq in map
    for(let num of nums){ //O(n)
      map.set(num, (map.get(num) || 0)+1);
    }

    //store in minHeap by its freq
    for(let [num,freq] of map){ //O(logn-k)
      minHeap.push({freq,num}); 

      //check the check also
      if(minHeap.size() > k){
        minHeap.poll();
      }
    }

    //now push into result
    while(minHeap.size() !== 0){
      result.push(minHeap.poll().num);
    }
    return result;
};

 //Method 3: use of bucket sort, 1.map for freq, 2. bucket to store the elem at that freq, bucket[i]-element at i freq, and then find out the elem and push into result, TC : O(3n) ~ O(n), SC : O(n);
const topKFrequent1 = (nums,k) =>{
  let len = nums.length;
  let map = new Map();
  let bucket = new Array(len+1).fill().map(() => []);
  let result = [];

   //store the freq into map
   for(let num of nums){ //O(n)
    map.set(num, (map.get(num) || 0)+1);
  }
  //traverse over the map to store the elem for that freq into bucket
  for(let [num,freq] of map){
    bucket[freq].push(num);
  }

     //now traverse into bucket from right to left, as we need high freq number
  for(let i=len; i>=0; i--){
    if(bucket[i].length === 0){
      continue;
    }
    while(bucket[i].length > 0 && k > 0){
      result.push(bucket[i].pop());
      k--;
    }
  }
  return result;
}
console.log(topKFrequent1([1,1,1,2,2,3],2));
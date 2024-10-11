/* 1942 The Number of the Smallest Unoccupied Chair
11 Oct 2024, Leetcode POTD

Input: times = [[1,4],[2,3],[4,6]], targetFriend = 1
Output: 1
Explanation: 
- Friend 0 arrives at time 1 and sits on chair 0.
- Friend 1 arrives at time 2 and sits on chair 1.
- Friend 1 leaves at time 3 and chair 1 becomes empty.
- Friend 0 leaves at time 4 and chair 0 becomes empty.
- Friend 2 arrives at time 4 and sits on chair 0.
Since friend 1 sat on chair 1, we return 1.
*/

/*Brute Method-sort the time based on arivaltime, then
in loop on chairs, see if chair <= arival , set the depart
value in chair and then only check if arrival equals to 
targetFriendArrivalTime, if yes return i and break
TC: O(n^2), SC: O(n)
*/
var smallestChair = function (times, targetFriend) {
  let len = times.length;
  let chairs = Array(len).fill(-1);
  let targetFriendArrivalTime = times[targetFriend][0];
  //need to sort the times, based on arrival time
  times.sort((a, b) => a[0] - b[0]);
  //now traverse over the times and then chairs
  for (let [arrival, leaving] of times) {
    for (let i = 0; i < len; i++) {
      if (chairs[i] <= arrival) {
        //occupied that chair and set the leaving
        chairs[i] = leaving;

        if (arrival === targetFriendArrivalTime) {
          return i;
        }
        break;
      }
    }
  }
  return -1;
};

/*In this we will take two MinHeap, for getting the least
time leaving with its chair on top of heap and also other 
minHeap is used to maintain the freeChair, which are 
aviable for seating. TC: O(nlogn), SC: O(n)
*/
const smallestChair = (times, targetFriend) => {
  let len = times.length;
  let targetFriendArrivalTime = times[targetFriend][0];
  let occupied = new MinHeap(); //leaving time, chair
  let free = new MinHeap(); //free chair number
  //need to sort the times also, based on arrival
  times.sort((a, b) => a[0] - b[0]);
  let chair = 0; //this will go in occupied Heap
  for (let [arrival, leaving] of times) {
    while (!occupied.isEmpty() && occupied.top()[0] <= arrival) {
      //occupied ka leaving time is small then curr arrival
      //time, so push the chair into free one
      free.push([occupied.top()[1]]);
    }

    if (free.isEmpty()) {
      occupied.push([leaving, chair]);
      //now check for arrival time
      if (arrival === targetFriendArrivalTime) {
        return chair;
      }
      chair++;
    } else {
      //now check with top of free chair
      let leastFreeChair = free.poll()[0];
      if (arrival === targetFriendArrivalTime) {
        return leastFreeChair;
      }
      //otherwise occupy that chair
      occupied.push([leaving, leastFreeChair]);
    }
  }
  return -1;
};

class MinHeap {
  constructor(){
      this.data = [];
  }
  getParentIndex(idx){
      return Math.floor((idx-1)/2);
  }
  getLeftChildIndex(idx){
      return idx * 2 + 1;
  }
  getRightChildIndex(idx){
      return idx * 2 + 2;
  }
  swap(i1, i2){
      [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  push(pair){
      this.data.push(pair);
      this.heapifyUp();
  }
  heapifyUp(){
      let idx = this.data.length-1;
      while(idx > 0){
          let parentIndex = this.getParentIndex(idx);
          if(this.data[idx][0] < this.data[parentIndex][0]){
              this.swap(idx, parentIndex);
              idx = parentIndex;
          }else{
              break;
          }
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
  heapifyDown(idx){
      while(true){
          let smallest = idx;
          let left = this.getLeftChildIndex(idx);
          let right = this.getRightChildIndex(idx);
          if(left < this.data.length && this.data[left][0] < this.data[smallest][0]){
              smallest = left;
          }
          if(right < this.data.length && this.data[right][0] < this.data[smallest][0]){
              smallest = right;
          }
          if(smallest !== idx){
              this.swap(smallest, idx);
              idx = smallest;
          }else{
              break;
          }
      }
  }
  isEmpty(){
      return this.data.length === 0;
  }
  top(){
      return this.data[0];
  }
}

/* 1792.Maximum Average Passs Ration
15 Dec 2024, Leetcode POTD, array, maths, maxheap

Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
Output: 0.78333
Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.
*/

/*In brute method, we find the PR(passing ratio) and for curr one
and then in loop of we will find will add 1 studen and then
find the updatePR, and then we do the differnce ot it, and we check
if the delta is less the best delta, that is our ans
TC:O(extraStudents * n), SC: O(n), TLE
*/
var maxAverageRatio = function(classes, extraStudents) {
  let len = classes.length;
  let PR = [];
  for(let i=0; i<len; i++){
      let ratio = classes[i][0] / classes[i][1];
      PR[i] = ratio;
  }
  while(extraStudents--){
      let updatePR = [];
      for(let i=0; i<len; i++){
          let newRatio = (classes[i][0] + 1) / (classes[i][1] + 1);
          updatePR[i]=newRatio;
      }
      let bestIdx = 0;
      let bestDelta =0;
      for(let i=0; i<len; i++){
          let delta = updatePR[i] - PR[i];
          if(delta > bestDelta){
              bestDelta = delta;
              bestIdx = i;
          }
      }
      //now update the PR, with best one
      PR[bestIdx] = updatePR[bestIdx];
      classes[bestIdx][0]++;
      classes[bestIdx][1]++;
  }
  let result = 0;
  for(let i=0; i<len; i++){
      result += PR[i];
  }
  return result/len;
};


/*In Optimal Method, we use the MaxHeap, to find the maxDelta and in that
we add the extra student so that we find the max average,
TC: O(extraStudents * logn), SC: O(n)
*/
var maxAverageRatio = function(classes, extraStudents) {
  let len = classes.length;
  let maxHeap = new MaxHeap();
  for(let i=0; i<len; i++){
      //here we find the current PR and updatePR, after adding one
      //to it.and then we find the difference and store that into
      //maxHeap
      let currPR = classes[i][0] / classes[i][1];
      let newPR = (classes[i][0]+1) / (classes[i][1] + 1);
      let delta = newPR - currPR;
      maxHeap.push([delta, i]);
  }
  while(extraStudents--){
      let [maxDelta, idx] = maxHeap.poll();
      //we only need the idx, maxHeap will sort based on delta
      //add students into that idx
      classes[idx][0]++;
      classes[idx][1]++;
      //now we need to find the for the next student, PR and push into
      //maxHeap
      currPR = classes[idx][0] /classes[idx][1];
      newPR = (classes[idx][0]+1) / (classes[idx][1] + 1);
      delta = newPR-currPR;
      maxHeap.push([delta, idx]);
  }
  let result = 0;
  for(let i=0; i<len; i++){
      result += classes[i][0] / classes[i][1];
  }
  return result / len;
};
class MaxHeap{
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
      while(idx>0){
          let parent = this.getParentIndex(idx);
          if(this.data[idx][0] > this.data[parent][0]){
              this.swap(idx, parent);
              idx = parent;
          }else{
              break;
          }
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
  heapifyDown(idx){
      while(true){
          let largest = idx;
          let left = this.getLeftChildIndex(idx);
          let right = this.getRightChildIndex(idx);
          if(left < this.data.length && this.data[left][0] > this.data[largest][0]){
              largest = left;
          }
          if(right < this.data.length && this.data[right][0] > this.data[largest][0]){
              largest = right;
          }
          if(largest !== idx){
              this.swap(idx, largest);
              idx = largest;
          }else{
              break;
          }
      }
  }
  isEmpty(){
      return this.data.length === 0;
  }
}
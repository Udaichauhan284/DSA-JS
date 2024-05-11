/* 857. Minimum Cost to Hire K Workers
Example 1:

Input: quality = [10,20,5], wage = [70,50,30], k = 2
Output: 105.00000
Explanation: We pay 70 to 0th worker and 35 to 2nd worker.
*/
//This is Brute Method, use of MaxHeap (Prioritt Queue), in js at place of pq use simple array,here we need k least amount of money, so sort the array in Descending order, so when pq.length > k, we remove from front and we remove most wage one, with this we get the kth least amoonot. OR we can simple use MaxHeap, but here we have to implement MaxHeap. TC: O(n^2*klogK), SC: O(n+k)
// var mincostToHireWorkers = function(quality, wage, k) {
//     let n = quality.length;
//     let result = Number.MAX_VALUE;

//     for(let fixWorker = 0; fixWorker < n; fixWorker++){ //O(n)
//         let fixWorkerRatio = wage[fixWorker] / quality[fixWorker];

//         let groups = [];
//         for(let worker = 0; worker < n; worker++){ //O(n)
//             let workerWage = fixWorkerRatio * quality[worker];
//             if(workerWage >= wage[worker]){
//                 groups.push(workerWage);
//             }
//         }

//         if(groups.length < k){
//             continue;
//         }

//         const pq = [];
//         let sum = 0;
//         for(let wage of groups){ //O(klogk)
//             sum += wage;
//             pq.push(wage);
//             pq.sort((a,b) => b-a);
//             if(pq.length > k){
//                 sum -= pq.shift();
//             }
//         }

//         result = Math.min(result, sum);
//     }
//     return result;
// };

//Solve Using MaxHeap - Priority Queue
class MaxHeap {
  constructor() {
      this.data = [];
  }
  getParentIndex(idx) {
      return Math.floor((idx - 1) / 2);
  }
  getLeftChildIndex(idx) {
      return (2 * idx) + 1
  }
  getRightChildIndex(idx) {
      return(2 * idx) + 2;
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
      while (this.data[currIndex] > this.data[this.getParentIndex(currIndex)]) {
          this.swap(currIndex, this.getParentIndex(currIndex));
      }
      currIndex = this.getParentIndex(currIndex);
  }
  poll() {
      if (this.data.length === 0) return null;
      if (this.data.length === 1) return this.data.pop();
      const maxValue = this.data[0];
      this.data[0] = this.data.pop();
      this.heapifyDown(0); //0-currIndex
      return maxValue;
  }
  heapifyDown(currIndex) {
      let biggestIndex = currIndex;
      let leftChild = this.getLeftChildIndex(currIndex);
      let rightChild = this.getRightChildIndex(currIndex);

      if (leftChild < this.data.length && this.data[leftChild] > this.data[biggestIndex]) {
          biggestIndex = leftChild;
      }
      if (rightChild < this.data.length && this.data[rightChild] > this.data[biggestIndex]) {
          biggestIndex = rightChild;
      }

      if (biggestIndex !== currIndex) {
          this.swap(biggestIndex, currIndex);
          this.heapifyDown(biggestIndex);
      }
  }
  peek() {
      return this.data[0];
  }
}
//TC : O(n*(n+nlogn+klogk)) ~ O(n^2logK), SC: O(n+k)
//This will give TLC.
const mincostToHireWorkers = (quality, wage, k) => {
  let n = quality.length;
  let result = Number.MAX_VALUE;

  for (let fixWorker = 0; fixWorker < n; fixWorker++) { //O(n)
      let fixWorkerRatio = wage[fixWorker] / quality[fixWorker];

      let groups = [];
      for (let worker = 0; worker < n; worker++) { //O(n)
          let workerWage = fixWorkerRatio * quality[worker];
          if (workerWage >= wage[worker]) {
              groups.push(workerWage);
          }
      }

      if (groups.length < k) {
          continue;
      }

      groups.sort((a,b) => b-a); //O(nlogn)
      const maxHeap = new MaxHeap();
      let sum = 0;
      for (let wage of groups) { //O(klogk)
          sum += wage;
          maxHeap.push(wage);
          if (maxHeap.data.length > k) {
              sum -= maxHeap.poll();
          }
      }

      result = Math.min(result, sum);
  }
  return result;
};

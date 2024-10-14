/* 632 Smallest Range Covering Elements from K Lists
13 Oct 2024, Leetcode POTD

Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
Output: [20,24]
Explanation: 
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].
*/

/*Better Method-use the arr of nums.length for stroing the
index of lists, so that we can keep track of min and max el
from all list in nums, so that we can find the min len 
range. TC: O(n*k), k is size of nums have list
SC: O(k)
*/
var smallestRange = function (nums) {
  let k = nums.length;
  let listPointerArr = Array(k).fill(0); //[0,0,0];
  let startRange = 0;
  let endRange = Infinity;

  while (true) {
      let minEl = Infinity;
      let maxEl = -Infinity;
      let minElListIdx = 0;
      //now find the range, traverse in listPointerArr
      for(let i=0; i<k; i++){
          let listIdx = i;
          let elIdx = listPointerArr[i];
          let element = nums[listIdx][elIdx];
          if(element < minEl){
              minEl = element;
              minElListIdx = listIdx;
          }
          maxEl = Math.max(maxEl, element);
      }
      //now compare with result range
      if(maxEl - minEl < endRange - startRange){
          startRange = minEl;
          endRange = maxEl;
      }
      //now short the range with moving the minEl
      let nextIndex = listPointerArr[minElListIdx]+1;
      if(nextIndex > nums[minElListIdx].length){
          break;
      }
      listPointerArr[minElListIdx] = nextIndex;
  }
return [startRange, endRange];
};


/*Optimal Method, previously we have managing the arr of k size
for getting the min and max value, so for minvalue, we can have
minHeap and in that we push [minValue, listIdx, elementIdx]
and the same logic will be same for finding the range.
TC: O(n * log(k)), SC: O(n)
*/
var smallestRange = function(nums) {
  let k = nums.length;
  const minHeap = new MinPriorityQueue({priority: x => x[0]});
  let maxValue = -Infinity;
  //now fill the minHeap
  for(let i=0; i<k; i++){
      minHeap.enqueue([nums[i][0], i, 0]); //minValue, listIdx, elemIdx
      maxValue = Math.max(maxValue, nums[i][0]);
  }
  let startRange = 0;
  let endRange = Infinity;
  while (!minHeap.isEmpty()) {
      const [minValue, row, col] = minHeap.dequeue().element;
      
      // Update the smallest range
      if (maxValue - minValue < endRange - startRange) {
          startRange = minValue;
          endRange = maxValue;
      }
      
      // Move to the next element in the current list
      let nextIndex = col+1;
      if (nextIndex < nums[row].length) {
          minHeap.enqueue([nums[row][nextIndex], row, nextIndex]);
          maxValue = Math.max(maxValue, nums[row][nextIndex]);
      } else {
          break; // One list is exhausted
      }
  }
  return [startRange, endRange];
};

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
  let result = [-1000000, 1000000]; //for ans 

  while (true) {
      let minEl = Number.MAX_VALUE;
      let maxEl = Number.MIN_VALUE;
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
      if(maxEl - minEl < result[1] - result[0]){
          result[0] = minEl;
          result[1] = maxEl;
      }
      //now short the range with moving the minEl
      let nextIndex = listPointerArr[minElListIdx]+1;
      if(nextIndex > nums[minElListIdx].length){
          break;
      }
      listPointerArr[minElListIdx] = nextIndex;
  }
return result;
};
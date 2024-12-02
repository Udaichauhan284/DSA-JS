/* 02 Dec 2024,
643 Maximum Average Subarray I

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
*/
const findMaxAverage = (nums, k) => {
  let len = nums.length;
  let leftPtr = 0, rightPtr = 0;
  let total = 0;
  let maxAvg = Number.NEGATIVE_INFINITY;
  while(rightPtr < len){
    total += nums[rightPtr];
    if(rightPtr-leftPtr+1 > k){
      //need to remove from left
      total -= nums[leftPtr];
      leftPtr++;
    }
    if(rightPtr-leftPtr+1 === k){
      maxAvg = Math.max(maxAvg, total/k);
    }
    rightPtr++;
  }
  return maxAvg;
}
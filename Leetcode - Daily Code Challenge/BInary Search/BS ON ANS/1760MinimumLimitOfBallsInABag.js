/* 1760. Minimum Limit of Balls in a Bag
07 Dec 2024, Leetcode POTD, Array, Binary Search, can use MaxHeap, but that will fail

Input: nums = [9], maxOperations = 2
Output: 3
Explanation: 
- Divide the bag with 9 balls into two bags of sizes 6 and 3. [9] -> [6,3].
- Divide the bag with 6 balls into two bags of sizes 3 and 3. [6,3] -> [3,3,3].
The bag with the most number of balls has 3 balls, so your penalty is 3 and you should return 3.
*/

/*In this question, we need to minimize the maximum, penatky,
so in this, we doing Minimize of Maxi so here we can use Binary
Search on Ans, concept, we know the rnage of where we can get
the mini pently which is 1 and maxofnums. in this range we use
Binary Search.
TC: O(nlog(MAX)), SC: O(1)
*/
var minimumSize = function(nums, maxOperations) {
  let maxNum = Number.MIN_VALUE;
  for(let num of nums){
      if(num > maxNum){
          maxNum = num;
      }
  }
  let left = 1;
  let right = maxNum;
  //now we do the Binary Search
  while(left <= right){
      let mid = left + Math.floor((right-left)/2);
      if(isPossible(nums, maxOperations, mid)){
          result = mid;
          //we mant more mini, so move right
          right = mid-1;
      }else{
          left = mid+1;
      }
  }
  return result;
};
function isPossible(nums,maxOps,mid){
  let totalOps = 0;
  for(let num of nums){
      //here we divide the nums
      let ops = Math.floor(num / mid);
      if(num % mid === 0){
          ops -= 1; //if we able to divide that num by mid
          //so we mins one
      }
      totalOps += ops;
  }
  if(totalOps > maxOps){
      return false;
  }
  return true;
}
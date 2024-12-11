/* 2779. Maximum Beauty of an Array After Applying Operation
11 Dec 2024, Leetcode POTD, Array, Binary Search

Input: nums = [4,6,1,2], k = 2
Output: 3
Explanation: In this example, we apply the following operations:
- Choose index 1, replace it with 4 (from range [4,8]), nums = [4,4,1,2].
- Choose index 3, replace it with 4 (from range [0,4]), nums = [4,4,1,4].
After the applied operations, the beauty of the array nums is 3 (subsequence consisting of indices 0, 1, and 3).
It can be proven that 3 is the maximum possible length we can achieve.
*/

/*IN this we can use Binary Search, x = nums[i] and 
y = x + 2k, so for finding the futher y, for max num
we can use Binary Search, Upper Bound
TC: O(nlogn), SC: O(1)
*/
var maximumBeauty = function(nums, k) {
  let len = nums.length;
  let result = 0;
  //need to sort the nums
  nums.sort((a,b) => a-b);
  //now find the result
  for(let i=0; i<len; i++){
      let x = nums[i];
      let y = x + 2*k;
      let mostRightOne = binarySearch(nums, y);
      result = Math.max(result, mostRightOne - i+1);
  }
  return result;
};
function binarySearch(nums, target){
  let left = 0;
  let right = nums.length-1;
  let result = -1;
  while(left <= right){
      let mid = left + Math.floor((right-left)/2);
      if(nums[mid] <= target){
          result = mid;
          left = mid+1;
      }else{
          right = mid-1;
      }
  }
  return result;
}
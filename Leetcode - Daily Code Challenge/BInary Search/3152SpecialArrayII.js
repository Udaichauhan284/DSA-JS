/* 3152. Special Array II
09 Dec 2024, Leetcode POTD, Array, Nested Loop, Binary Search

Input: nums = [3,4,1,2,6], queries = [[0,4]]
Output: [false]
Explanation:
The subarray is [3,4,1,2,6]. 2 and 6 are both even.
*/

/*Method 2-in this we need to first find the violating
index, by simplying checking on left side, in one loop
after that we need to find the violating index in range
start+1 to end, using Binary Search
TC: O(n * mlogn), SC: O(m)
*/
var isArraySpecial = function(nums, queries) {
  let len = nums.length;
  let result = [];
  let violateIdxArr = [];

  // Step 1: Identify violating indices
  for (let i = 1; i < len; i++) {
      if (nums[i] % 2 === nums[i - 1] % 2) {
          // Violation found, add index to the array
          violateIdxArr.push(i);
      }
  }

  // Step 2: Check each query range for violations
  for (let [start, end] of queries) {
      let hasViolatingIndex = binarySearch(violateIdxArr, start + 1, end);

      // If no violation found, push true; otherwise, push false
      result.push(!hasViolatingIndex);
  }

  return result;
};

function binarySearch(arr, start, end) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (arr[mid] < start) {
          left = mid + 1; // Focus on the right part
      } else if (arr[mid] > end) {
          right = mid - 1; // Focus on the left part
      } else {
          // Violation index is within range
          return true;
      }
  }

  // No violating index found within range
  return false;
}
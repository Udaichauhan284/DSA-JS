/* LC HARD 689 Maximum Sum of 3 Non Overlapping Subarrays.
28 Dec 2024, Leetcode POTD, Array, DP, Sliding Window for Subarray Sum, then we have option to
to chose that index of not, so recursion + memoization.

Input: nums = [1,2,1,2,6,7,5,1], k = 2
Output: [0,3,5]
Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.
*/

/*In this we have option to take the index or not take it, so we can use
the recursion + memoization DP, so int solve function we will call 
the helper function this helper func will give us the subarray sum
of i, and we will use sliding window for calculationg subsarray sum
TC: slinding window O(n), solve: O(n), Helper: O(n*m) with memoization
TC: O(n+n+n) ~ O(3n) ~ O(n), SC: O(n*m), m count SC: O(n)
*/
var maxSumOfThreeSubarrays = function(nums, k) {
  // first store all the subarray sum, using the Sliding window
  let len = nums.length;
  let subArraySum = []; // Changed to use an empty array
  // sliding window
  let left = 0, right = 0;
  let windowSum = 0;
  //sliding window
  while(right < len){
      windowSum += nums[right];
      if(right-left+1 === k){
          subArraySum.push(windowSum);
          windowSum -= nums[left];
          left++;
      }
      right++;
  }

  let result = []; // this is what we return

  // now take the dp array, this helps us in memoizing the helper function
  // because in that we have ind, count moving
  let dp = Array.from({ length: len + 1 }, () => Array(4).fill(-1));

  // call the solve function, in this we will start from i index
  // or not start from i index, start from i+1;
  solve(subArraySum, 0, 3, k, result, dp);
  return result;
};

function solve(arr, ind, count, k, result, dp) {
  // base case
  if (count === 0) { // if count becomes 0
      return;
  }
  if (ind >= arr.length) { // if ind crosses the arr size
      return;
  }

  // now we have options to take and not
  // in starting from currIndex, we will add the currSubarr sum and also
  // call the helper function for finding the other sum. 
  // we have taken curr ind, so the next one will be from i+k, decrease the 
  // count size
  let startFromInd = arr[ind] + helper(arr, ind+k, count-1, k, dp);

  // now we will skip that index and start from ind+1
  let notStartFromInd = helper(arr, ind+1, count, k, dp);

  // now we compare the sum from both and push the max one
  if (startFromInd >= notStartFromInd) {
      result.push(ind); // push curr ind
      // call the solve method, we have taken that ind
      solve(arr, ind+k, count-1, k, result, dp);
  } else {
      solve(arr, ind + 1, count, k, result, dp);
  }
}

function helper(arr, ind, count, k, dp) {
  // base case
  if (count === 0) {
      return 0; // return 0 sum
  }
  if (ind >= arr.length) {
      // if ind crosses the arr length, return the min value
      // means invalid value
      return -Infinity; 
  }

  // now check the dp array
  if (dp[ind][count] !== -1) {
      return dp[ind][count];
  }

  // now we have again two options: to take curr and add 
  // and not take curr one, move ind+1
  let take = arr[ind] + helper(arr, ind + k, count - 1, k, dp);
  let notTake = helper(arr, ind + 1, count, k, dp);

  dp[ind][count] = Math.max(take, notTake);
  return dp[ind][count];
}
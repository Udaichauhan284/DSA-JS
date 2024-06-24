/* 995. Minimum Number of K Consecutive Bit Flips
24 June 2024, Leetcode POTD, Array, Sliding Window
You are given a binary array nums and an integer k.

A k-bit flip is choosing a subarray of length k from nums and simultaneously changing every 0 in the subarray to 1, and every 1 in the subarray to 0.

Return the minimum number of k-bit flips required so that there is no 0 in the array. If it is not possible, return -1.

A subarray is a contiguous part of an array.

Input: nums = [0,1,0], k = 1
Output: 2
Explanation: Flip nums[0], then flip nums[2].
*/
/*Brute Method - iterator over nums and check if it 0, then from that i
to k flip the elem, and incrase the count for that.
TC: O(n*k), SC: O(1) 
*/
var minKBitFlips = function (nums, k) {
  let n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (i + k > n) return -1;
      for (let j = 0; j < k; j++) {
        nums[i + j] ^= 1; //we need to do XOR
      }
      count++;
    }
  }
  //check it all 1's
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 1) {
      return -1;
    }
  }
  return count;
};

/* Optimal 1.  
TC: O(n), SC: O(n)
*/
var minKBitFlips = function (nums, k) {
  let n = nums.length;
  let flipsCount = 0;
  let flipCountForCurrI = 0;
  let isFlipped = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (i >= k && isFlipped[i - k] === true) {
      flipCountForCurrI--;
    }
    if (flipCountForCurrI % 2 === nums[i]) {
      if (i + k > n) return -1;
      flipCountForCurrI++;
      isFlipped[i] = true;
      flipsCount++;
    }
  }
  return flipsCount;
};

/* Optimal 2. we know at max flip will be 2, so we remove array for isFlipped  
TC: O(n), SC: O(1)
*/
var minKBitFlips = function (nums, k) {
  let n = nums.length;
  let flipsCount = 0;
  let flipCountForCurrI = 0;
  for (let i = 0; i < n; i++) {
    if (i >= k && nums[i - k] === 2) {
      flipCountForCurrI--;
    }
    if (flipCountForCurrI % 2 === nums[i]) {
      if (i + k > n) return -1;
      flipCountForCurrI++;
      nums[i] = 2;
      flipsCount++;
    }
  }
  return flipsCount;
};

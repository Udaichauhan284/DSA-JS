/* 523. Continuous Subarray Sum
08 June 2024 Leetcode POTD, TOpic: Array, Module, HashMap, Prefix sum, subarray
Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:
its length is at least two, and
the sum of the elements of the subarray is a multiple of k.

Note that:
A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

Example 1:
Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

Example 2:
Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
*/
/* Method-1, Start finding all the subarray and add them adn see 
if that is modulo by k , then yes it is true.
TC: O(n^2)
SC: O(1)
*/
var checkSubarraySum = function (nums, k) {
  let len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = nums[i];
    for (let j = i + 1; j < len; j++) {
      sum += nums[j];
      if (k === 0) {
        if (sum === 0) return true;
      } else {
        if (sum % k === 0) return true;
      }
    }
  }
  return false;
};

/* Method 2- basic math, when we do mod of 31%4 = 3
so if we add any multiple of 4 in 31 - 31+8 = 39 and do mod
39%4 we still get the same remainder 3.
so with this method we take a map and store the remainder and see
if currReme is present in map, is yes, we find the len >= 2
and return true. else false
TC: O(n), SC: O(n)
*/
var checkSubarraySum1 = function (nums, k) {
  let n = nums.length;
  let sum = 0;
  let map = new Map();
  map.set(0, -1); //edge case if remainder 0 so index val -1;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    let remainder = sum % k;
    //check in map
    if (map.has(remainder)) {
      //if there in map, so find the len with that index
      if (i - (map.get(remainder) || 0) >= 2) {
        return true;
      }
    } else {
      map.set(remainder, i);
    }
  }
  return false;
};

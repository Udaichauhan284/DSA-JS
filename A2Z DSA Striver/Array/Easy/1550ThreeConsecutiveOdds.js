/* 1550 Three Consecutive Odds
1 July 2024, Leetcode POTD, Array
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
*/

/*In this we need to find 3 consecutive odd number, as we know odd num
right most bit will be set 1.
we need to find it. whose arr elem comes to 1 will be odd.
how to find it, do AND with 1. ex. 5-111&1 -> 1
TC: O(n), SC: O(1)
*/
var threeConsecutiveOdds = function (arr) {
  let n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    if (arr[i] & 1 && arr[i + 1] & 1 && arr[i + 2] & 1) {
      return true;
    }
  }
  return false;
};

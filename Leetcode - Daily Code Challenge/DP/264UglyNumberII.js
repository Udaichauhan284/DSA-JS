/* 264 Ugly Number II
18 August 2024, Leetcode POTD, Array, DP
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.
Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
*/

//O(n), SC: O(n)
var nthUglyNumber = function(n) {
  let arr = Array(n+1).fill(0);
  arr[1] = 1; //1position ugly number will be 1

  let i2 = 1;
  let i3 = 1;
  let i5 = 1;

  for(let i=2; i<=n; i++){
      let i2UglyNum = arr[i2] * 2;
      let i3UglyNum = arr[i3] * 3;
      let i5UglyNum = arr[i5] * 5;

      let minUglyNum = Math.min(i2UglyNum, Math.min(i3UglyNum, i5UglyNum));
      arr[i] = minUglyNum;

      if(minUglyNum === i2UglyNum) i2++;
      if(minUglyNum === i3UglyNum) i3++;
      if(minUglyNum === i5UglyNum) i5++;
  }
  return arr[n];
};
/* 2134. Minimum Swaps to Group All 1's Together II
02 August 2024, Leetcode POTD, Array, SLiding Window

A swap is defined as taking two distinct positions in an array and swapping the values in them.

A circular array is defined as an array where we consider the first element and the last element to be adjacent.

Given a binary circular array nums, return the minimum number of swaps required to group all 1's present in the array together at any location.

Input: nums = [0,1,0,1,1,0,0]
Output: 1
Explanation: Here are a few of the ways to group all the 1's together:
[0,0,1,1,1,0,0] using 1 swap.
[0,1,1,1,0,0,0] using 1 swap.
[1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
There is no way to group all 1's together with 0 swaps.
Thus, the minimum number of swaps required is 1.

*/



/*Method 1-in this ques we need to use circluar array, so form a temp
arr of size 2*n and append original array. and then count the ones 
from original arr, that will be our size of sliding window, and see
how many ones in that sliding window and count the maxOnes and at 
last, for swap=totalOnes - maxOnes
TC: O(2*n) ~ O(n), SC: O(2*n) ~ O(n)
*/
var minSwaps = function(nums) {
  let len = nums.length;
  let totalOnes = 0;
  for(let i=0; i<nums.length; i++){
      if(nums[i] === 1){
          totalOnes++;
      }
  }

  //form the temp array of size 2*n, circular array
  let temp = Array(2*len);
  for(let i=0; i<2*len; i++){
      temp[i] = nums[i%len];
  }
  let currOnes = 0;
  let maxOnes = 0;
  let i=0;
  let j=0;
  while(j < 2*len){
      if(temp[j] === 1){
          currOnes++;
      }
      if(j-i+1 > totalOnes){
          currOnes -= temp[i];
          i++
      }
      maxOnes = Math.max(maxOnes, currOnes);
      j++;
  }
  let swap = totalOnes - maxOnes;
  return swap;
};
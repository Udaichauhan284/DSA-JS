/* 27 NOv 2024,
525 Contiguous Array

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

*/

//Naive Approach : use of Two Loop, second loop start from i and
//it will count the zeros and ones, and then compare zero and ones.
//TC O(n^2), O(1)
var findMaxLength = function (nums) {
  let maxLength = 0;
  let countOnes = 0;
  let countZeros = 0;

  for (let i = 0; i < nums.length; i++) {
    countOnes = 0;
    countZeros = 0;

    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) {
        countZeros++;
      } else {
        countOnes++;
      }

      if (countZeros === countOnes) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
};

/*27 Nov 2024
Optimal Method-if we normally add the elem of nums, we get
the ans, but if we change the zero with -1 and then add 
the elem and if we get the sum===0 measn we have equal num
of 1 and 0. so we find the currSum with 1 and -1. and check
in map, if we have that sum or not, if yes we find the len
and not we set the currSum. TC: O(n), SC: O(n)
*/
var findMaxLength = function(nums) {
  let len = nums.length;
  let map = new Map();
  let maxLen = 0;
  //now set the initial currSum
  let currSum = 0;
  map.set(currSum,-1);
  for(let i=0; i<len; i++){
      //now calculate currSum
      currSum += nums[i]===1 ? 1 : -1;
      //now check in the map
      if(map.has(currSum)){
          //now find the maxLen
          maxLen = Math.max(maxLen, i-(map.get(currSum) || 0));
      }else{
          //set in map
          map.set(currSum, i);
      }
  }
  return maxLen;
};

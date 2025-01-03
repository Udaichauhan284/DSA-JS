/* 2270 Number of Ways to split Array
03 Jan 2025, Leetcode POTD, Array, Burte Method, leftsum and right sum
and optimal toalSum

You are given a 0-indexed integer array nums of length n.

nums contains a valid split at index i if the following are true:

The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
There is at least one element to the right of i. That is, 0 <= i < n - 1.
Return the number of valid splits in nums.
*/

/*Brute Method, in this we need to run the loop from i=0
to i=len-1, and in this we will find the left and right
sum, left sum will j=0; j<=i, rightSum will be j=i+1 till
len. TC: O(n^2), SC: O(1)
*/
var waysToSplitArray = function(nums) {
  let len = nums.length;
  let split=0;
  for(let i=0; i<len-1; i++){
      let leftSum = 0, rightSum = 0;
      for(let j=0; j<=i; j++){
          leftSum += nums[j];
      }
      //now rightSum
      for(let j=i+1; j<len; j++){
          rightSum += nums[j];
      }

      if(leftSum >= rightSum) split++;
  }
  return split;
};


/*Optimal Method, in this in one loop will be find the left 
and rightsum =totalSum-leftSum.
TC: O(2n) ~ O(n), SC: O(1)
*/
var waysToSplitArray = function(nums) {
  let len = nums.length;
  let totalSum = 0;
  for(let num of nums){
      totalSum += num;
  }    

  let leftSum = 0;
  let rightSum = 0;
  let split = 0;
  for(let i=0; i<len-1; i++){
      leftSum += nums[i];
      rightSum = totalSum-leftSum;

      if(leftSum >= rightSum) split++;
  }
  return split;
};

/* 1608. Special Array wih X Element greater Than or equal X.
27 May 2024, Leetcode POTD, TOpic: Array, Binary Search, Sorting.

You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

Example 1:

Input: nums = [3,5]
Output: 2
Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
Example 2:

Input: nums = [0,0]
Output: -1
Explanation: No numbers fit the criteria for x.
If x = 0, there should be 0 numbers >= x, but there are 2.
If x = 1, there should be 1 number >= x, but there are 0.
If x = 2, there should be 2 numbers >= x, but there are 0.
x cannot be greater since there are only 2 numbers in nums.
Example 3:

Input: nums = [0,4,3,0,4]
Output: 3
Explanation: There are 3 values that are greater than or equal to 3.

*/
/* Method 1- use of Sorting in ascending order and then apply Binary
Search (Lower Bound), it will return the element with is just bigger than then x, then count = n-lowerBound if equal to x, return x; or return -1
TC: O(n*logN), SC: O(1)
*/
var specialArray = function(nums) {
  //first sort the nums
  nums.sort((a,b) => a-b);
  let len = nums.length;
  let count = 0;
  for(let x=0; x<=len; x++){
      let idx = lowerBound(nums,x);
      count = len - idx;
      if(count === x){
          return x;
      }
  }
  return -1;
};
//Lower Bound, Binary Search
function lowerBound(nums,target){
  let len = nums.length;
  let left = 0;
  let right = len;
  while(left < right){
      let mid = left + Math.floor((right-left)/2);
      if(nums[mid] >= target){
          right = mid; //look in left side
      }else{
          left = mid+1; //look in right side
      }
  }
  return left;
}

/* Method 2, rather then for loop for x, apply Binary Search for 
 too
 TC: O(nlogn), SC: O(1)
 */
var specialArray1 = function(nums) {
  //sort
  nums.sort((a,b) => a-b);
  let len = nums.length;
  let left = 0;
  let right = len;
  while(left <= right){
      let midX = left + Math.floor((right-left)/2);
      let idx = lowerBound1(nums,midX);
      let count = len - idx;
      if(count === midX){
          return midX;
      }else if(count > midX){
          left = midX + 1;
      }else{
          right = midX - 1;
      }
  }
  return -1;
};
function lowerBound1(nums,target){
  let len = nums.length;
  let l = 0;
  let r = len;
  while(l < r){
      let mid = l + Math.floor((r-l)/2);
      if(nums[mid] >= target){
          r = mid;
      }else{
          l = mid + 1;
      }
  }
  return l;
}

/* Method 3. use of counting sort and prefix Sum in freq arr
TC: O(n), SC: O(n)
*/
var specialArray2 = function(nums) {
  let n = nums.length;
  let freqArr = Array(n+1).fill(0);

  //populate the freqArr
  for(let i=0; i<n; i++){
      freqArr[Math.min(n,nums[i])]++;

      //min(n,nums[i]), maybe some nums[i] is bigger from len of nums, so in that case take n and increase the freq of n.
  }
  //prefix sum from Right to Left
  let cumSum = 0;
  for(let x=n; x>=0; x--){
      cumSum += freqArr[x];
      if(cumSum === x){
          return x;
      }
  }
  return -1;
};
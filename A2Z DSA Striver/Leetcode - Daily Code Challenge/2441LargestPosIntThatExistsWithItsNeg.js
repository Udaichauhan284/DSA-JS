/* 2441. Largest Positive Integer That Exists With Its Negative
2/May/2024 - Daily Leetcode Code Challenge - Topic: Sorting, Array, Hash Table
exaplanation in Array section of ipad notes.
Example 1:

Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.
Example 2:

Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.
Example 3:

Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.

*/
//Method 1- use of two loop and check for every elem that i === -i present or not, if present put into result.TC: O(n^2), SC : O(1)
const findMaxK = (nums) => {
  let result = -1;
  for(let i=0; i<nums.length; i++){
    for(let j=0; j<nums.length; j++){
      if(nums[i] === -nums[j]){
        result = Math.max(result, Math.abs(nums[i]));
      }
    }
  }
  return result;
}
let nums = [-1,10,6,7,-7,1]
console.log(findMaxK(nums));

//Method-2 first sort the arr, so smallest will be on left side, and largest will be on right side, use of 2 pointer. TC : O(nlogn), SC: O(1);
const findMaxK1 = (nums) => {
  nums.sort((a,b) => a-b);

  let i=0;
  let j=nums.length-1;
  while(i<j){
    if(-nums[i] === nums[j]){
      return nums[j];
    }else if(-nums[i] < nums[j]){
      j--;
    }else{
      i++;
    }
  }
  return -1;
}
console.log(findMaxK1(nums));

//Method-3 use of set, see in set if you seen that elem, is yes, put that in result, other add in set TC : O(n), SC : O(n)
const findMaxK2 = (nums) => {
  let result = -1;
  let set = new Set();
  for(let num of nums){
    if(set.has(-num)){
      result = Math.max(result,Math.abs(num));
    }
    set.add(num);
  }
  return result;
}
console.log(findMaxK2(nums));

//Method-4 when constrain is from -1000<=nums[i]<=1000, it basically saye use arr[i] as index TC : O(n), SC : O(2001)~O(1)
const findMaxK3 = (nums) => {
  let result = -1;
  let arr = new Array(2001).fill(0);
  for(let num of nums){
    if(arr[-num+1000] === 1){
      result = Math.max(result,Math.abs(num));
    }
    arr[num+1000] = 1;
  }
  return result;
}
console.log(findMaxK3(nums));
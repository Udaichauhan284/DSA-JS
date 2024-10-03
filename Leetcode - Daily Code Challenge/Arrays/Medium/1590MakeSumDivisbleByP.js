/* 1590. Make Sum Divisible by P
03 Oct 2024, Leetcode POTD, Array, Prefix Sum, Map

Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
*/

/*Brute Method-first we take out the totalSum this help
in finding the one which we need to remove. then in 
nested loop we will check totalSum-currSum % p === 0
find the minLen. TC: O(n^2), SC: O(1)
*/
var minSubarray = function(nums, p) {
  let len = nums.length;
  let totalSum = 0;
  //find the totalSum
  for(let num of nums){
      totalSum += num;
  }
  //if totalSum % p === 0
  if(totalSum % p === 0){
      return 0;
  }
  let minLen = len; //for finding the minLen
  for(let i=0; i<len; i++){
      let currSum = 0;
      for(let j=i; j<len; j++){
          currSum += nums[j];
          if((totalSum - currSum)%p === 0){
              minLen = Math.min(minLen, j-i+1);
          }
      }
  }
  return minLen === len ? -1 : minLen;
};

/*Optimal Approach- inn this we use Map, for storing the 
currSum-target with there index where we have find it last
if we have in map, we get the index and minu with currIndea
for getting the minLen. TC: O(n), SC: O(n)
*/
var minSubarray = function(nums, p) {
  let map = new Map();
  map.set(0,-1); // Initialize map with (0, -1) to handle subarrays starting from index 0
  let len = nums.length;
  let minLen = len;
  let totalSum = 0;
  for(let num of nums){
      totalSum += num;
  }
  let target = totalSum % p; //this target we need to find from nums arr and remove it
  if(target === 0){
      return 0;
  }
  let currSum = 0
  for(let i=0; i<len; i++){
    currSum = (currSum + nums[i]) % p;
    let needed = (currSum - target + p) % p;
    if(map.has(needed)){
      minLen = Math.min(minLen, (i-map.get(needed)));
    }
    map.set(currSum, i); //set the currSum with index
  }
  return minLen === len ? -1 : minLen;
};
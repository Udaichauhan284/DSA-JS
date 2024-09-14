/* 2419. Longest Subarray With Maximum Bitwise AND
14 Sept 2024, Leetcode POTD, Array, Bitwise AND

Input: nums = [1,2,3,3,2,2]
Output: 2
Explanation:
The maximum possible bitwise AND of a subarray is 3.
The longest subarray with that value is [3,3], so we return 2.
*/

/*Brute Method - use of mested loop to find out the max AND
TC: O(n^2), SC: O(1)
TLE
*/
var longestSubarray = function(nums) {
  let maxAND = Number.MIN_VALUE;
  let maxLen = Number.MIN_VALUE;
  let len = nums.length;
  for(let i=0; i<len; i++){
      let currAND = nums[i];
      for(let j=i; j<len; j++){
          currAND &= nums[j]; //in first iteration i n j
          //are same pos, so 1 & 1 = 1.
          if(currAND > maxAND){
              maxAND = currAND;
              maxLen = j-i+1;
          }else if(currAND === maxAND){
              maxLen = Math.max(maxLen, j-i+1);
          }
      }
  }
  return maxLen;
};



/*Optimal Method, as we know, if we do saem num AND we get
same num, and if we do diff num AND, we get some num which
is less and equal to any both of num, so if we want MAX AND
we need to do AND of Max Num, like in arr, there is MAX
num is 5 so for maxAND we need to do 5 & 5. so this quest 
become, find subarray with maxnum.
TC: O(n), SC: O(1)
*/
var longestSubarray = function(nums) {
  let maxValue = 0;
  let result = 0;
  let maxLen = 0;
  for(let num of nums){
      if(num > maxValue){
          maxValue = num;
          //now for new maxValue, result and maxLen is 0
          result = 0;
          maxLen = 0;
      }
      //now check is num is equal to maxValue
      if(num === maxValue){
          //as in above if, we change maxValue so for
          //atleast one num maxlen = 1;
          maxLen++;
      }else{
          //ifnot maxLen = 0;
          maxLen = 0;
      }
      result = Math.max(maxLen, result);
  }
  return result;
};
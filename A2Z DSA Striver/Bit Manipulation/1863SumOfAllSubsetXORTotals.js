/* 1863 Sum of ALl subset XOR totals
20 May 2024 - Leetcode Code Daily Challenge, Topic: Bit Manupilation, Array, BackTracking.
Input: nums = [5,1,6]
Output: 28
Explanation: The 8 subsets of [5,1,6] are:
- The empty subset has an XOR total of 0.
- [5] has an XOR total of 5.
- [1] has an XOR total of 1.
- [6] has an XOR total of 6.
- [5,1] has an XOR total of 5 XOR 1 = 4.
- [5,6] has an XOR total of 5 XOR 6 = 3.
- [1,6] has an XOR total of 1 XOR 6 = 7.
- [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28
*/
/* Method-1 use simple currXor, include currXOr xor with nums[i] and exlude 
TC: O(2^n), SC O(n)
*/
const subsetXORSum = (nums) => {
  let result = 0;

  function solve(nums, i, currXOR){
    if(i === nums.length){
      result += currXOR;
      return;
    }

    //include
    solve(nums, i+1, currXOR^nums[i]);
    //exclude
    solve(nums, i+1, currXOR);
  }

  solve(nums, 0,0); // nums, i, currXOR
  return result;
}

/* Method 2- this is a trick way, this will work good and need to 
find when constraint small O(n), O(1)
1. find the OR for all the nums[i]
2. left shift to result by n-1 to form ans
*/
var subsetXORSum1 = function(nums) {
  let result = 0;
  for(let i=0; i<nums.length; i++){
      result |= nums[i];
  }
  return result << (nums.length-1);
};
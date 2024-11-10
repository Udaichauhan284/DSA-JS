/* 3097 Shortest Subarray With OR at least K II
10 Nov 2024, Leetcode POTD, Array, Bit Manupilation

Input: nums = [1,2,3], k = 2

Output: 1

Explanation:
The subarray [3] has OR value of 3. Hence, we return 1.
*/

/*In this we use Sliding Window Method, in that
we take num and then take out that num using bit 
by using left shift and & with 1.
*/
var minimumSubarrayLength = function(nums, k) {
  let len = nums.length;
  let result = Number.MAX_VALUE;
  let i=0;
  let j=0;
  let vec = Array(32).fill(0);
  while(j < len){
      //take that num
      update(nums[j], vec, 1);
      while(i <= j && getDecimalToBinary(vec) >= k){
          result = Math.min(result, j-i+1);
          update(nums[i],vec,-1);
          i++;
      }
      j++;
  }
  return (result === Number.MAX_VALUE) ? -1 : result;
};
function update(number, vec, val){
  for(let i=0; i<32; i++){
      if((number >> i) & 1)
      vec[i] += val;
  }
}
function getDecimalToBinary(vec){
  let num = 0;
  for(let i=0; i<32; i++){
      if(vec[i] > 0){
          num |= (1 << i);
      }
  }
  return num;
}
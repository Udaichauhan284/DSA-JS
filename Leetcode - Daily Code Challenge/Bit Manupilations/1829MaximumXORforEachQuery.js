/* 1829 Maximum XOR for Eaxh Query
08 Nov 2024, Leetcode POTD, Bit Manipulation, Array, XOR

Input: nums = [0,1,1,3], maximumBit = 2
Output: [0,3,2,3]
Explanation: The queries are answered as follows:
1st query: nums = [0,1,1,3], k = 0 since 0 XOR 1 XOR 1 XOR 3 XOR 0 = 3.
2nd query: nums = [0,1,1], k = 3 since 0 XOR 1 XOR 1 XOR 3 = 3.
3rd query: nums = [0,1], k = 2 since 0 XOR 1 XOR 2 = 3.
4th query: nums = [0], k = 3 since 0 XOR 3 = 3.
*/

/*For getting the maximized XOR we want that 10 is xor by 
01(flip) than we get 11 as maximzed XOR. for this we need to 
create the mask 2^maximumBit - 1
TC: O(n), SC: O(1) O(n) for result
*/
var getMaximumXor = function(nums, maximumBit) {
  let len = nums.length;
  let result = Array(len).fill(0);

  //first find the XOR for all nums
  let XOR = 0;
  for(let i=0; i<len; i++){
      XOR ^= nums[i];
  }
  //To find flip, first find the mask having all bits set to 1
  let mask = (1 << maximumBit) - 1;

  //now find the maximumXOR k
  for(let i=0; i<len; i++){
      let k = XOR ^ mask; //this will give me the flipped value of XOR i.e. my best K
      result[i] = k;

      //now remove the last one for next XOR
      XOR ^= nums[len-i-1];
  }
  return result;
};

/*Method 2- we dont need to use two loop, in one loop we can
find the xor and also put into the result
TC: O(n), SC: O(1) O(n) just for result
*/
var getMaximumXor = function(nums, maximumBit) {
  let len = nums.length;
  let result = Array(len).fill(0);

  //for finding the flip, we need the mask, flip is our k
  let mask = (1 << maximumBit) - 1;

  //now find the the k 
  let XOR = 0;
  for(let i=0; i<len; i++){
      XOR ^= nums[i];
      let k = XOR ^ mask;
      result[len-i-1] = k;
  }
  return result;
};
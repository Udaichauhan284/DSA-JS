/* 136. Single Number.
nums = [2,2,1];
output : 1

use the XOR 
a^a = 0, a^0 = a
*/
const singleNumber = (nums) => {
  let xorr = 0;
  for(let i=0; i<nums.length; i++){
    xorr ^= nums[i];
  }
  return xorr;
}
console.log(singleNumber([2,2,1]));
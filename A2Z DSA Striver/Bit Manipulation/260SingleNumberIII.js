/* 260. Single Number III
nums[1,2,1,3,2,5]
o/p : [3,5], return those elem which comes only 1 times.
*/
//1. Brute Method - use of Map, count the Freq and see which value === 1 and return that elem, Tc O(nlogm + m), SC O(m)
const singleNumberMap = (nums) => {
  let len = nums.length;
  let map = new Map();

  for(let i=0; i<len; i++){
    map.set(nums[i], (map.get(nums[i]) || 0)+1);
  }

  //traverse the map
  let result = [];
  map.forEach((value,key) => {
    if(value === 1){
      result.push(key);
    }
  });
  return result;
}
let nums = [1,2,1,3,2,5];
console.log(singleNumberMap(nums));

//Optimal Method : use of bitwise - 1.first do xorr of all elem in elem, we will get the some value in xorr. 2. find the right most set bit in that result. 3. take two bucket, do xor of b1 with nums elem, so at last unique eleme will be left in bucket b1 and b2, TC O(n + n) => O(2n) => O(n), O(1).
const singleNumber = (nums) => {
  let xorresult = 0;
  for(let num of nums){
    xorresult ^= num;
  }

  //now find the right most set bit
  let rightMostSetBit = 1;
  while((rightMostSetBit & xorresult) === 0){
    rightMostSetBit <<= 1;
  }
  // other method for finding that bit
  // let rightMostSetBit = (xorresult & (xorresult-1)) & xorresult;

  //now take two bucket and put unique elem in that
  let b1=0;
  let b2=0;
  for(let num of nums){
    if((num & rightMostSetBit) === 0){
      b1 = b1 ^ num;
    }else {
      b2 = b2 ^ num;
    }
  }
  return [b1,b2];
}
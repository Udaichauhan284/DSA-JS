// find the contingous subarray whose XOR is equal to K, k is target
/* [4,2,2,6,4] => [4,2]=4^2=6 count++ 1;
[6], count++ 2;
[2,2,6] => 2^2^6 ===6 count++ 3;
[4,2,2,6,4] =>4^2^2^6^4 => 6 === 6 target, count++ = 4;
*/
function subArrayXORK(nums, target){
  let len = nums.length;
  let count = 0;
  let xorMap = new Map();
  let xor = 0;
  xorMap.set(xor,1); //initial value
  
  for(let i=0; i<len; i++){
    xor = xor ^ nums[i];

    if(xorMap.has(xor ^ target)){
      count+= xorMap.get(xor ^ target);
    }

    //update the xorMap
    xorMap.set(xor, (xorMap.get(xor) || 0)+1);
  }
  return count;
}
let nums = [4,2,2,6,4];
let target = 6;
console.log("The count of subarray xor equal to k, " + subArrayXORK(nums,target));
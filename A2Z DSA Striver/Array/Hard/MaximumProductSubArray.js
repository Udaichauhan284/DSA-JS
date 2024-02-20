/* 152 Maximum Product Subarray

*/
//Brute Force O(n^2), O(1)
// function maxProduct(nums){
//   let len = nums.length;
//   let result = nums[0];
//   for(let i=0; i<len-1; i++){
//     let product = nums[i];
//     for(let j=i+1; j<len; j++){
//       result = Math,max(result, product);
//       product *= nums[j];
//     }
//     result = Math.max(result, product);
//   }
//   return result;
// }

//Optimal Apprach O(n) O(1)
function maxProduct(nums){
  let len = nums.length;
  if(len <= 1){
    return nums[0];
  }
  let ans = Number.MIN_VALUE;
  let pre = 1, suf = 1;
  for(let i=0; i<len; i++){
    if(pre === 0){
      pre = 1;
    }
    if(suf === 0){
      suf = 1;
    }
    pre *= nums[i];
    suf *= nums[n-i-1];
    ans = Math.max(ans, Math.max(pre, suf));
  }
  return ans;
}
/* 15 Mar 2024 
238. Product of Array Except Self
nums: [1,2,3,4]
o/p: [24,12,8,6]
*/
// Approach one : use of Diviosn, not to used, just doing for learning, in this count_zero and see without_zero products.
 // O(n), O(1)
// var productExceptSelf = function(nums) {
//    let len = nums.length;
//    let product_without_zeros = 1;
//    let count_zeros = 0
//    for(let num of nums){
//     if(num === 0){
//       count_zeros++;
//     }else {
//       product_without_zeros *= num;
//     }
//    }

//    let result = [];
//    for(let i=0; i<len; i++){
//     if(nums[i] !== 0){
//       if(count_zeros > 0){
//         result[i] = 0;
//       }else {
//         result[i] = Math.floor(product_without_zeros / nums[i]);
//       }
//     }else { //means num[i] === 0
//       if(count_zeros > 1){
//         result[i] = 0;
//       }else {
//         result[i] = product_without_zeros;
//       }
//     }
//    }
//    return result;
// };

// Optimal 1: use of left and right arr, set the product of left element in left arr and right product in right element. TC O(n), SC O(n)
// const productExceptSelf = (nums) => {
//   let len = nums.length;
//   let left = [];
//   let right = [];
//   let result = [];
//   //setting 1 and last elemnt in left and right arr as 1. 
//   left[0] = 1;
//   right[len-1] = 1;
//   for(let i=1; i<len; i++){
//     left[i] = left[i-1] * nums[i-1];
//   }
//   for(let i=len-2; i>=0; i--){
//     right[i] = right[i+1] * nums[i+1];
//   }

//   //now put product left and right in result
//   for(let i=0; i<len ; i++){
//     result[i] = left[i] * right[i];
//   }
//   return result;
// }

// Optimal 2: use the same appraoch left adn right, just put these product in result only, use of right_product also, TC O(n), SC O(1)
const productExceptSelf = (nums) => {
  let len = nums.length;
  let result = [];
  result[0] = 1;
  let right_product = 1;
  for(let i=1; i<len; i++){
    result[i] = result[i-1]*nums[i-1];
  }
  for(let i=len-1; i>=0; i--){
    result[i] = result[i]*right_product;
    right_product *= nums[i];
  }
  return result;
}
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


/*26 Sept 2024, Brute Method
use of nested for loop, when i !==j then we calc
the product of i and j elem in array
TC: O(n^2), SC: O(1)
TLE
*/
var productExceptSelf1 = function(nums) {
  let len = nums.length;
  let ans = Array(len).fill(1);
  for(let i=0; i<len; i++){
      for(let j=0; j<len; j++){
          if(i !== j){
              ans[i] *= nums[j];
          }
      }
  }
  return ans
};

/*AFter brute method, Optimal 1, we can take left and
right arr, for num's left value multiplication and
num's right value multiplication, and then. in main
loop we multiple both left and right value together
and form the ans TC: O(3n) ~ O(n), SC: O(n)
*/
const productExceptSelf2 = (nums) => {
  let len = nums.length;
  let prefix = Array(len).fill(1); //left arr
  let suffix = Array(len).fill(1); //right arr
  let ans = Array(len).fill(1); // main ans arr
  //now calculate prefix multiple for each num
  for(let i=1; i<len; i++){
      //we start from 1, because we have already 1 at zero index
      prefix[i] = prefix[i-1]*nums[i-1];
  }

  //now calculate suffix multiple for each num
  //in this we start from right to left, as we need to stor emultiple of right side
  for(let j=len-2; j>=0; j--){
      suffix[j] = suffix[j+1] * nums[j+1];
  }

  //now multiple both left and right
  for(let i=0; i<len; i++){
      ans[i] = prefix[i] * suffix[i];
  }
  return ans;
}

/*26 Sept 2024, Method3- optimal method, instead use 
of prefix(left) and suffix(Right) arr, to calculate
in two different loop and then multiple, instead, we
can directly multiple in ans for prefix and for suffix
we need to take extra varibale and it worl
TC: O(n), SC: O(1)
*/
var productExceptSelf3 = function(nums) {
  let len = nums.length;
  let ans = Array(len).fill(1);

  //now calulate the prefix in ans only
  for(let i=1; i<len; i++){
      ans[i] = ans[i-1] * nums[i-1]; //1 * 1
  }
  //now calculate for suffix 
  let suffix = 1;
  for(let i=len-2; i>=0; i--){
      suffix *= nums[i+1];
      ans[i] *= suffix;
  }
  return ans;
};
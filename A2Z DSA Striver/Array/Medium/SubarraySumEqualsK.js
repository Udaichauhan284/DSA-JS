/* 560 Subarray Sum Equals K
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
*/

//Brute Force - use two array and take a sum of past element 
// function subArraySum(arr, k) {
//   let len = arr.length;
//   let cnt = 0;
//   for(let i=0; i<len; i++){
//     let sum = 0; 
//     for(let j=i; j<len; j++){
//       sum+=arr[j];
//       if(sum === k){
//         cnt++;
//       }
//     }
//   }
//   return cnt;
// }

// Optimal Approach using Prefix Sum and storing that in Map
//TC O(n) SC O(n)
function subArraySum(arr,k){
  let count = 0;
  let n = arr.length;
  let sum =0;
  let sumMap = new Map();

  //initial sumMap sum = 0 and count 1
  sumMap.set(0,1);

  for(let i=0; i<n; i++){
    sum+=arr[i];

     //Check if there is a subarray with sum (sum - k)
    if(sumMap.has(sum - k)){
       count += sumMap.get(sum-k);

      //update the sumMap
      sumMap.set(sum, (sumMap.get(sum) || 0)+1);
    }
  }
  return count;
}

let arr = [1, 2, 3];
let key = 3;
console.log(subArraySum(arr, key));
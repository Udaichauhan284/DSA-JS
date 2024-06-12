/* 75. Sort Colors
12 June 2024 Leetcode POTD, Topic: Array, Two Pointer, Sorting
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
*/
/* Method 1 - simple libary in-built method
TC: O(nlogn), SC: O(1)
*/
// var sortColors = function(nums) {
//     return nums.sort((a,b) => a-b);
// };

/* Method 2- use of counter variable for 0 and 1 counting
and loop till cout0 add 0 in starting and then count0 to count1 
add 1 and after that add 2
TC: O(2n), SC: O(1)
*/
// const sortColors = (nums) => {
//     let n = nums.length;
//     let countZero = 0;
//     let countOne = 0;
//     for(let i=0; i<n; i++){
//         if(nums[i] === 0) countZero++;
//         if(nums[i] === 1) countOne++;
//     }

//     for(let i=0; i<countZero; i++){
//         nums[i] = 0;
//     }
//     for(let i=countZero; i<(countZero+countOne); i++){
//         nums[i] = 1;
//     }
//     for(let i=(countZero+countOne); i<n; i++){
//         nums[i] = 2;
//     }
//     return nums;
// }

/* Method3 - use of Dutch Flag Method, take 3 pointer low,mid = 0
and high = nums.length-1;
we move mid till mid <= high, and see if nums[mid] = 0, we swap 
with mid and low-move pointer low++, mid++, if mid ===1, move mid
only, if mid === 2, swap mid and high
TC: O(n), SC: O(1)
*/
const sortColors = (nums) => {
  let low = 0, mid = 0, high = nums.length-1;
  while(mid <= high){
      if(nums[mid] === 1){
          mid++;
      }
      else if(nums[mid] === 0){
          //swap low and mid
          [nums[low], nums[mid]] = [nums[mid], nums[low]];
          low++;
          mid++;
      }else{
          //measn nums[mid] === 2
          //swap mid and high
          [nums[mid], nums[high]] = [nums[high], nums[mid]];
          high--;
      }
  }
  return nums;
}
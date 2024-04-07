//7 April 2024, Brute Force - use of nested loop and find the the sum, but that will give the TLE, now better method - use of Map, cumulativeSum and Map. TC : O(n), SC : O(n)
// var numSubarraysWithSum = function(nums, goal) {
//     let len = nums.length;
//     let result = 0;
//     let currSum = 0;
//     let map = {};
//     // Initial value of map - 0: 1
//     map[0] = 1;
    
//     for (let i = 0; i < len; i++) {
//         currSum += nums[i];
//         // Check if there exists a prefix sum that complements the current sum to reach the goal
//         let remainingSum = currSum - goal;
//         if (map[remainingSum]) {
//             result += map[remainingSum];
//         }
//         //Update the frequency of the current sum
//         if (!map[currSum]) {
//             map[currSum] = 1;
//         } else {
//             map[currSum]++;
//         }
//     }
    
//     return result;
// };

//Optimal Method
const numSubarraysWithSum = (nums,goal) => {
  let len = nums.length;
  let result = 0;
  let left = 0, right = 0, countZeros = 0;
  let windowSum = 0;
  while(right < len){
    windowSum += nums[right];
    
    while(left < right && (nums[left] === 0 || windowSum > goal)){
      if(nums[left] === 0){
        countZeros++;
      }else {
        countZeros = 0;
      }

      windowSum -= nums[left];
      left++;
    }
    if(windowSum === goal){
      result += 1+countZeros;
    }
    right++;
  }
  return result;
}

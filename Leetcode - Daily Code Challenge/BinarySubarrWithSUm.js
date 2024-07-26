/* 14 Mar 2024
930 Binary Subarrays With Sum
[1,0,1,0,1], goal = 2;
o/p 4 subaray whoes sum is equal to 2.
*/
 //Solved using Cummullative Sum and Map - O(n), SC O(n)
 var numSubarraysWithSum = function(nums, goal) {
  let map = new Map();
  map.set(0,1);
  let result =0;
  let currSum = 0;
  for(let num of nums){
    currSum += num;
    let remainingSum = currSum - goal;
    if(map.has(remainingSum)){
      result += map.get(remainingSum) || 0;
    }
    map.set(currSum, (map.get(currSum) || 0)+1);
  }
  return result;
};

/* Optimal App. solve this use of sliding window - subarray sum - i and j and window_sum.
 Now i will check is windowSum is smaller than goal, if yes move j to next element, if sum gets more than goal. increase the i to reduce the sum.
 also check if i is  pointing 0, so move i forward then we get the another subarray.
 we need to count_zero (prefix zero), kuyki with 0 we can get other subarray.
 TC O(2n), SC O(1)
 */
 var numSubarraysWithSum1 = function(nums, goal) {
  let len = nums.length;
    let i=0;
    let j=0;
    let result =0;
    let windowSum = 0;
    let count_zeros = 0;
    while(j<len){
      windowSum += nums[j];
      while(i < j && (nums[i] === 0 || windowSum > goal)){
        if(nums[i] === 0){
          count_zeros++;
        }else {
          count_zeros = 0;
        }
        windowSum -= nums[i];
        i++;
      }
      if(windowSum === goal){
        result += 1 + count_zeros;
      }
      j++;
    }
    return result;
};
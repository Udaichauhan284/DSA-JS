/* 27 NOv 2024,
930 Binary Subarray With Sum 
*/
/*27 Nov 2024,
This is part of Prefix Sum with Map Pattern
Optimal 1-use of Prefix Sum and map, put the
currSum in map, and then check the remainingSum
currSum-goal if that in map, add in result,
otherwise put in map. TC: O(n), SC: O(n)
*/
var numSubarraysWithSum = function(nums, goal) {
  let map = new Map();
  let result = 0;
  let currSum = 0;
  map.set(currSum, 1); //initial sum 0->1
  for(let num of nums){
      currSum += num;
      //now check the remaining sum in map
      let remainingSum = currSum - goal;
      if(map.has(remainingSum)){
          result += map.get(remainingSum);
      }
      //now put the currSUm in mao
      map.set(currSum, (map.get(currSum)||0)+1);
  }
  return result;
};

/*27 Nov 2024
Optimal Approach 2-use of Sliding Window, move
the right pointer and add in windowSum and see
if that equal to goal or not, and also we need
to move the left pointer and need to minus the
left elem, also doing this take a count of zero
if there is zero,removing that wont effect the
windowSum and give the result++
TC: O(n), SC: O(1)
*/
var numSubarraysWithSum = function(nums, goal) {
  let len = nums.length;
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let result = 0;
  let countZeros = 0;
  while(right < len){
      windowSum += nums[right];

      //now here we need to check if windowSum >goal and nums[left] === 0, increase the left
      while(left < right && (nums[left] === 0 || windowSum > goal)){
          if(nums[left] === 0){
              countZeros++;
          }else{
              countZeros=0;
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
};
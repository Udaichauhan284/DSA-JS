/* 29 Nov 2024,
15 3Sum, Two Pointer, Array, Sorting
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/

/*In this we need to first sort the nums,
then we need to take n1 as target, also need
to check the n1 not repeated, then we need 
to loop from 0 to n-3, then we need to use 
2sum with n1 as target. in 2sum we need to
skip the duplicate number. TC: O(nlogn)+O(n^2)
*/
var threeSum = function(nums) {
  let result = [];
  let len = nums.length;
  //sort the nums
  nums.sort((a,b) => a-b);
  //check if nums len is less than 3
  if(len < 3){
      return;
  }
  for(let i=0; i<=len-3; i++){
      if(i > 0 && nums[i] === nums[i-1]){
          continue; //skip the duplicate number
      }
      let n1 = nums[i];
      //now you have target, call twoSUm
      twoSum(nums, -n1, i+1, len-1, result); //array, target,left,right
  }
  return result;
};
function twoSum(nums, target, left, right, result){
  while(left < right){
      if(nums[left]+nums[right] < target){
          left++;
      }else if(nums[left]+nums[right] > target){
          right--;
      }else {
          //need to skip the duplicate from left and right
          while(left < right && nums[left] === nums[left+1]) left++;
          while(left < right && nums[right] === nums[right-1]) right--;
          //after skip, push ans into result and move
          result.push([-target, nums[left], nums[right]]);
          left++;
          right--;
      }
  }
}
/*167 Two Sum II - Input Array Is Sorted
28 Nov 2024, leetcode POTD, Array, Two Pointer

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

*/

//We use two pointer left and right, when sum > target we move right point
//TC: O(n), SC: O(1)
const twoSum = (nums, target) => {
  let len = nums.length;
  let left = 0, right=len-1;
  while(left < right){
    let sum = nums[left]+nums[right];
    if(sum === target){
      return [left+1, right+1];
    }else if(sum > target){
      right--;
    }else{
      left++;
    }
  }
  return -1;
}
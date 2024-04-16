/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/
/*we need to check if we able go to the las index or surpas the last index,
also we need to check the which max jump we can take to reach at last.
take a max = 0, strat the loop and check for that index+num[index], if max>=n-1 true, otherwise false. TC : O(n), SC : O(1)
*/
const canJump = (nums) => {
  let n = nums.length;
  if(n===1) return true;
  let max = 0;
  for(let index = 0; index<n-1 && max>=index ; index++){
    if(max < index+nums[index]){
      max = index+nums[index];
    }
    if(max >= n-1) return true;
  }
  return false;
}
console.log(canJump([2,3,1,1,4])); //true
console.log(canJump([3,2,1,0,4])); //false
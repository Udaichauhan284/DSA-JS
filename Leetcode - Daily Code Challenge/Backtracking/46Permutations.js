/* 46 Permutation
05 Oct 2024, Backtracking
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

/*Use of Backtracking, 1.do something, 2.explore it
3.revert back to 1 and futher explore.
TC: O(n! * n) n! permutation, n for temp storing
SC: O(n)
*/
const permute = (nums) => {
  let result = [];
  let used = new Set();
  solve(nums, [], result, used);
  return solve;
}
function solve(nums, temp, result, used){
  let len = nums.length;
  if(temp.length === len){
    result.push([...temp]);
    return;
  }
  //explore 
  for(let i=0; i<len; i++){
    if(used.has(nums[i])) continue; //skip that one
    temp.push(nums[i]);
    used.add(nums[i]);
    solve(nums,temp, result, used); //explore
    //revert to step 1
    temp.pop();
    used.delete(nums[i]);
}
}


/*2 Jan 2025, Method 2, use of swap method
in backtracking swap of i and idx
TC: O(n + n!), SC: O(n)
*/
var permute1 = function(nums) {
  let result = [];
  solve(0, nums, result);
  return result;
};
function solve(idx, nums, result){
  //base case
  if(idx === nums.length){
      result.push([...nums]);
      return;
  }

  //now iterate over the nums
  for(let i=idx; i<nums.length; i++){
      //now swap 
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      solve(idx+1, nums, result); //Explore
      //now again swap, undo
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
  }
}
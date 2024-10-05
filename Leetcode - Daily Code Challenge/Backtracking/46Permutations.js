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
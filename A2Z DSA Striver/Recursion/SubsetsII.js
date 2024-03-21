/* 90. Subsets II
Given an integer array nums that may contain duplicates, return all possible subsets(the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
*/
 //Brute App: use same concept of pick and no pick way use of set to store the unique elem.
 //Optimal use of Backtracting and Recusrion - same apprach as COmbination Sum II. TC O(2^n * k), SC O(2^n) * O(k) 

 const subsetsII = (nums) => {
  let temp = [];
  let ans = [];
  //sort the arr 
  nums.sort((a,b) => a-b);
  findSubsets(0,nums,ans,temp);
  return ans;
 }
 function findSubsets(ind, nums,ans,temp){
  ans.push([...temp]);

  for(let i=ind; i<nums.length; i++){
    if(i!==ind && nums[i]===nums[i-1]) {
      continue;
    }

    temp.push(nums[i]);
    findSubsets(i+1,nums,ans,temp);
    temp.pop();
  }
 }

 let nums = [1,2,2];
 console.log(subsetsII(nums));
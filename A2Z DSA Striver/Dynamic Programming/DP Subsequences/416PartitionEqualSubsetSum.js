/* 416. Partition Equal Subset Sum
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
*/
/*We need to divide the subset into two part to check the 
condition, so if total sum is S, so s1===s2=== (s/2)
if s is odd, we cant divide in two equal part, so return false
here we can use subset sum equal to k, and k will be sum/2
TC: O(n*target), SC: O(n), we will use space optimization one
*/
var canPartition = function(nums) {
  let n = nums.length;
  let sum = 0;
  for(let i=0; i<n; i++){
      sum += nums[i];
  }
  if(sum % 2 === 1) return false; //odd sum, cant divide into two/
  let target = Math.floor(sum/2);
  return subsetSumEqualToK(nums,n,target);
};
function subsetSumEqualToK(nums,n,target){
  let prev = Array(target+1).fill(false);
  //base case
  prev[0] = true;
  if(nums[0] <= target){
      prev[nums[0]] = true;
  }
  //movement start
  for(let i=1; i<n; i++){
      let curr = Array(target+1).fill(false);
      for(let k=1; k<=target; k++){
          let notTake = prev[k];
          let take = false;
          if(nums[i] <= k){
              take = prev[k-nums[i]];
          }else{
              tale = false;
          }
          curr[k] = (notTake || take);
      }
      prev = curr;
  }
  return prev[target];
}

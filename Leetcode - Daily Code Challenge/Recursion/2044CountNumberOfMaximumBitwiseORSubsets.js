/*2044 Count Number of Maxmum Bitwise-OR subsets
18 Oct 2024, Leetcode POTD

Input: nums = [3,1]
Output: 2
Explanation: The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:
- [3]
- [3,1]
*/

/*First we need to find the maxOR and then we need to 
count the subsets using recursion nottake and take method
for taking we find the currOr in it and in not take one
we didnot check for OR. use of Recursion TC: O(2^n)
SC: O(n) recursion stack space
*/
var countMaxOrSubsets = function(nums) {
  //find the maxOR
  let maxOR = 0;
  for(let num of nums){
      maxOR |= num;
  }
  return subsetsCount(0,0,nums,maxOR); //idx, currOr,nums, maxOr
};
function subsetsCount(idx, currOR, nums, maxOR){
  //base condition, when idx outof bound
  if(idx === nums.length){
      //now here check if currOR is equal to maxone
      if(currOR === maxOR){
          return 1;
      }
      return 0;
  }
  //not take nums[idx]
  let notTake = subsetsCount(idx+1, currOR, nums, maxOR);
  //take nums[idx]
  let take = subsetsCount(idx+1, (currOR | nums[idx]), nums, maxOR);

  return notTake + take;
}


/*In optimise Method we just use Meomization with Recursion
in dp array only idx and currOr is changing so we take 
2d dp array of n+1 and maxOR TC: O(n * maxOR), SC: O(n + max)
*/
var countMaxOrSubsets = function(nums) {
  let maxOR = 0;
  for(let num of nums){
      maxOR |= num;
  }
  //now take a dp array of len and maxOR
  let len = nums.length;
  let dp = Array.from({length: len+1}, ()=>Array(maxOR+1).fill(-1));
  //call helper function for counting the subsets
  return subsetsCount(0,0,nums,maxOR,dp); //idx, currOR
};
function subsetsCount(idx, currOR, nums, maxOR, dp){
  //base condition when idx reach last
  if(idx === nums.length){
      //check for maxOR matching or not
      if(currOR === maxOR){
          return 1;
      }
      return 0;
  }
  //check for dep
  if(dp[idx][currOR] !== -1){
      return dp[idx][currOR];
  }
  //not take nums[idx]
  let notTake = subsetsCount(idx+1, currOR, nums, maxOR, dp);
  //take the nums[idx]
  let take = subsetsCount(idx+1, (currOR | nums[idx]), nums, maxOR, dp);

  dp[idx][currOR] = notTake+take;
  return dp[idx][currOR];
}




//28 July 2025, Leetcode POTD
/*For taking the maximum subsets, we need to do 
pick or not pick method, which is recurison
TC: O(2^n), SC: O(n)
*/
var countMaxOrSubsets = function(nums) {
    let maxOR = 0;
    for(let num of nums){
        maxOR |= num;
    }
    return solve(0,0,nums,maxOR);
};
function solve(idx, currOR, nums, maxOR){
    //base condition, when idx reaches last
    if(idx === nums.length){
        //now check if we have currOR same as maxOR
        if(currOR === maxOR){
            return 1;
        }
        return 0;
    }

    //now apply the recursion
    //not take
    let notTake = solve(idx+1, currOR, nums, maxOR);
    //take one
    let take = solve(idx+1, (currOR | nums[idx]), nums, maxOR);
    return notTake+take;
}
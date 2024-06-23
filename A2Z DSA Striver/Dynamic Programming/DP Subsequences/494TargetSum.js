/* 494. Target Sum
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
*/

/*in this we need to put the sign(+,-), so if we make group of +ve 
number S1 and negative number S2, and S1-S2 === target, so this 
question will become same as Partition Subarray with equal to Diff
Method 1 - use of Memoization DP array
TC: O(n*target), SC: O(n*target)+O(n)
*/
var findTargetSumWays = function (nums, target) {
  let n = nums.length;
  //in this we applu same logic of Partiton Subarray === diff
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
  }
  //edge case, totalSUm-target should be > 0, and divide into 2 part
  if (totalSum - target < 0 || (totalSum - target) % 2 === 1) return 0;
  let sum2 = Math.floor((totalSum - target) / 2);
  let dp = Array.from({ length: n }, () => Array(sum2 + 1).fill(-1));
  return solve(n - 1, sum2, nums, dp);
};
function solve(ind, sum2, nums, dp) {
  //base case
  if (ind === 0) {
    if (nums[0] === 0 && sum2 === 0) return 2;
    if (nums[0] === sum2 || sum2 === 0) return 1;
    return 0;
  }
  if (dp[ind][sum2] !== -1) return dp[ind][sum2];

  //movement, pick and notPick
  let notPick = solve(ind - 1, sum2, nums, dp);
  let pick = 0;
  if (nums[ind] <= sum2) {
    pick = solve(ind - 1, sum2 - nums[ind], nums, dp);
  }

  dp[ind][sum2] = pick + notPick;
  return dp[ind][sum2];
}

/* Method 2 - use of tabulization
TC: O(n*target), SC: O(n*target);
*/
var findTargetSumWays = function (nums, target) {
  let n = nums.length;
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
  }
  //edge case
  if (totalSum - target < 0 || (totalSum - target) % 2 === 1) return 0;
  let sum2 = Math.floor((totalSum - target) / 2);
  let dp = Array.from({ length: n }, () => Array(sum2 + 1).fill(0));

  //base case
  if (nums[0] === 0) {
    dp[0][0] = 2; //two options, pick and nonpick
  } else {
    dp[0][0] = 1; //one option and also picking 0, not change anything
  }

  if (nums[0] !== 0 && nums[0] <= sum2) {
    dp[0][nums[0]] = 1; //pick that elem
  }

  //movement
  for (let ind = 1; ind < n; ind++) {
    for (let k = 0; k <= sum2; k++) {
      let nonPick = dp[ind - 1][k];
      let pick = 0;
      if (nums[ind] <= k) {
        pick = dp[ind - 1][k - nums[ind]];
      }

      dp[ind][k] = pick + nonPick;
    }
  }
  return dp[n - 1][sum2];
};

/* Method 3 - use of Space Optimization
TC: O(n*target), SC: O(n);
*/
var findTargetSumWays = function (nums, target) {
  let n = nums.length;
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
  }
  //edge case
  if (totalSum - target < 0 || (totalSum - target) % 2 === 1) return 0;
  let sum2 = Math.floor((totalSum - target) / 2);
  let prev = Array(sum2 + 1).fill(0);

  //base case
  if (nums[0] === 0) {
    prev[0] = 2; //two options, pick and nonpick
  } else {
    prev[0] = 1; //one option and also picking 0, not change anything
  }

  if (nums[0] !== 0 && nums[0] <= sum2) {
    prev[nums[0]] = 1; //pick that elem
  }

  //movement
  for (let ind = 1; ind < n; ind++) {
    let curr = Array(sum2 + 1).fill(0);
    for (let k = 0; k <= sum2; k++) {
      let nonPick = prev[k];
      let pick = 0;
      if (nums[ind] <= k) {
        pick = prev[k - nums[ind]];
      }

      curr[k] = pick + nonPick;
    }
    prev = curr;
  }
  return prev[sum2];
};

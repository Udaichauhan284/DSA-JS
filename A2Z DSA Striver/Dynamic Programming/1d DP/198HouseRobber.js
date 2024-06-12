/* 198. House Robber
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*/
/*Method 1- use of Memoization (TOp-Down) use of memo array
TC: O(n), SC: O(n)+O(n) for recursion
*/
var rob = function(nums) {
  let n = nums.length;
  let memo = Array(n).fill(-1);
  return solve(n-1,nums,memo);
};
//helper function solve
function solve(ind, nums, memo){
  if(ind < 0) return 0;
  if(memo[ind] !== -1) return memo[ind];
  //dont rob the house
  let notRob = solve(ind-1, nums, memo);
  //rob the house,and add the result from the house before the previous one
  let rob = nums[ind] + solve(ind-2, nums, memo);
  memo[ind] = Math.max(notRob, rob);
  return memo[ind];
}

/* Method 2- use of Tabulization(BottomUp), in this we use memo array
and initial it with arr[0]
TC:O(n), SC: O(n), but no recursion stack space.
 */
var rob1 = function(nums) {
  let n = nums.length;
  let memo = Array(n).fill(-1);
  memo[0] = nums[0];
  for(let ind = 1; ind < n; ind++){
      //rob the house
      let rob = nums[ind];
      if(ind > 1){
          //we need to rob next to adjecent house
          rob += memo[ind-2];
      }

      //not rob the house
      let notRob = memo[ind-1];
      memo[ind] = Math.max(rob, notRob);
  }
  return memo[n-1];
};

/* Method 3- use of space optimization, in this we use the variables
prev = nums[0], prev2 = 0
TC:O(n), SC: O(1)
 */
var rob2 = function(nums) {
  let n = nums.length;
  let prev = nums[0];
  let prev2 = 0
  for(let ind = 1; ind < n; ind++){
      //rob the house
      let rob = nums[ind];
      if(ind > 1){
          //we need to rob next to adjecent house
          rob += prev2;
      }

      //not rob the house
      let notRob = prev;
      let curri = Math.max(rob, notRob);
      //chnage the pointer
      prev2 = prev;
      prev = curri;
  }
  return prev;
};
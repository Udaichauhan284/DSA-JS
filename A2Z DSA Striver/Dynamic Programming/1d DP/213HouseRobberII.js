/* 213 House Robber II
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
*/
/* take two array temp1 and temp2 and in this put nums value, 
temp1 without first element and pass this array to house roubber 1 
code logic(i will use space optimize one)
same do with temp2(array without last elem)
and find out the max among the ans1 and ans2
TC: O(n)+O(n)+O(n) ~O(3n) ~O(n), SC: O(n)
*/
var rob = function(nums) {
  let temp1 = [];
  let temp2 = [];
  let n = nums.length;
  if(n === 1) return nums[0];
  for(let i=0; i<n; i++){
      //ignore the first eleme
      if(i !== 0) temp1.push(nums[i]);
      //ignore the last elem
      if(i !== n-1) temp2.push(nums[i]);
  }
  //call the house robber 1 logic (space optimize one)
  let ans1 = helperRob(temp1);
  let ans2 = helperRob(temp2);

  return Math.max(ans1, ans2);
};
//Helper Rob Function, logic of House Robber 1
function helperRob(arr){
  let n = arr.length;
  let prev = arr[0];
  let prev2 = 0;
  for(let ind=1; ind<n; ind++){
      let rob = arr[ind];
      if(ind > 1){
          rob += prev2;
      }
      let notRob = prev;
      let curri = Math.max(rob, notRob);
      prev2 = prev;
      prev = curri;
  }
  return prev;
}
/* 983. Minimum Cost For Tickets
31 Dec 2024, Leetcode POTD, Array, DP

Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation: For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total, you spent $11 and covered all the days of your travel.
*/

/*In this we have choice to take pass from 3 at each 
index, if we take cost7 at currIndex, so next index 
will start from currIdx+7
TC: O(maxDays), SC: O(n)
*/

const mincostTickets = (days, costs) => {
  let dp = Array(367).fill(-1); //only idx is changing on days, we take
  //max days dp
  return solve(0,days,costs);
}
function solve(idx, days, costs){
  //base case, when idx reach the last 
  let len = days.length;
  if(idx >= len) return 0; 
  //check for dp
  if(dp[idx] !== -1) return dp[idx];

  //now for 1 day ticket
  let cost1 = costs[0] + solve(idx+1,days,costs);

  //now for 7 days, so we need to find the where the idx will be
  let maxDays = days[idx] + 7;
  let j = idx;
  while(j < len && days[j] < maxDays){
    j++;
  }
  let cost7 = costs[1] + solve(j,days,costs);

  //now for 30 days, so we need to find the where the idx will be
  maxDays = days[idx] + 30;
  j = idx;
  while(j < len && days[j] < maxDays){
    j++;
  } 
  let cost30 = costs[2] + solve(j, days, costs);

  dp[idx] = Math.min(cost1, cost7, cost30);
  return dp[idx];
}
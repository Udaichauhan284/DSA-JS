/* 56. Merge Intervals
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/
/* Brute Method, first ask is that intervals are sorted or not, if not sorted first sort it out, them compare each interval weith each one, so TC : O(nlogn) + O(n^2), SC : O(1)

 Optimal Method - take a ans array and put the first interval in that, after sorting it out, then compare comming interval with that last val in ans, and is curr[0] < last[1], chnage the last value TC: O(nlogn)+O(n), SC : O(n) just for ans;
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let len = intervals.length;
  let ans = [intervals[0]];
  for (let i = 1; i < len; i++) {
    let curr = intervals[i];
    let last = ans[ans.length - 1];
    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      ans.push(curr);
    }
  }
  return ans;
};

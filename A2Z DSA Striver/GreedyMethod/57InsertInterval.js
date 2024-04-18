/* 57. Insert Intervals
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
*/
/* Brute Method, do the modification in interval only
 if interval[1] < newInterval[0] i++;
 if interval[0] > newInterval[1] insert the newInterval and shift the interval
 now merge the intervals
 if newInterval is bigger, then insert at the last.
 but this will give TLE

 Optimal method- do the same thing but in second if when interval[0] > newInterval[1] break from that loop and add after the loop in result, take result arr also, TC : O(n), SC : O(n) for result;
 */
var insert = function (intervals, newInterval) {
  let result = [];
  let len = intervals.length;
  let i = 0;
  while (i < len) {
    if (intervals[i][1] < newInterval[0]) {
      //if intercal ka endpoint chota hai, newinterval kye start point sye.
      result.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      break;
    } else {
      //marge, ,means change the newIntervals value
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    }
    i++;
  }
  result.push(newInterval);
  while (i < len) {
    result.push(intervals[i]);
    i++;
  }
  return result;
};

/* 17 Mar 2024
57. Insert Interval.
intervals = [[1,3],[6,9]], newInterval = [2,5]
o/p: [[1,5],[6,9]]
*/

 //Brute App: iterate on each interval - use two loops. TC O(n^2), SC O(1).
 //Optimal App: here same we are iterating on each interval, nut rather than changing the origanl interval, taking the result and put each interval in that result. TC O(n), SC O(n)

const insert = (intervals, newInterval) => {
  let len = intervals.length;
  let i =0;
  let result = [];
  while(i<len){
    if(intervals[i][1] < newInterval[0]){
      result.push(intervals[i]);
    }else if(intervals[i][0] > newInterval[1]){
      //agar intervals ka start point bada hai newInterval kye end point sye, to break
      break;
    }else {
      //merge karo and next dekho
      newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
      newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    }
    i++;
  }
  result.push(newInterval);
  while(i < len){
    result.push(intervals[i]);
    i++;
  }
  return result;
}
let intervals = [[1,3],[6,9]];
let newInterval = [2,5];
console.log(insert(intervals,newInterval));
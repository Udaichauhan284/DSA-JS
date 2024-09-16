/* 539 Minimum Time DIfference
16 Sept 2024, Leetcode POTD, Medium, Array

Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

Input: timePoints = ["23:59","00:00"]
Output: 1
*/

/*Method 1- first chnage the timePoints str to min arrays and then sort
it, it will easy to find out the min time difference in min, then at last
find the differce of last and first one. 24 * 60 - last + first
TC: O(nlogn), SC: O(n)
*/
var findMinDifference = function(timePoints) {
  let len = timePoints.length;
  let mintues = Array(len).fill(0); //arr for min to store
  for(let i=0; i<len; i++){
      let time = timePoints[i];
      let hourSubstr = time.substr(0,2); //HH
      let minSubstr = time.substr(3); //MM

      let hourInt = parseInt(hourSubstr);
      let minInt = parseInt(minSubstr);

      mintues[i] = hourInt * 60 + minInt;
  }
  //need to sort the mintues
  mintues.sort((a,b) => a-b); 
  let result = Number.MAX_VALUE; //as we need min Mintue
  let mintLen = mintues.length;
  for(let i=1; i<mintLen; i++){
      result = Math.min(result, (mintues[i] - mintues[i-1])); 
  }
  //now also find out the circular difference, last and first
  result = Math.min(result, (24*60 - mintues[mintLen - 1] + mintues[0]));
  return result;
};
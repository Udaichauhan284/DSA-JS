/* 1942 The Number of the Smallest Unoccupied Chair
11 Oct 2024, Leetcode POTD

Input: times = [[1,4],[2,3],[4,6]], targetFriend = 1
Output: 1
Explanation: 
- Friend 0 arrives at time 1 and sits on chair 0.
- Friend 1 arrives at time 2 and sits on chair 1.
- Friend 1 leaves at time 3 and chair 1 becomes empty.
- Friend 0 leaves at time 4 and chair 0 becomes empty.
- Friend 2 arrives at time 4 and sits on chair 0.
Since friend 1 sat on chair 1, we return 1.
*/

/*Brute Method-sort the time based on arivaltime, then
in loop on chairs, see if chair <= arival , set the depart
value in chair and then only check if arrival equals to 
targetFriendArrivalTime, if yes return i and break
TC: O(n^2), SC: O(n)
*/
var smallestChair = function(times, targetFriend) {
  let len = times.length;
  let chairs = Array(len).fill(-1);
  let targetFriendArrivalTime = times[targetFriend][0];
  //need to sort the times, based on arrival time
  times.sort((a,b) => a[0]-b[0]);
  //now traverse over the times and then chairs
  for(let [arrival, leaving] of times){
      for(let i=0; i<len; i++){
          if(chairs[i] <= arrival){
              //occupied that chair and set the leaving 
              chairs[i] = leaving;

              if(arrival === targetFriendArrivalTime){
                  return i;
              }
              break;
          }
      }
  }
  return -1;
};
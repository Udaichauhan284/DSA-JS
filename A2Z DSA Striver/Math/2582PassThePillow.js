/* 2582 Pass the Pillow
06 July 2024, Leetcode POTD, Math
Input: n = 4, time = 5
Output: 2
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
After five seconds, the 2nd person is holding the pillow.
*/

/*simple use the dir +1 to left to right and -1 righr to left
we start the loop on time and move the idx
TC: O(time), SC: O(1)
*/
var passThePillow = function(n, time) {
  let pillow = 1;
  let dir = 1; //left to right move
  while(time > 0){
      if(pillow+dir >= 1 && pillow+dir <= n){
          //we have inbound the pillow so that it will move in that range only
          pillow += dir;
          time--;
      }else{
          //when pillow idx reach n, change the direction
          dir *= -1; //-1*-1 = 1, 1*-1 = -1
      }
  }
  return pillow;
};

/*we se simple math
we find the full round , in time -> time/n-1, why n-1 we need n-1 to 
reach at last n, we find the timeLeft timeMODn-1, and then we find 
if fullRound is even , if yes, measn we move 2 full round and reach
the starting postion the ans will be timeLeft+1
TC: O(1), SC: O(1)
*/
var passThePillow = function(n, time) {
  let fullRound = Math.floor(time/(n-1));
  let timeLeft = time%(n-1);
  if(fullRound % 2 === 0){
      //even means we stand at starting postion, move to Left to Right
      return timeLeft + 1;
  }else{
      //odd , stand at last postion n, need to move right to left
      return n - timeLeft;
  }
  return -1;
};
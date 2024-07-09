/* 1701 Average Waiting Time
09 July 2024, Leetcode POTD, Array Simulation
Input: customers = [[1,2],[2,5],[4,3]]
Output: 5.00000
Explanation:
1) The first customer arrives at time 1, the chef takes his order and starts preparing it immediately at time 1, and finishes at time 3, so the waiting time of the first customer is 3 - 1 = 2.
2) The second customer arrives at time 2, the chef takes his order and starts preparing it at time 3, and finishes at time 8, so the waiting time of the second customer is 8 - 2 = 6.
3) The third customer arrives at time 4, the chef takes his order and starts preparing it at time 8, and finishes at time 11, so the waiting time of the third customer is 11 - 4 = 7.
So the average waiting time = (2 + 6 + 7) / 3 = 5.
*/

/*Basic Array Simulation Question
TC: O(n), SC: O(1)
*/
var averageWaitingTime = function (customers) {
  let len = customers.length;
  let totalWaitTime = 0;
  let currTime = 0; //what time now, to manage when chef is free
  for (let i = 0; i < len; i++) {
    let [arrivalTime, cookTime] = customers[i];
    // now check if arrivalTime is big, so make it currTime
    if (arrivalTime > currTime) {
      currTime = arrivalTime;
    }
    let waitTime = currTime + cookTime - arrivalTime;
    totalWaitTime += waitTime;
    //now change the currTime, when chef is free
    currTime += cookTime;
  }
  return totalWaitTime / len;
};

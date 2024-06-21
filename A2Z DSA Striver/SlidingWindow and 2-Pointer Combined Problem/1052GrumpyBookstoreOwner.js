/* 1052. Grumpy Bookstore Owner
21 June 2024 Leetcode POTD, Array, SLiding Window
Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

*/
/* Sliding Window
TC: O(n), SC: O(1)
*/
var maxSatisfied = function (customers, grumpy, minutes) {
  let n = customers.length;
  let currUnSatCus = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) currUnSatCus += customers[i];
  }
  let maxUnSatCus = currUnSatCus;
  let i = 0;
  let j = minutes;
  while (j < n) {
    currUnSatCus += customers[j] * grumpy[j]; //new one,
    currUnSatCus -= customers[i] * grumpy[i]; //remove old one;
    maxUnSatCus = Math.max(maxUnSatCus, currUnSatCus);
    i++;
    j++;
  }
  let totalSatCus = maxUnSatCus;
  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) {
      totalSatCus += customers[i];
    }
  }
  return totalSatCus;
};

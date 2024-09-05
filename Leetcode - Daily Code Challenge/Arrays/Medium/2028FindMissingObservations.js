/* 2028 Find Missing Observations
05 Sept 2024, Leetcode POTD, MEdium, Array, Math

Input: rolls = [3,2,4,3], mean = 4, n = 2
Output: [6,6]
Explanation: The mean of all n + m rolls is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4.
*/

/*Method 1, in this we getting dice from Min(nRoll-n+1, 6)
IN this we need to find the totalSum = (mean * (n+m)), then we need to
find the mRolls Sum and with that totalSum - mRollsSum we will get Ntoalsum
if this sum is smaller then n*1 or greater than n*6 return [].
while loop on nRollSum and find out the dice = nRollSum - n + 1, 6 min 
TC: O(m + n), m for mRollSum and n for while loop
SC: O(1)
*/
var missingRolls = function(rolls, mean, n) {
  let m = rolls.length;
  let res = []; //size of n
  let totalSum = mean * (m+n);
  let mRollSum = rolls.reduce((acc, value) => acc+value, 0); //O(m)
  let nRollSum = totalSum - mRollSum;
  if(nRollSum < (n*1) || nRollSum > (n*6)){
      return []; //agrNRollSum small hai n*1 and bigger hai n*6
      //means n=2, 2 to 12 range, return empty not able to find n rolls
  }
  //loop on nRollSum
  while(nRollSum > 0){
      let dice = Math.min((nRollSum - n + 1), 6);
      res.push(dice);
      nRollSum -= dice;
      n--;
  }
  return res;
};



/*Method 2 - same as method 1, just in this instead of while loop
we will find the base by divding the nRollSum / n and remainder 
nRolls % n and then we put base in result and for loop on remainder
if any and add 1 to result one by one
TC: O(n+m), SC: O(1)
*/
var missingRolls = function(rolls, mean, n) {
  let m = rolls.length;
  let totalSum = mean * (n+m);
  let mRollSum = rolls.reduce((acc,value) => acc+value, 0);
  let nRollSum = totalSum - mRollSum;
  if(nRollSum < n*1 || nRollSum > n*6){
      return [];
  }

  let base = Math.floor(nRollSum / n);
  let remainder = nRollSum % n;
  let result = Array(n).fill(base);
  //if any remainder, for loop on remainder
  for(let i=0; i<remainder; i++){
      result[i] += 1;
  }
  return result;
};
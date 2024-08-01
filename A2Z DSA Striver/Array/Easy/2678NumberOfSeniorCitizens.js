/* 2678. Number of Senior Citizens
1 August 2024, Leetcode POTD, Array, String
Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
Output: 2
Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.
*/

/*TC: O(n), SC: O(1)
*/
var countSeniors = function(details) {
  let count = 0;
  for(let detail of details){
      let firstDigit = detail[11] - '0';
      let secondDigit = detail[12] - '0';
      let age = firstDigit * 10 + secondDigit;

      if(age > 60){
          count++;
      }
  }
  return count;
};


/*TC: O(n), SC: O(1)
*/
var countSeniors = function(details) {
  let count = 0;
  for(let detail of details){
      let firstDigit = parseInt(detail[11]);
      let secondDigit = parseInt(detail[12]);
      let age = firstDigit * 10 + secondDigit;

      if(age > 60){
          count++;
      }
  }
  return count;
};
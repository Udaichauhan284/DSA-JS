/* 860 Lemonade Change
15 August 2024, Leetcode POTD, Arrat, Greedy

Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

*/

/*IN this we need to maintain the change, atmax we will 
have 20 dollar note, so we need to give 5 * 3notes or 1 
5note and 10 note, so for that we need to maintain the
count of five and ten note count, TC: O(n), SC: O(1)
*/
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  for (let bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five > 0) {
        five--;
        ten++;
      } else return false; //means we have 0-5 note
    } else {
      //we got 20 dollar note
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else return false;
    }
  }
  return true;
};

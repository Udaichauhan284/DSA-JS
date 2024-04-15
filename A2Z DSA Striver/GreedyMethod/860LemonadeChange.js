/* 860 Lemonade Change
bills : 5,10,20, lemonade charge is of 5
bills arr : [5,5,5,10,20], o/p: true

Input: bills = [5,5,10,10,20]
Output: false

 //in these we need to check if we have 5 and ten bills for change or not, for 20 bill, i can return 3x5 or 1x5 and 1x10 bill: O(n)
*/
const lemonadeChange = (bills) => {
  //take a variable of 5 and 10
  let five = 0, ten = 0;
  for (let bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five > 0) {
        five = Math.max(0, five-1); //five--
        ten++;
      } else return false;
    } else {
      if (five > 0 && ten > 0) {
        //this for 20 bill note
        five--;
        ten--;
      } else if (five >= 3) {
        //change of 5 is 3 means 15
        five -= 3;
      } else return false;
    }
  }
  return true;
};
console.log(lemonadeChange([5,5,5,10,20]));

/* 1845. Sum of Digits of String After Convert
03 Sep 2024, Leetcode POTD, EASY, String, Simulation

Input: s = "iiii", k = 1
Output: 36
Explanation: The operations are as follows:
- Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
- Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
Thus the resulting integer is 36.
*/

/*First we change string to num string by ch-'a'. then in while
loop we will find out the sum
TC: O(k*n), SC: O(1)
*/
const getLucky = (s, k) => {
  //first we need num a-1, b-2 like this one fron s
  let num = "";
  for(let ch of s){
    let charInt = ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1; //a-1, b-2
    num += String(charInt); //"iiii" -> "9999"
  }
  //now we need sum from this num string
  let sum;
  while(k > 0){
    sum = 0;
    for(let ch of num){
      sum += ch - '0'; //9+9+9+9
    }
    num = String(sum); //as we have k=2, so we need to add 36 => 9, that why num to sum;
    k--;
  }
  return parseInt(sum);
}

let ans = getLucky("iiii", 2);
console.log(ans);
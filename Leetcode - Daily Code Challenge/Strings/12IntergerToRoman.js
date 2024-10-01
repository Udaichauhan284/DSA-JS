/* 12 Integer to Roman
1 Oct 2024, Partice this one

Input: num = 3749

Output: "MMMDCCXLIX"

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
  9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
*/

/*In thi we need to take roman object in descending order as 
given in question, and then we need to divide the num with the 
largest value possible so we tarverse in roman object and check 
for that, how many times we can put that in our str num / val
then in while loop on times we make str and then take out the 
remainder from num , to form new roman. TC: O(13)~ O(1), SC: O(1)
*/
var intToRoman = function (num) {
  let roman = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40, //L=50, X = 10, 50-10 = 40
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1,
  }
  let result = "";
  //traverse on our roman object
  for (let [sym, val] of Object.entries(roman)) { //O(13)
      if (num === 0) break;
      //now check how many times a num can divide by val
      let times = Math.floor(num / val);
      //now add that sym this many times
      while (times--) {
          result += sym;
      }
      //now break the num small, take remainder, for futher
      //divide 
      num = num % val;
  }
  return result;
};
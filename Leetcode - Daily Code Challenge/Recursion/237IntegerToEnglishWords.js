/* 273. Integer to English Words
07 Augusr 2024, Leetcode POTD

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"

*/

/*In this we use recursion as we can divide number and send remaining num again for func
5-five, 95-ninety five, 995-nine hundred ninety five
TC: O(log10(num)), SC: O(log10(num));
*/
var numberToWords = function(num) {
  let belowTen = {
     "0":"","1":"One", "2": "Two", "3":"Three", "4":"Four",
      "5":"Five", "6":"Six", "7": "Seven", "8":"Eight", "9": "Nine"
  };
  let belowTwenty = {
      "10":"Ten", "11":"Eleven","12":"Twelve","13":"Thirteen","14":"Fourteen","15":"Fifteen","16":"Sixteen","17":"Seventeen","18":"Eighteen","19":"Nineteen"
  };
  let belowHundred = {
      "1":"Ten", "2":"Twenty", "3":"Thirty","4":"Forty","5":"Fifty",
      "6":"Sixty","7":"Seventy","8":"Eighty","9":"Ninety"
};

  if(num === 0){
      return "Zero";
  }

  //recursion solve function
  const solve = (num) => {
      if(num < 10){
          return belowTen[num];
      }
      if(num < 20){
          return belowTwenty[num];
      }
      if(num < 100){ //89 -> Eighty Nine, 90 ninety
          let tensPlace = Math.floor(num / 10);
          return belowHundred[tensPlace] + ((num%10 !== 0) ? " "+belowTen[num % 10] : "");
      }
      if(num < 1000){ //995, find 100 place recursion +hundred + solve 95
          let hundredPlace = Math.floor(num / 100);
          return solve(hundredPlace)+" Hundred" + ((num%100 !== 0) ? " "+solve(num%100) : "");
      }
      if(num < 1000000){
          let thousandPlace = Math.floor(num / 1000);
          return solve(thousandPlace)+" Thousand" + ((num%1000 !== 0) ? " "+solve(num%1000): "");
      }
      if(num < 1000000000){
          let millionPlace = Math.floor(num / 1000000);
          return solve(millionPlace)+" Million" + ((num%1000000 !== 0) ? " "+solve(num%1000000): "");
      }

      let billionPlace = Math.floor(num / 1000000000);
      return solve(billionPlace)+" Billion" + ((num%1000000000 !== 0) ? " "+solve(num%1000000000): "");
  }
  return solve(num);
};
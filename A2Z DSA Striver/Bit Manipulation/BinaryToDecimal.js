/* Binary to Decimal
(111)base2 change to decimal base 10
111 to 7, 1101 to 13
decimal += num%10 - take out last digit * Math.pow(2,i)
divide the num = num/10, i++
*/
function binaryToDecimal(num){
  let decimal = 0;
  let i = 0;
  while(num != 0){
    decimal += Math.floor(num%10) * Math.pow(2,i);
    num = Math.floor(num/10);
    i++;
  }
  return decimal;
}
console.log(binaryToDecimal(111));
console.log(binaryToDecimal(1101));
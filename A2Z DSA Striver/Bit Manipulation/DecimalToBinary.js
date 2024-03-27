/* converting decimal to binary
(7)base10 means this is decimal convert this to binary base 2.
111
*/
function decimalToBinary(num){
  let bin = "";
  while(num > 0){
    bin = (num % 2) + bin;
    num = Math.floor(num/2);
  }
  return bin;
}
console.log(decimalToBinary(100));
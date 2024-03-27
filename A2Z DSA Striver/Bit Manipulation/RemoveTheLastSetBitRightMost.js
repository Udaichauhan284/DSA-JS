/* Remove the last set bit (right most)
n = 1101 , so remove 1 from right.
ans = 1100
here we talking about removing , so we can use AND, do AND with n-1/
*/
function removeLastSetBit(num){
  return num & (num-1);
}
console.log(removeLastSetBit(13));
console.log(removeLastSetBit(84));
/* Clear the ith bit
n = 13, i 2
1101 , i = 2 , means 1 change this 1 to 0, this means of clearing the ith bit.
*/
function clearBit(num,i){
  let res = 0;
  res = num & ~(1<<i);
  return res;
}
console.log(clearBit(13,1));  //13
console.log(clearBit(9,2));  //9
console.log(clearBit(13,2)); //9
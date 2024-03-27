/* set the ith bit of N.
n = 13, i = 2
1101 so set the bit of 13, which is already set so no chnage. 
n = 9 , i = 2
1001 i = 2, do 1 <<(left shift) by 2 and then do OR with n, to set the bit o to 1
*/
function setithBit(num,i){
  let res = 0;
  res = num | (1 << i);
  return res;
}
console.log(setithBit(9,2)); //13
console.log(setithBit(13,2)); // 13
console.log(setithBit(13,1)); // 15
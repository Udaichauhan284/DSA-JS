/* Toogle the ith bit, measn change the bit if 1 change to 0, if 0 change it 1.
n = 13 i=2;
1101 change 2nd bit which is 1 to 0, first 1<<i 1(left shift by i), use XOR 
*/
function toggleithBit(num,i){
  let res = 0;
  res = num ^ (1<<i);
  return res;
}
console.log(toggleithBit(13,2)); //9 1001
console.log(toggleithBit(13, 1)); //15 1111
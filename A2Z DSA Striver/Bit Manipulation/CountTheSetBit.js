/* Count the set bit of n 
n = 13, set bits in this 1101 -> 1 -> 3.
n = 7, set bits in this 111 -> 3.
*/
//Using Simple Method - num%2 === 1 count++, TC O(logN)
function countTheSetBit(num){
  let count=0;
  while(num > 1){
    if(num%2 === 1) count++;

    num = Math.floor(num / 2);
  }
  if(num === 1) count++;

  return count;
}
// console.log(countTheSetBit(13)); // 3
// console.log(countTheSetBit(9)); // 1001 - 2.

//Using Bit Wise , num%2 can we change as num & 1 with this we can get the 1 or 0, now i need to divide the num to make it small, for this i can use Right Shift (>>), it help to divide the num. TC O(logN).
function countTheSetBitUsingBitWise(num){
  let count = 0;
  while(num > 1){
    count += num & 1; //this will give 0 or 1 and that will increase the count.

    //now divide the num, make it small - use Right Shift 
    num = num >> 1;
  }
  if(num === 1) count++;
  
  return count;
}
// console.log(countTheSetBitUsingBitWise(13)); // 1101 - 3
// console.log(countTheSetBitUsingBitWise(7)); //111 - 3
// console.log(countTheSetBitUsingBitWise(9)); //1001 - 2

//Using One Other Method for counting the bit - very optimized method n !== 0 -> n&(n-1). so it will go till 0 and make set bit - off and thats how we count set one. TC: O(no.of set bit) - O(31) in worst case.
function countTheSetBitUsingBitWise1(num){
  let count = 0;
  while(num !== 0){
    num = num & (num-1);
    count++;
  }
  return count;
}
console.log(countTheSetBitUsingBitWise1(13)); //1101 - 3
console.log(countTheSetBitUsingBitWise1(7)); //111 - 3
console.log(countTheSetBitUsingBitWise1(9)); //1001 - 2
console.log(countTheSetBitUsingBitWise1(1)); // 1 - 1
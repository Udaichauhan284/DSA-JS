/* 2220 Minimum BIt FLips To Convert Number
11 Sept 2024, Leetcode POTD, Bit Manupilations

Input: start = 10, goal = 7
Output: 3
Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
- Flip the first bit from the right: 1010 -> 1011.
- Flip the third bit from the right: 1011 -> 1111.
- Flip the fourth bit from the right: 1111 -> 0111.
It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.
*/

/*Method 1. so in this we need to see how many bits are
not matching, so we do while loop and find our which 
bit are not matching adn increase the count
TC: O(1), SC: O(1)
*/
var minBitFlips = function(start, goal) {
  let count = 0;
  while(start > 0 || goal > 0){
      if((start & 1) !== (goal & 1)){
          count++;
      }
      //make right shift so last bit gone
      start = start >> 1;
      goal = goal >> 1;
  }
  return count;
};


/*Method 2- use of xor between start and goal to find out
the set bit, then will loop on xor, to count that set
bits. TC: O(1), SC: O(1)
*/
var minBitFlips = function(start, goal) {
  let count = 0;
  let xorResult = start ^ goal;

  while(xorResult !== 0){
      xorResult = xorResult & (xorResult - 1);
      count++;
  }
  return count;
};


/*Method 3 in this we also use xor of goal and start
but in while on xor, we check the last bit is set or not
in if condition and increse the count and move the xor
using Right shift
TC: O(1), SC: O(1) 
*/
var minBitFlips = function(start, goal) {
  let count = 0;
  let xorRes = start ^ goal;
  while(xorRes > 0){
      if(xorRes & 1){
          count++;
      }
      //move the next bit using Right shitf
      xorRes = xorRes >> 1;
  }
  return count;
};
/* 476 Number Complement
22 August 2024, Leetcode POTD, Bit Manupilation

Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
*/

/*Method 1- use of simple compliment, use of XOR by bit by bit, for oth bit
we do xor by 001, then for 1st bit we do xor for 010 for moving this we do
left shift of 1<<with i. TC: O(num of bit) ~ O(log2(num)), SC: O(1)
*/
var findComplement = function(num) {
  let numOfBits = parseInt(Math.log2(num)) + 1; //need to count the bits
  for(let i=0; i<numOfBits; i++){
      num = num ^ (1<<i); //using XOR on each bit by 001, 010...
  }
  return num;
};

/*Method 2- simple xor the num with 1s, how to know how many 1s we need, for that
we need to count the bits of nums and then left shift 1 by numOfBits so it will
become 2^numofbits then -1, suppose numofbits 3, 2^3 => 8 - 1 => 7 measn all 111
TC: O(log2(num)), SC: O(1)
*/
var findComplement = function(num) {
  let numOfBits = parseInt(Math.log2(num)) + 1;
  let mask = (1 << numOfBits) - 1; // 2^numofbits - 1
  return mask ^ num;
};
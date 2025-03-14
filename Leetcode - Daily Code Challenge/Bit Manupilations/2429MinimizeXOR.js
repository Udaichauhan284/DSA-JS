/*2429. Minimize XOR
15 Jan 25, Leetcode POTD, Bit Manupilation

Input: num1 = 3, num2 = 5
Output: 3
Explanation:
The binary representations of num1 and num2 are 0011 and 0101, respectively.
The integer 3 has the same number of set bits as num2, and the value 3 XOR 3 = 0 is minimal.
*/

// Time Complexity: O(log(n))
// Space Complexity: O(1)
var minimizeXor = function (num1, num2) {
  let x = num1;

  const requiredSetBitCount = num2.toString(2).replace(/0/g, "").length;
  let currSetBitCount = x.toString(2).replace(/0/g, "").length;

  let bit = 0; // position of bit
  if (currSetBitCount < requiredSetBitCount) {
    while (currSetBitCount < requiredSetBitCount) {
      if (!isSet(x, bit)) {
        x = setBit(x, bit);
        currSetBitCount++;
      }
      bit++;
    }
  } else if (currSetBitCount > requiredSetBitCount) {
    while (currSetBitCount > requiredSetBitCount) {
      if (isSet(x, bit)) {
        x = unsetBit(x, bit);
        currSetBitCount--;
      }
      bit++;
    }
  }

  return x;
};

function isSet(x, bit) {
  return (x & (1 << bit)) !== 0;
}

function setBit(x, bit) {
  return x | (1 << bit);
}

function unsetBit(x, bit) {
  return x & ~(1 << bit);
}



//14 March 25, This is good method
//TC: O(logn), SC O(1)
var minimizeXor = function (num1, num2) {
  //find the set bits in nums2
  let setBits = countSetBits(num2);
  let bits = 31;
  let res = 0;
  while (bits >= 0 && setBits > 0) {
      //check if bits is set in num1 and if som set the bits in
      //res
      if ((num1 & (1 << bits)) !== 0) {
          res = res | (1 << bits)
          setBits--;
      }
      bits--;
  }

  bits = 0;
  while (setBits > 0 && bits < 32) {
      if ((num1 & (1 << bits)) === 0) {
          res = res | (1 << bits);
          setBits--;
      }
      bits++;
  }
  return res;
};
function countSetBits(n){
  let count = 0;
  while(n > 0){
      n = n & (n-1);
      count++;
  }
  return count;
}
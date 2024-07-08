/* Bit's Basic Operations
In XOR function you are given two integers n and m return the xor of n and m.

In check function you are given two integer a and b return 1 if ath bit (1-indexed) of b is set otherwise return 0.

In setBit function you are given two integer c and d, set the cth bit (0-indexed) of d if not yet set .

Input:
n = 1, m = 2
a = 3, b = 4
c = 5, d = 6
Output: 3 1 38
Explanation: 1 xor 2 = 3, 3rd bit of 4 is set. After setting 5th bit of 6 result is 100110 which in decimal form is 38.
*/

class Solution {
  //Function to perform XOR of two numbers.
  XOR(n, m)
  {
      //your code here
      return n ^ m;
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {boolean}
  */

  //Function to check if a and b are same or not.
  check(a, b)
  {
      //your code here
      // Check if the (a-1)-th bit of b is set (1-indexed to 0-indexed)
      return (b & (1 << (a-1)) ? 1: 0)
  }

  /**
   * @param {number[]} c
   * @param {number} d
   * @returns {number[]}
  */

  //Function to set the kth bit of c.
  setBit(c, d)
  {
      //your code here
      return (d | (1 << c));
  }
}
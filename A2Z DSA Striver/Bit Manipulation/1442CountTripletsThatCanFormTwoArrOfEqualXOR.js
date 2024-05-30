/* 1442. Count Triplets That Can Form Two Arrays of Equal XOR
30 May 2024 - Leetcode POTD, Topic: Array, Bit Manipulation.
*/
//TC: O(n^2), SC: O(n)
var countTriplets = function(arr) {
  let prefixXor = [...arr];

      prefixXor.unshift(0); // initially the xor cumulative will be 0
      let n = prefixXor.length;

      for (let i = 1; i < n; i++) {
          prefixXor[i] ^= prefixXor[i - 1];
      }

      let triplets = 0;

      for (let i = 0; i < n; i++) {
          for (let k = i + 1; k < n; k++) {
              if (prefixXor[k] == prefixXor[i]) {
                  triplets += k - i - 1;
              }
          }
      }

      return triplets;
};
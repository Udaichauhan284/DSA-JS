/* 1442. Count Triplets That Can Form Two Arrays of Equal XOR
30 May 2024 - Leetcode POTD, Topic: Array, Bit Manipulation.
*/
/* Method 1- use of Brute Method of 3 nested loops
i to j-1, and j to k, TC: O(n^3), SC: O(1)
*/
var countTriplets1 = function (arr) {
  let len = arr.length;
  let triplets = 0;
  for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
          let a = 0;
          for (let k = i; k < j; k++) {
              a ^= arr[k];
          }

          let b = 0;
          for (let k = j; k < len; k++) {
              b ^= arr[k];
              if (a === b) {
                  triplets++;
              }
          }

      }
  }
  return triplets;
};
//TC: O(n^2), SC: O(n)
var countTriplets2 = function(arr) {
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

/* Method 3 - without use of prefixXor array
when you see 0 measn we can increase out count
TC: O(n^2), SC: O(1)
*/
const countTriplets = (arr) => {
  let len = arr.length;
  let triplets = 0;
  for(let i=0; i<len; i++){
      let a = arr[i];
      for(let k=i+1; k<len; k++){
          a ^= arr[k];
          if(a === 0){
              triplets += k-i;
          }
      }
  }
  return triplets;
}
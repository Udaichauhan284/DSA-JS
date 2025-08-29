/*3021 Alice and Bob Playing Flower Game
29 Aug 2025, leetcode potd, medium
Input: n = 3, m = 2
Output: 3
Explanation: The following pairs satisfy conditions described in the statement: (1,2), (3,2), (2,1)

*/

var flowerGame = function(n, m) {
    return Math.floor((n + 1) / 2) * Math.floor(m / 2) 
         + Math.floor(n / 2) * Math.floor((m + 1) / 2);
};
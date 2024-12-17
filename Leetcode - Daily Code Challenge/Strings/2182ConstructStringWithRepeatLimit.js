/* 2182. Construct String With Repeat Limit
17 Dec 2024, Leetcode POTD, String, COunt Freq Array

Input: s = "cczazcc", repeatLimit = 3
Output: "zzcccac"
Explanation: We use all of the characters from s to construct the repeatLimitedString "zzcccac".
The letter 'a' appears at most 1 time in a row.
The letter 'c' appears at most 3 times in a row.
The letter 'z' appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return "zzcccac".
Note that the string "zzcccca" is lexicographically larger but the letter 'c' appears more than 3 times in a row, so it is not a valid repeatLimitedString.
*/

/*IN this we will take a count freq array, in this we will maintain the 
freq of char, after that for largest string we will traverse from right
to left.
TC: O(n + 26) ~ O(n), SC: O(26)~ O(1)
*/
var repeatLimitedString = function(s, repeatLimit) {
  let count = Array(26).fill(0);
  let result = "";
  for(let ch of s){ //O(n)
      let char = ch.charCodeAt(0)-'a'.charCodeAt(0);
      count[char]++;
  }
  //now we will traverse from right to left
  let i=25;
  while(i >= 0){
      //now if the freq, 0 skip that
      if(count[i] === 0){
          i--;
          continue;
      }
      let char = String.fromCharCode('a'.charCodeAt(0) + i);
      let freq = Math.min(count[i], repeatLimit);
      for(let i=0; i<freq; i++){
          result += char;
      }
      count[i] -= freq;
      //now if some freq if still left, then we need to take from
      //right side
      if(count[i] > 0){
          let j=i-1;
          while(j >=0 && count[j] === 0){
              j--;
          }
          if(j < 0) break;

          let char = String.fromCharCode('a'.charCodeAt(0) + j);
          result += char;
          count[j]--;
      }
  }
  return result;
};
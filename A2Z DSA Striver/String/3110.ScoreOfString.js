/* 3110. Score of a string
01 June 2024 -> Leetcode POTD. Topic: String
Input: s = "hello"
Output: 13

Explanation:
The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.
*/
/* Simply Start the loop from i=1 and take a abs diff of i-1 and i
and add into score.
TC: O(n), SC: O(1)
*/
var scoreOfString = function(s) {
  let score = 0;
  let len = s.length;
  for(let i=1; i<len; i++){
      score += Math.abs(s.charCodeAt(i-1) - s.charCodeAt(i));
  }
  return score;
};
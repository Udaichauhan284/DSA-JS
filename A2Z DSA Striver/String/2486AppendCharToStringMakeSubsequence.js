/* 2486. Append Characters to String to Make Subsequence
03 June 2024 Leetcode POTD, Topic: String, Two Pointers
Input: s = "coaching", t = "coding"
Output: 4
Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
Now, t is a subsequence of s ("coachingding").
It can be shown that appending any 3 characters to the end of s will never make t a subsequence.
*/
/*In this question we need to take two pointer and we move these pointer
in string to search t in s. if s char and t char is same move both 
i and j, if not, so move i, as we need to find t in s.
when i out of bound. count the result, where j is stuck - len of t.
TC: O(n), SC: O(1)
*/
var appendCharacters = function (s, t) {
  let lenS = s.length;
  let lenT = t.length;
  let i = 0; //pointer of s.
  let j = 0; //pointer of t.

  //move the pointer
  while (i < lenS && j < lenT) {
    if (s.charCodeAt(i) === t.charCodeAt(j)) {
      //move both
      i++;
      j++;
    } else {
      //measn char at j is not there in s. so move
      //i to find that
      i++;
    }
  }
  return lenT - j;
};

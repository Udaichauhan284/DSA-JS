/* 1915. Number of Wonderful Substrings
30 April 2024 - Daily Leetcode Code Challenge
Topic : Bit Manuipulation , Map, String, CumXOR

A wonderful string is a string where at most one letter appears an odd number of times.
For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
Given a string word that consists of the first ten lowercase English letters ('a' through 'j'), return the number of wonderful non-empty substrings in word. If the same substring appears multiple times in word, then count each occurrence separately.

A substring is a contiguous sequence of characters in a string.
Example 1:
Input: word = "aba"
Output: 4
Explanation: The four wonderful substrings are underlined below:
- "aba" -> "a"
- "aba" -> "b"
- "aba" -> "a"
- "aba" -> "aba"
*/
 //This can be solve by using Bit Manipulation and cumXOR for finding the atmost one char with odd TC : O(n), SC : O(1024) ~ O(1)
const wonderfulSubstring = (word) => {
  let n = word.length;
  let count = 0;
  let freq = new Array(1024).fill(0);
  freq[0] = 1;
  let cumXOR = 0;

  for(let i=0; i<n; i++){
    let charIndex = word.charCodeAt(i)-'a'.charCodeAt(0);
    cumXOR ^= (1<<charIndex);

    count += freq[cumXOR];

    //update the array
    for(let j=0; j<10; j++){
      let newCumXOR = cumXOR ^ (1<<j);
      count += freq[newCumXOR];
    }
    freq[cumXOR]++;
  }
  return count;
}
console.log(wonderfulSubstring("aba"));
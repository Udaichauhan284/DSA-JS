/* 1255. Maximum Score Words Formed by Letters
24 May 2024 Leetcode Daily Code Challenge, Topic: String, Backtracking, Recursion
Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
Output: 23
Explanation:
Score  a=1, c=9, d=5, g=3, o=2
Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
Words "dad" and "dog" only get a score of 21.
*/
/* Use of Backtracking
TC: O(2^n * L) L is word length
SC: O(n) depth of recursion tree for word, to take and not take
*/
var maxScoreWords = function (words, letters, score) {
  let n = words.length;
  let maxScore = [0]; // Initialize maxScore to 0

  let freq = Array(26).fill(0);
  // Fill the freq array
  for (let ch of letters) {
    freq[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // Call the recursive function
  solve(0, words, score, 0, freq, n, maxScore);

  return maxScore[0]; // Return the maxScore
};

function solve(i, words, score, currScore, freq, n, maxScore) {
  if (i >= n) {
    maxScore[0] = Math.max(maxScore[0], currScore);
    return;
  }

  // Try to take the word
  let canTake = true;
  //in js different method copy array.
  // let tempFreq = freq.map((x) => x); //deep copy
  //let tempFreq = [...freq]; //deep copy
  //let tempFreq = freq.slice() //deep copy
  let tempFreq = Array.from(freq);
  let tempScore = 0;

  for (let j = 0; j < words[i].length; j++) {
    let ch = words[i].charCodeAt(j) - "a".charCodeAt(0);
    tempFreq[ch]--;
    tempScore += score[ch];
    if (tempFreq[ch] < 0) {
      canTake = false;
      break;
    }
  }

  if (canTake) {
    solve(i + 1, words, score, currScore + tempScore, tempFreq, n, maxScore);
  }

  // Not take the word
  solve(i + 1, words, score, currScore, freq, n, maxScore);
}

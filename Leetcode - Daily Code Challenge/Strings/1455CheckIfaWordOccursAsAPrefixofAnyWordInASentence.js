/* 02 Dec 2024
1455. Check If a Word Occurs As a Prefix of Any Word In A Sentence
Leetcode POTD, String

Input: sentence = "i love eating burger", searchWord = "burg"
Output: 4
Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
*/

var isPrefixOfWord = function(sentence, searchWord) {
  let words = sentence.split(" ");
  let len = words.length;
  for(let i=0; i<len; i++){
      if(words[i].startsWith(searchWord)){
          return i+1;
      }
  }
  return -1;
};
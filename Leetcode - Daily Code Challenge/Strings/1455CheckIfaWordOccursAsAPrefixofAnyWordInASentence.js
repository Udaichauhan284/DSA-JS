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

/*Method2-without the use of inbuilt function
we use the two pointer approach
TC: TC: O(n), SC: O(1)
*/
const isPrefixOfWord1 = (sentence, searchWord) => {
  let senLen = sentence.length;
  let swLen = searchWord.length;
  let i=0; // for sentence pointer
  let index = 1; //this return the ans
  while(i < senLen){
    //first check the leading spaces
    while(i < senLen && sentence.charAt(i) === " ") i++;

    //now start comparing the sentence and search word using two pointer
    let j = 0; //for searchword
    while(i < senLen && j < swLen && sentence.charAt(i) === searchWord.charAt(j)){
      i++;
      j++;
    }
    //now checj j is done or not
    if(j === swLen){
      return index;
    }
    //now if not j done, move to next word of sentence
    while(i<senLen && sentence.charAt(i) !== " ") i++;

    //now move to next word
    i += 1;
    index++;
  }
  return -1;
}
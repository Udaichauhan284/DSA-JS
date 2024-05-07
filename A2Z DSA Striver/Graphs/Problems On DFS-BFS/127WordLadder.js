/* 127 Word Ladder
Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
*/
//See in this we need to give the shortest seq, so this measn we need to use BFS. also first take set and store the wordList into that wordSet, and also we need to see for evry char from a to z. TC: O(n*m*26) ~ O(n*m) n is num of word, m is length of word, Sc : O(n)
var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  let queue = [];
  queue.push(beginWord);
  let steps = 1;

  while (queue.length) {
    let n = queue.length;

    //traverse length of queue
    for (let i = 0; i < n; i++) {
      //take out the qord form queue
      const word = queue.shift();
      //now check if this word is equal to endWord
      if (word === endWord) return steps++;
      //traverse the wordlength
      for (let j = 0; j < word.length; j++) {
        //tarverse the 26 char to change in word
        for (let k = 0; k < 26; k++) {
          //take new word to form
          let newWord =
            word.slice(0, j) + String.fromCharCode(k + 97) + word.slice(j + 1);
          if (wordSet.has(newWord)) {
            queue.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    steps++;
  }
  return 0;
};

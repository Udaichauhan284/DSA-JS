/* 126 Word Ladder II
This is a tough question. 
Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
Explanation: There are 2 shortest transformation sequences:
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"

*/
// var findLadders = function (beginWord, endWord, wordList) {
//     let wordSet = new Set(wordList);
//     let queue = [];
//     queue.push([beginWord]);
//     let usedOnLevel = new Set();
//     usedOnLevel.add(beginWord);
//     let level = 0;
//     let ans = [];

//     while (queue.length > 0) {
//         let wordArr = queue.shift();
//         let word = wordArr[wordArr.length - 1];

//         if (word === endWord) {
//             ans.push([...wordArr]);
//         }

//         for (let i = 0; i < word.length; i++) {
//             let originalChar = word[i];
//             for (let k = 0; k < 26; k++) {
//                 let newChar = String.fromCharCode(k + 97);
//                 if (newChar !== originalChar) {
//                     wordArr.push(word.slice(0, i) + newChar + word.slice(i + 1));
//                     let newWord = wordArr[wordArr.length - 1];
//                     if (wordSet.has(newWord) && !usedOnLevel.has(newWord)) {
//                         let newWordArr = [...wordArr, newWord];
//                         queue.push(newWordArr);
//                         usedOnLevel.add(newWordArr);
//                     }
//                     wordArr.pop();
//                 }
//             }
//         }
//     }
//     return ans;
// };

//Method 2- store only nodes so every nodes is store exactly once, Move backward to compute only the path that can moved from begin to end.
const findLadders = (beginWord, endWord, wordList) => {
  let connected = (a, b) => {
    let c = 0;
    for (let i = 0; i < a.length && c < 2; i++) {
      if (a[i] !== b[i]) c++;
    }
    return c === 1;
  };

  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];
  wordSet.delete(beginWord);
  let queue = [];
  let nodes = [];
  queue.push(beginWord);

  let reached = false;
  while (queue.length && !reached) {
    nodes.push(queue.slice());
    let qLen = queue.length;
    for (let i = 0; i < qLen && !reached; i++) {
      let from = queue.shift();
      for (let to of wordSet) {
        if (!connected(from, to)) continue;
        if (to === endWord) {
          reached = true;
          break;
        }
        queue.push(to);
        wordSet.delete(to);
      }
    }
  }
  if (!reached) return [];

  let ans = [[endWord]];
  for (let level = nodes.length - 1; level >= 0; level--) {
    let alen = ans.length;
    for (let a = 0; a < alen; a++) {
      let p = ans.shift();
      let last = p[0];
      for (let word of nodes[level]) {
        if (!connected(last, word)) continue;
        ans.push([word, ...p]);
      }
    }
  }
  return ans;
};

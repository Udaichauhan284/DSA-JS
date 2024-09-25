/* 2416 Sum of Prefix Scores of Strings
25 Sept 2024, Leetcode POTD, Array, String, Trie

Input: words = ["abc","ab","bc","b"]
Output: [5,4,3,2]
Explanation: The answer for each string is the following:
- "abc" has 3 prefixes: "a", "ab", and "abc".
- There are 2 strings with the prefix "a", 2 strings with the prefix "ab", and 1 string with the prefix "abc".
The total is answer[0] = 2 + 2 + 1 = 5.
- "ab" has 2 prefixes: "a" and "ab".
- There are 2 strings with the prefix "a", and 2 strings with the prefix "ab".
The total is answer[1] = 2 + 2 = 4.
- "bc" has 2 prefixes: "b" and "bc".
- There are 2 strings with the prefix "b", and 1 string with the prefix "bc".
The total is answer[2] = 2 + 1 = 3.
- "b" has 1 prefix: "b".
- There are 2 strings with the prefix "b".
The total is answer[3] = 2.
*/

/*Optimal Method- this will solve using Trie, we need to insert and will
insert we need to update its prefix value, increase it, then we need 
getScore in this we add the countPrefix from children of trie
countPrefix and children we add in Node
TC: O(n * l), SC: O(n * l)
*/
class Node {
  constructor() {
    this.countPrefix = 0;
    this.children = new Array(26).fill(null);
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let crawl = this.root;
    for (let ch of word) {
      let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (!crawl.children[idx]) {
        crawl.children[idx] = new Node();
      }
      crawl.children[idx].countPrefix += 1;
      crawl = crawl.children[idx];
    }
  }

  getScore(word) {
    let score = 0;
    let crawl = this.root;
    for (let ch of word) {
      let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (crawl.children[idx]) {
        score += crawl.children[idx].countPrefix;
        crawl = crawl.children[idx];
      }
    }
    return score;
  }
}

var sumPrefixScores = function (words) {
  let len = words.length;
  let result = Array(len).fill(0);
  let trie = new Trie();

  for (let word of words) {
    trie.insert(word);
  }

  // Calculate the score
  for (let i = 0; i < len; i++) {
    result[i] = trie.getScore(words[i]);
  }

  return result;
};

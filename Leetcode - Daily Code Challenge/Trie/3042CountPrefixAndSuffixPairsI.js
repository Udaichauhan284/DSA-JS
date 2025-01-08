/* 3042. Count Prefix and Suffix Pairs I
08 Jan 25, Leetcode POTD, String, String Matching

Input: words = ["a","aba","ababa","aa"]
Output: 4
Explanation: In this example, the counted index pairs are:
i = 0 and j = 1 because isPrefixAndSuffix("a", "aba") is true.
i = 0 and j = 2 because isPrefixAndSuffix("a", "ababa") is true.
i = 0 and j = 3 because isPrefixAndSuffix("a", "aa") is true.
i = 1 and j = 2 because isPrefixAndSuffix("aba", "ababa") is true.
Therefore, the answer is 4.
*/

/*Brute method, we traverse over the len with use of NestedLoop
and then see is words[i]length is greater then words[j]length, continue
skip that one, and then check if words[j] startsWith words[i] and
words[j] end with words[j]. TC: O(n^2 * m), m for checking, SC: SC: O(1)
*/

var countPrefixSuffixPairs = function (words) {
  let len = words.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      //now check the length of both string
      if (words[i].length > words[j].length) {
        continue;
      }
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
        count++;
      }
    }
  }
  return count;
};


/*In this we need to search for prefix and suffix, so for this we can use Trie DS.
it will easy to find the prefix and suffix, for suffix, we put the reverse str and 
search the reverse words to easy to find. 
TC: O(n^2 * m), SC: O(n * m), m is len of each word
*/
class TrieNode {
  constructor() {
      this.children = Array(26).fill(null);
      this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
  }

  insert(word) {
      let node = this.root;
      for (let i = 0; i < word.length; i++) {
          const idx = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
          if (node.children[idx] === null) {
              node.children[idx] = new TrieNode();
          }
          node = node.children[idx];
      }
      node.isEndOfWord = true;
  }

  searchPrefix(prefix) {
      let node = this.root;
      for (let i = 0; i < prefix.length; i++) {
          const idx = prefix[i].charCodeAt(0) - 'a'.charCodeAt(0);
          if (node.children[idx] === null) {
              return false;
          }
          node = node.children[idx];
      }
      return true;
  }
}

function countPrefixSuffixPairs(words) {
  const n = words.length;
  let count = 0;

  for (let j = 0; j < n; j++) {
      const prefixTrie = new Trie();
      const suffixTrie = new Trie();

      // Insert the word into the prefix trie
      prefixTrie.insert(words[j]);

      // Reverse the word and insert it into the suffix trie
      const reversed = words[j].split('').reverse().join('');
      suffixTrie.insert(reversed);

      for (let i = 0; i < j; i++) {
          if (words[i].length > words[j].length) {
              continue;
          }

          // Reverse the prefix word for suffix check
          const rev = words[i].split('').reverse().join('');

          if (prefixTrie.searchPrefix(words[i]) && suffixTrie.searchPrefix(rev)) {
              count++;
          }
      }
  }

  return count;
}
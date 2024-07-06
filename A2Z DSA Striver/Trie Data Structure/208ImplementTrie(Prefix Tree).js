/* 208. Implement Trie (Prefix Tree)
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
*/

class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];
      if (!(charToInsert in curr.children)) {
        curr.children[charToInsert] = new Node();
      }
      curr = curr.children[charToInsert];
    }
    curr.isWordEnd = true;
  }
  search(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
    }
    return curr.isWordEnd;
  }
  startsWith(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
    }
    return true;
  }
}

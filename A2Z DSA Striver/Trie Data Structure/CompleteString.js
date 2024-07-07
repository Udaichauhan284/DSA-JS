/* Complete String
Sample Input 1 :
2
6
n ni nin ninj ninja ninga
2
ab bc
Sample Output 1 :
ninja
None
Explanation Of Sample Input 1 :
For test case 1 we have, 

All the prefixes of “ninja” -> “n”, “ni”, “nin”, “ninj” and “ninja” are present in array ‘A’. So, “ninja” is a valid answer whereas for “ninga” , the prefix “ning” is not present in array ‘A’.

So we output “ninja”.

For test case 2 we have, 

The prefixes of “ab” are “a” and “ab”. “a” is not present in array ‘A’. So, “ab” is not a valid answer.

The prefixes of “bc” are “b” and “bc”. “b” is not present in array ‘A’. So, “ab” is not a valid answer.

Since none of the strings is a valid answer we output “None”.

In this we will use Insert and checkForrAllPrefix
TC: O(n)*O(len of str) for insert + O(n)*O(len of str) for check
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

  checkAllPrefix(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
      if (!curr.isWordEnd) {
        //this for ninga, as ning is not present in prefix
        return false;
      }
    }
    return true;
  }
}

function longestCompleteString(A) {
  let trie = new Trie();
  //insert in trie
  for (let word of A) {
    trie.insert(word);
  }
  let longest = "";
  //check and find for longest one
  for (let word of A) {
    if (trie.checkAllPrefix(word)) {
      if (word.length > longest.length) {
        longest = word;
      } else if (word.length === longest.length && word < longest) {
        longest = word;
      }
    }
  }
  if (longest === "") return "None";
  return longest;
}
// const A = ["ab", "abc", "a", "bp"];
const A = ["n", "ni", "nin", "ninj", "ninja", "ninga"];
console.log(longestCompleteString(A));

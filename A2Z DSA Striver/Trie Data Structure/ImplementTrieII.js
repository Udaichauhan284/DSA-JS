/* Implement Trie II
in this we need to add few methods
Insert(word)
countWordEqualTo(word)
countWordStartsWith(prefix)
earse(word)
*/
class Node{
  constructor(){
    this.children = {};
    this.isWordEnd = false;
    this.wordCount = 0; //count of words ending at the word
    this.prefixCount = 0; //count of words having yje prefix
  }
}
class Trie{
  constructor(){
    this.root = new Node();
  }
  insert(word){
    let curr = this.root;
    for(let i=0; i<word.length; i++){
      let charToInsert = word[i];
      if(!(charToInsert in curr.children)){
        curr.children[charToInsert] = new Node();
      }
      curr = curr.children[charToInsert];
      curr.prefixCount++;
    }
    curr.isWordEnd = true;
    curr.wordCount++;
  }

  search(word){
    let curr = this.root;
    for(let i=0; i<word.length; i++){
      let charToFind = word[i];
      if(!(charToFind in curr.children)){
        return false;
      }
      curr = curr.children[charToFind];
    }
    return curr.isWordEnd;
  }

  countWordsEqualsTo(word){
    let curr = this.root;
    for(let i=0; i<word.length; i++){
      let charToFind = word[i];
      if(!(charToFind in curr.children)){
        return 0;
      }
      curr = curr.children[charToFind];
    }
    return curr.wordCount;
  }

  countWordsStartsWith(prefix){
    let curr = this.root;
    for(let i=0; i<prefix.length; i++){
      let charToFind = prefix[i];
      if(!(charToFind in curr.children)){
        return 0;
      }
      curr = curr.children[charToFind];
    }
    return curr.prefixCount;
  }

  erase(word){
    if(this.search(word)){
      let curr = this.root;
      for(let i=0; i<word.length; i++){
        let charToEarse = word[i];
        if(charToEarse in curr.children){
          curr = curr.children[charToEarse];
          curr.prefixCount--;
        }
      }
      curr.wordCount--;
      if(curr.wordCount === 0){
        curr.isWordEnd = false;
      }
    }
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.countWordsEqualsTo("apple")); // 1
console.log(trie.countWordsStartsWith("app")); // 1
trie.erase("apple");
console.log(trie.countWordsEqualsTo("apple")); // 0
console.log(trie.countWordsStartsWith("app")); // 0
/* Count Distinct Substrings
Sample Input 1 :
2
sds
abc
Sample Output 1 :
6
7
Explanation of Sample Input 1 :
In the first test case, the 6 distinct substrings are { ‘s’,’ d’, ”sd”, ”ds”, ”sds”, “” }

In the second test case, the 7 distinct substrings are {‘a’, ‘b’, ‘c’, “ab”, “bc”, “abc”, “” }.
*/

/*Method 1. Brute Method, we can use set and use two loop to start from i=0 and 
j from i to end of string, and add each substring in set, later we return the
length of string
TC: O(n^2)
SC: O(n)
*/
function getAllDistinctSubstrings(str) {
  let n = str.length;
  let set = new Set();
  set.add("");  // Add the empty string to the set

  for (let i = 0; i < n; i++) {
    let subStr = "";  // Reset subStr for each new starting index i
    for (let j = i; j < n; j++) {
      subStr = str.substring(i,j+1);
      set.add(subStr);
    }
  }

  //return Array.from(set);  // Convert the set to an array and return it
  //return [...set];
  return set.size;
}

//console.log(getAllDistinctSubstrings("abc"));  // Output: ["", "a", "ab", "abc", "b", "bc", "c"]
//console.log(getAllDistinctSubstrings("sds"));

//Using Array
function usingArrDistinctSubString(str){
  let n = str.length;
  let subString = [];
  subString.push("");
  let count = 0;
  for(let i=0; i<n; i++){
    for(let j=i; j<n; j++){
      let subStr = str.substring(i,j+1);
      if(!subString[subStr]){
        subString.push(subStr);
        count++;
      }
    }
  }
  return subString;
  // return count;
}
//console.log(usingArrDistinctSubString("sds"));

//Using Trie
class Node{
  constructor(){
    this.children = {};
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
    }
  }
  countNodes(){
    let count = 0;
    const traverse = (nodes) => {
      count++;
      for(let child in nodes.children){
        traverse(nodes.children[child]);
      }
    }
    //calling function
    traverse(this.root);
    return count;
  }
}
function distinctSubstring(str){
  let trie = new Trie();
  let n = str.length;
  for(let i=0; i<n; i++){
    let subStr = "";
    for(let j=i; j<n; j++){
      subStr += str[j];
      trie.insert(subStr);
    }
  }
  let totalSub = trie.countNodes();
  return totalSub;
}
console.log(distinctSubstring("abc"));

/* 3043. Find the Length of the Longest Common Prefix
24 Sept 2024, Leetcode POTD, Array, Trie

Input: arr1 = [1,10,100], arr2 = [1000]
Output: 3
Explanation: There are 3 pairs (arr1[i], arr2[j]):
- The longest common prefix of (1, 1000) is 1.
- The longest common prefix of (10, 1000) is 10.
- The longest common prefix of (100, 1000) is 100.
The longest common prefix is 100 with a length of 3.
*/

/*Method 1- bruet method, we take a set, adn start putting the prefix of
arr1 in set, digit by digit, then in for loop on arr2, we check if set 
has or not, if not, we divide num to check futer , if has then we check 
the max len, by counting digit of LCP(longest common prefix)
TC: O(n*D) + O(m*D) D is digit, SC: O(n)
*/
var longestCommonPrefix = function(arr1, arr2) {
  let set = new Set();
  let result = 0;
  //loop on first arr1, to storing the prefix in set
  for(let num of arr1){
      //now loop on each digit
      while(!set.has(num) && num > 0){
          set.add(num);
          num = Math.floor(num / 10);
      }
  }
  //now loop on arr2, to find the LCP
  for(let num of arr2){
      while(!set.has(num) && num > 0){
          num = Math.floor(num / 10); //check next one;
      }
      if(num > 0){
          //if logic comes here, measn prefix is in set and need to check the len
          result = Math.max(result, count(num));
      }
  }
  return result;
};
function count(num){
  //this function will count the digit
  let c = 0;
  while(num > 0){
      c++;
      num = Math.floor(num / 10);
  }
  return c;
}




/*Method2 - optimal method, we use trie DS, we insert it and then search it
in trie. TC: O(n*d + m*d), SC: O(n * d) 
*/
class Node{
  constructor(){
      this.children = new Array(10).fill(null); //10 digit array
  }
}
class Trie{
  constructor(){
      this.root = new Node();
  }
  insert(num){
      let crawl = this.root;
      let numStr = String(num);
      for(let ch of numStr){
          let idx = ch - "0";
          if(!crawl.children[idx]){
              crawl.children[idx] = new Node();
          }
          crawl = crawl.children[idx];
      }
  }
  //this method search num and also return LCP
  search(num){
      let crawl = this.root;
      let numStr = String(num);
      let length = 0;
      for(let ch of numStr){
          let idx = ch - "0";
          if(crawl.children[idx]){
              length++;
              crawl = crawl.children[idx];
          }else{
              break;
          }
      }
      return length;
  }
}
var longestCommonPrefix = function(arr1, arr2) {
  let trie = new Trie();
  let result = 0;
  //loop on first arr, for inserting in Trie
  for(let num of arr1){
      trie.insert(num);
  }
  //now loop on second arr12 for find the num and len
  for(let num of arr2){
      result = Math.max(result, trie.search(num));
  }
  return result;
};
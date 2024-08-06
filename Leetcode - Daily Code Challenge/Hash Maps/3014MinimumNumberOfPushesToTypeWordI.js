/* 3014 Minimum Number of Pushes To Type Word I
Input: word = "abcde"
Output: 5
Explanation: The remapped keypad given in the image provides the minimum cost.
"a" -> one push on key 2
"b" -> one push on key 3
"c" -> one push on key 4
"d" -> one push on key 5
"e" -> one push on key 6
Total cost is 1 + 1 + 1 + 1 + 1 = 5.
It can be shown that no other mapping can provide a lower cost.
*/

/*Method 1- do what asked in the question, first use the map
to store the int-char, 2-abc, and check for only char of word
TC: O(n), n is len of word
SC: O(9) because we using map for 2to9
*/
var minimumPushes = function(word) {
  let result = 0;
  let map = new Map();
  let assignKey = 2;
  for(let ch of word){
      if(assignKey > 9){
          assignKey = 2;
      }
      map.set(assignKey, (map.get(assignKey) || 0)+1);
      result += map.get(assignKey);
      assignKey++; //2to3 and 2to4 so on...
  }
  return result;
};


/* Method 2- as we know in this we have distinct leter in word
so first count the freq for each letter, each char in word is 
distict so we get the freq for each 1. now sort it in des order
and for loop from 26 find the freq from map and see how many
times it press = (i/8+1) and result = press * freq
TC: O(n)+O(26log26)+O(26) ~ O(n), SC: O(26)~O(1)
*/
var minimumPushes = function(word) {
  let result = 0;
  let freqArr = Array(26).fill(0);
  for(let ch of word){
      let currCh = ch.charCodeAt(0)-'a'.charCodeAt(0);
      freqArr[currCh]++;
  }
  //sort the freq
  freqArr.sort((a,b) => b-a);
  //loop from 26
  for(let i=0; i<26; i++){
      let freq = freqArr[i];
      let press = Math.floor(i/8)+1;
      result += (press * freq);
  }
  return result;
};
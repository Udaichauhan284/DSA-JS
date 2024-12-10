/* 2981. Find Longest Speical SUbstring That Occurs Thrice I
10 Dec 2024, Leetcode POTD, String, Substring, Map, Nested Loops

Input: s = "aaaa"
Output: 2
Explanation: The longest special substring which occurs thrice is "aa": substrings "aaaa", "aaaa", and "aaaa".
It can be shown that the maximum length achievable is 2.
*/

/*Brute Method-find all the special substring using
nested loop and put in the map, then find the ans from
map. TC: O(n^3), 3 is for in nested loop we putting the
str in map, thats why. SC: O(n^2) for map
*/
var maximumLength = function(s) {
  let len = s.length;
  let map= new Map();
  for(let i=0; i<len; i++){
      let currStr = [];
      for(let j=i; j<len; j++){
          if(currStr.length === 0 || currStr[currStr.length-1] === s[j]){
              //this is special substr
              currStr.push(s[j]);
              //now in map, its freq, but first convert to str
              let strKey = currStr.join('');
              map.set(strKey, (map.get(strKey) || 0)+1);
          }else{
              break;
          }
      }
  }
  //now find the asn
  let ans = 0;
  for(let [str, count] of map){
      if(count >= 3 && str.length > ans){
          ans = str.length;
      }
  }
  return ans === 0 ? -1 : ans;
};


/*In Method2-rather than putting the string in map, we can put the len of str
in map, as pair and then its freq, using same two loops as its constraints 
is low. TC: O(n^2), SC: O(n^2);
*/
var maximumLength = function(s) {
  let len = s.length;
  let map = new Map();
  for(let i=0; i<len; i++){
      let ch = s[i];
      let currLen = 0;
      for(let j=i; j<len; j++){
          if(s[j] === ch){
              currLen++;
              let pair = `${ch}:${currLen}`;
              //nwo set in map
              map.set(pair, (map.get(pair) || 0)+1);
          }else{
              break; //we want only special substring
          }
      }
  }
  let ans = 0;
  for(let [key,count] of map){
      let [ch, currLen] = key.split(':');
      currLen = parseInt(currLen);
      if(count >= 3 && currLen > ans){
          ans = currLen;
      }
  }
  return ans === 0 ? -1 : ans;
};
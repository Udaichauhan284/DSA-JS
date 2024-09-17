/* 884 Uncommon Words from Two Sentences
17 sept 2024, leetcode POTD, string, map

Input: s1 = "this apple is sweet", s2 = "this apple is sour"

Output: ["sweet","sour"]
*/

/*As we have sentence of word which we need go check word by word
so take two array sen1 and sen2 for both sentence and split by space
so that in arrays we have only word and then we put in map, from both
array and which key is 1 as different in both sentence we take out in
result. TC: O(n+m), SC: O(n)
*/
var uncommonFromSentences = function(s1, s2) {
  let map = new Map();
  let s1Arr = s1.split(' '); //split sen by space
  let s2Arr = s2.split(' '); //split sen by space

  //put in mao, these words occurance
  for(let word of s1Arr){
      map.set(word, (map.get(word) || 0)+1);
  }
  for(let word of s2Arr){
      map.set(word, (map.get(word) || 0)+1);
  }
  let result = [];
  for(let [word, count] of map){
      if(count === 1){
          result.push(word);
      }
  }
  return result;
};
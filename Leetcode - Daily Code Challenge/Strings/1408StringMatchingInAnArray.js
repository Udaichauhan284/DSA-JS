/* 1408. String Matching in an Array
07 Jan 25, Leetcode POTD, String, String Mathcing, KMP

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
*/

/*Brute Method. use the for loop, and for every i and j check
is j includes i if yes, return true, otherwise return false.
TC: O(n*m), SC: O(1)
*/
var stringMatching = function(words) {
  let len = words.length;
  let ans = [];
  for(let i=0; i<len; i++){
      for(let j=0; j<len; j++){
          if(i === j){
              //same words, no need to check
              continue;
          }
          if(words[j].includes(words[i])){
              ans.push(words[i]);
              break; //if found, then break;
          } 
      }
  }
  return ans
};



/*Optimal Method, We can use the KMP Method for this matching the
words[i] and words[j]
TC: O(n*m * (n+m)), SC: O(m)
*/
var stringMatching = function(words) {
  let len = words.length;
  let ans = [];
  for(let i=0; i<len; i++){
      for(let j=0; j<len; j++){
          if(i===j) continue; //skip the same one
          if(KMPAlgo(words[j], words[i])){ //text, pat
              ans.push(words[i]); 
              break;
          }
      }
  }
  return ans;
};
function KMPAlgo(text, pat){
  let n = text.length;
  let m = pat.length;
  let lps = Array(m).fill(0); //find the longest prefix suffic for pat
  computeLPS(pat, lps);

  //now KMP
  let i=0;
  let j=0;
  while(i < n){
      if(text[i] === pat[j]){
          i++;
          j++; //both match, so increase the pointer
      }
      if(j === m){
          //if j reaches last of pat, measn we found the match
          return true;
      }else if(i < n && text[i] !== pat[j]){
          if(j !== 0){
              j = lps[j-1]; //move the j pointer to last match lps
          }else{
              i++;
          }
      }
  }
  return false;
}
function computeLPS(pat, lps){
  let m = pat.length;
  let len = 0;
  lps[0] = 0;
  let i=1;
  while(i < m){
      if(pat[i] === pat[len]){
          len++;
          lps[i] = len;
          i++;
      }else{
          if(len !== 0){
              len = lps[len-1];
          }else{
              lps[i] = 0;
              i++;
          }
      }
  }
}
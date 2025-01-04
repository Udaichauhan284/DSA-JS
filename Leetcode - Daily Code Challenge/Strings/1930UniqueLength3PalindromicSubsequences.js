/* 1930. Unique Length-3 Palindromic Subsequences
04 Jan 25, Leetcode POTD, String, fix the left and right letters 

Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")
*/

/*In Method 1, we have count 3 len palindromix subsequence, so
we can fix the left and right idx letter and can find the 
middle letters to count the subsequence, for left and right
we need to give the chance to every unique letter in string.
so we use the set for that, and then we traverse over the letters
to find out the left and right idx for that, and then in that 
range we find the unique letters, to put in new set, so the
size of set is our ans, TC: O(26*2n)~O(n), SC: O(26)~O(1)
*/
var countPalindromicSubsequence = function(s) {
  let len = s.length;
  let letters = new Set(); //O(26)
  let result = 0;
  //now fill the letters set with unique letters
  for(let ch of s){ //O(n)
      letters.add(ch);
  }
  //now we will travese over the letters set and give the chance
  //to every unique letters to form the palindromic subsequence
  for(let letter of letters){ //O(26)
      let leftIdx = -1;
      let rightIdx = -1;
      for(let i=0; i<len; i++){  //O(n)
          if(s[i] === letter){
              if(leftIdx === -1){
                  leftIdx = i;
              }
              rightIdx = i;
          }
      }

      //now traverse in between the left and right idx to 
      //find the middle letters
      let uniqueMiddle = new Set();
      for(let middle=leftIdx+1; middle<=rightIdx-1; middle++){ //O(n)
          uniqueMiddle.add(s[middle]);
      }
      result += uniqueMiddle.size;
  }
  return result;
};


/*In Method 2, we just precompute the left and right Index of 
all the letters, and place in array of indices [-1,-1]
and then travere over the 26 len and find out the left and right
and then middle, TC: O(n), SC:O(1)
*/
var countPalindromicSubsequence = function(s) {
  let len = s.length;
  let indices = Array.from({length: 26}, ()=>Array(26).fill(-1));
  //now traverse over the s and find left and right for all
  //char
  for(let i=0; i<len; i++){
      let idx = s.charCodeAt(i)-'a'.charCodeAt(0); //a->0,b->1..
      if(indices[idx][0] === -1){
          indices[idx][0] = i;
      }
      indices[idx][1] = i; //rightIdx
  }

  //now traverse over the 26 letters
  let result = 0;
  for(let i=0; i<26; i++){
      let leftIdx = indices[i][0];
      let rightIdx = indices[i][1];

      //if we dont have left and right, skip
      if(leftIdx === -1 && rightIdx === -1){
          continue;
      }

      //now trvaerse over the range
      let uniqueMiddle = new Set();
      for(let middle=leftIdx+1; middle<=rightIdx-1; middle++){
          uniqueMiddle.add(s[middle]);
      }
      result += uniqueMiddle.size;
  }
  return result;
};
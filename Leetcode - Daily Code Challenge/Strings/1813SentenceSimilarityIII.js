/* 1813 Sentence Similiarity III
06 Oct 2024, Leetcode POTD, String, Arr

Input: sentence1 = "My name is Haley", sentence2 = "My Haley"

Output: true

Explanation:

sentence2 can be turned to sentence1 by inserting "name is" between "My" and "Haley".
*/

/*IN this we take two array and store the word in both and 
start checking prefix and suffix word of both array, we
and we look in sent1 arr. so make sent1 alway be longer one
TC: O(n+m), SC: O(n)
*/
var areSentencesSimilar = function(sentence1, sentence2) {
  //check the len
  if(sentence1.length < sentence2.length){
      [sentence1, sentence2] = [sentence2, sentence1];
  }
  let s1Arr = sentence1.split(" ");
  let s2Arr = sentence2.split(" ");

  let i = 0, j=s1Arr.length-1; //for s1Arr pointer
  let l = 0, r=s2Arr.length-1; //for s2Arr pointer
  while(i < sentence1.length && l < sentence2.length && 
  s1Arr[i] === s2Arr[l]){
      i++;
      l++;
  }
  while(r >= l && s1Arr[j] === s2Arr[r]){
      j--;
      r--;
  }
  if(l > r){
      return true;
  }
  return false;
};
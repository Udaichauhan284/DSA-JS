/* 567 Permutation in String
05 Oct 2024, Leetcode POTD, Backtracking

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
*/

/*Brute Method-used of Permutation Backtracking, we find 
the all the backtracking using swap method, and check
if s2 has that permutation if yes return true;
TC: O(n! * m) m if for s2 length, SC: O(n)
*/
var checkInclusion = function(s1, s2) {
  let s1Arr = s1.split('');
  if(solve(0, s1Arr, s2)){ //index, s1 and s2
      return true;
  }
  return false;
};
function solve(idx, s1Arr, s2){
  let len = s1Arr.length;
  if(idx === len){
      let permutatedStr = s1Arr.join('');
      if(s2.includes(permutatedStr)){
          return true;
      }
      return false;
  }
  //explore, find the permutation of s1
  for(let i=idx; i<len; i++){
      [s1Arr[i], s1Arr[idx]] = [s1Arr[idx], s1Arr[i]];
      if(solve(idx+1, s1Arr, s2)) return true;
      [s1Arr[idx], s1Arr[i]] = [s1Arr[i], s1Arr[idx]];
      
  }
  return false;
}

/*Better Method, sort the s1 and then in loop of s2
take out the substring of len s1 and then sort it
if they both are equal return true. TC: O(nlogn)
SC: O(1)
*/
var checkInclusion = function(s1, s2) {
  let s1Len = s1.length;
  let s2Len = s2.length;
  if(s1Len > s2Len) return false;

  // Sort s1
  let sortedS1 = s1.split('').sort((a, b) => a.localeCompare(b)).join('');
  for(let i=0; i<=(s2Len - s1Len); i++){
      let temp = s2.substring(i, i + s1Len).split('').sort((a, b) => a.localeCompare(b)).join('');
      if(temp === sortedS1){
          return true;
      }
  }
  return false;
};

/*Optimal Method, use of sliding window with freqArr
TC: O(n+m), SC: O(26+26)~ O(1)
*/
var checkInclusion = function(s1, s2) {
  let s1Len = s1.length;
  let s2Len = s2.length;
  if(s1Len > s2Len) return false;
  //take the freqArr
  let s1Freq = Array(26).fill(0);
  let s2Freq = Array(26).fill(0);
  //fill s1Freq O(n)
  for(let s of s1){
      s1Freq[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  //Sliding window method
  let i=0;
  let j=0;
  while(j < s2Len){
      s2Freq[s2[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;

      //when sliding window increase the size above s1Len
      if(j-i+1 > s1Len){
          //remove the left char
          s2Freq[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
          i++;
      }
      //check both the freq
      if(matched(s1Freq, s2Freq)){
          return true;
      }
      j++;
  }
  return false;
};
function matched(arr1, arr2){
  for(let i=0; i<arr1.length; i++){
      if(arr1[i] !== arr2[i]){
          return false;
      }
  }
  return true;
}
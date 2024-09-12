/* 1684 Count the number of consistent strings
12 sept 2024, leetcode POTD, array, bit manupilcation, string

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
*/

/*Method 1- use of freq arr of 26 letters where we put
allowed char true or false, then we check on word of words
and ch of word to see if every word is true in arr or not
TC: O(n*m), SC: O(1)
*/
const countConsistentStrings = (allowed, words) => {
  let arr = Array(26).fill(false);
  for(let ch of allowed){
    let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    arr[idx] = true;
  }
  let count = 0;
  for(let word of words){
    let allCharPresent = true;
    for(let ch of word){
      let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if(arr[idx] === false){
        allCharPresent = false;
        break;
      }
    }
    if(allCharPresent === true){
      count++;
    }
  }
  return count;
}

/*Method 2 we create a mask from allowed using bit manupilation
mask = 0000 then we do OR of mask left shit by ch
then we find the set bit from words in nested loops
TC: O(n*m), SC: O(1)
*/
var countConsistentStrings = function(allowed, words) {
  let mask = 0; //000000000
  for(let ch of allowed){
      mask |= (1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0)));
  }
  let count = 0;
  for(let word of words){
      let allCharPresent = true;
      for(let ch of word){
          let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
          //is not(0) set bit, mark false and break
          if(((mask >> idx) & 1) === 0){
              allCharPresent = false;
              break;
          }
      }
      if(allCharPresent){
          count++;
      }
  }
  return count;
};
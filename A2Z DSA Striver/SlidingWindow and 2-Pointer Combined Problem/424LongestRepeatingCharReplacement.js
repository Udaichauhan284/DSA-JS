//Brute Method - we need to find the char which we will change so that we get maxLen subarray, for that we need to find the len of subarray after that subtract that with maxF, for maxF, we need to have the hashArr[26], who storing the freq of char, which char have high freq, that will be subtract from len, to get the numofChanges required- Nested loop TC : O(n^2), SC : O(1)
// var characterReplacement = function(s, k) {
//     let len = s.length;
//     let maxLen = 0;
//     for(let i=0; i<len; i++){
//       let hash = new Array(26).fill(0);
//       let maxF = 0;
//       for(let j=i; j<len; j++){
//        hash[s.charCodeAt(j) - 'A'.charCodeAt(0)]++;
//         maxF = Math.max(maxF, hash[s.charCodeAt(j)-'A'.charCodeAt(0)]);

//         let numOfChangeReq = (j-i+1) - maxF;
//         if(numOfChangeReq <= k){
//           maxLen = Math.max(maxLen,j-i+1);
//         }
//       }
//     }
//     return maxLen;
// }; //This will give the time limit exceed.

//Optimal Method - use of sliding window, and use of map to stor ethe freq of ch - TC  O(n), SC : O(26)
const characterReplacement = (s, k) => {
  let len = s.length;
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let maxF = 0;
  let map = {};

  while (right < len) {
    map[s[right]] = (map[s[right]] || 0) + 1;
    maxF = Math.max(maxF, map[s[right]]);

    if ((right - left + 1) - maxF > k) {
      map[s[left]]--;
      maxF = 0;
      left++;
    }

    if ((right - left + 1) - maxF <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    
    right++;
  }

  return maxLen;
};

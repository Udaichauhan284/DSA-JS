/* 3. Longest Substring without reperting characters.
s = "abcabcbb"
o/p: 3 -- "abc"
*/
//Brute App - O(n^2), SC : O(n) for set
// const bruteMethod = (s) => {
//   let len = s.length;
//   if(len === 0) return 0;
//   if(len === 1) return 1;
//   let maxLen = Number.MIN_SAFE_INTEGER;
//   for(let i=0; i<len; i++){
//     let set = new Set();
//     for(let j=i; j<len; j++){
//       if(set.has(s[j])){
//         maxLen = Math.max(maxLen, j-i);
//         break;
//       }
//       set.add(s[j]);
//     }
//   }
//   return maxLen;
// }
// console.log(bruteMethod("abcabcbb"));

//Optimal Method - use of 2 pointer method and take a set for stroing th eperivous char
const optimalMethod = (s) => {
  let len = s.length;
  if(len === 0) return 0;
  if(len === 1) return 1;
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let set = new Set();
  while(right < len){
    if(!set.has(s[right])){
      set.add(s[right]);
      maxLen = Math.max(maxLen, right+1-left);
      right++;
    }else {
      set.delete(s[left]);
      left++;
    }
  }
  return maxLen;
}
console.log(optimalMethod("abcabcbb"));
console.log(optimalMethod("bbbbb"));
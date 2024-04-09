/* Longest Substing with at most k distint characters
s = "aaabbccd", k = 2
o/p : 5 {aaabb}
*/
//Brute Method - nested loop and use of map, to store the frequ and calculate the maxlen if map size is less than k.
const bruteMethod = (s, k)=>{
  const len = s.length;
  let maxLen = 0;
  for(let i=0; i<len; i++){
    let map = new Map();
    for(let j=i; j<len; j++){
      map.set(s[j], (map.get(s[j]) || 0)+1);
      if(map.size <= k){
        maxLen = Math.max(maxLen, j-i+1);
      }else{
        break;
      }
    }
  }
  return maxLen;
}
console.log(bruteMethod("aaabbccd",2));

//Optimal Method - use of sliding method, use of map also to take the freq of char, if map[s[left]] === 0, remove the left elem and also delete from the map.
const optimalMethod = (s,k) => {
  const len = s.length;
  let maxLen = 0;
  let left = 0, right = 0;
  let map = new Map();
  while(right < len){
    map.set(s[right], (map.get(s[right]) || 0)+1);

    if(map.size > k){
      map.set(s[left], (map.get(s[left]) || 0)-1);
      if(map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left++;
    }

    if(map.size <= k){
      maxLen = Math.max(maxLen, right-left+1);
    }
    right++;
  }
  return maxLen;
}
console.log(optimalMethod("aaabbccd",2));
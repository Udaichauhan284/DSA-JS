/* 76 Minimum Window Substring
s= "ADDBECODEBANC", t = "ABC"
o/p: "BANC"
*/
//Brute method, use of nested loop and map for freq. TC: O(n^2), SC: O(n)
const minWindow = (s,t) =>{
  let n = s.length;
  let m = t.length;
  let minLen = Number.MAX_SAFE_INTEGER;
  let sIndex = -1;
  for(let i=0; i<n; i++){
    let map = {};
    let count = 0;
    for(let j=0; j<m; j++){
      map[t[j]] = (map[t[j]] || 0)+1;
    }

    for(let j=i; j<n; j++){
      if(map[s[j]] > 0){
        count++;
      }
      map[s[j]] = (map[s[j]] || 0)-1;

      if(count === m){
        if((j-i+1) < minLen){
          minLen = j-i+1;
          sIndex = i;
          break;
        }
      }
    }
  }
  return sIndex === -1 ? "" : s.substr(sIndex, minLen);
}
console.log(minWindow("ADDBECODEBANC","ABC"));

//Optimal Method - use of sliding window + map for frequency
const minWindow1 = (s,t) => {
  let n = s.length;
  let m = t.length;
  let left =0, right=0;
  let count = 0, sIndex = -1;
  let minLen = Number.MAX_SAFE_INTEGER;
  let map = {};
  //pre insert t value in map
  for(let i=0; i<m; i++){//O(m)
    map[t[i]] = (map[t[i]] || 0)+1; 
  }

  while(right < n){
    if(map[s[right]] > 0) count = count+1;
    map[s[right]] = (map[s[right]] || 0)-1;

    while(count === m){
      if((right-left+1) < minLen){
        minLen = right-left+1;
        sIndex = left;
      }
      map[s[left]] = (map[s[left]] || 0)+1;
      if(map[s[left]] > 0){
        count--;
      }
      left++;
    }
    right++;
  }
  return sIndex === -1 ? "" : s.substring(sIndex, sIndex+minLen);
}

console.log(minWindow1("ADDBECODEBANC","ABC"));
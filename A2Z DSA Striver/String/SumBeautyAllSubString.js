/* 1781. Sum of Beauty of All Substrings
The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

For example, the beauty of "abaacc" is 3 - 1 = 2.

Input: s = "aabcb"
Output: 5
Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.
*/ 
// in this we create the freq function and take a map and store the element of index and when map size incree the 2 we count the freq.
// TC O(n^2 * k), SC O(n);

function freq(map){
  let min = 500; //contrainst given in question
  let max = 1;

  for(let val of map.values()){
    max = Math.max(max,val);
    min = Math.min(min,val);
  }
  return max-min;
}

const beautySubString = (s) => {
  let result = 0;
  let map = new Map();
  for(let i=0; i<s.length; i++){
    map.set(s[i],1);
    for(let j=i+1; j<s.length; j++){
      if(map.has(s[j])){
        map.set(s[j], (map.get(s[j]) || 0)+1);
      }else {
        map.set(s[j],1);
      }
      if(map.size >= 2){
        result += freq(map);
      }
    }
    map.clear();
  }
  return result;
}
let str = "aabcb";
console.log(beautySubString(str));
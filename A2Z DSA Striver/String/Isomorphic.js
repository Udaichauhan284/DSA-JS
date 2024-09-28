/* 205. Isomorphic String
*/
//TC O(n)
 //indexOf give the first occurence index of that char
 //O(n^2) due to indexOf
 var isIsomorphic = function(s, t) {
  if(t.length > s.length){
    return false;
  }
  for(let i=0; i<s.length; i++){
    if(s.indexOf(s[i]) !== t.indexOf(t[i])){
      return false;
    }
  }
  return true;
};

class Solution {
  isomorphicString(s, t) {
      //your code goes here
      //this can also solve using array of ASCII code till 256
      let m1 = Array(256).fill(0);
      let m2 = Array(256).fill(0);
      if(t.length > s.length){
          return false;
      }
      for(let i=0; i<s.length; i++){
          if(m1[s.charCodeAt(i)] !== m2[t.charCodeAt(i)]){
              return false;
          }
          //now add it
          m1[s.charCodeAt(i)] = i+1;
          m2[t.charCodeAt(i)] = i+1;
      }
      return true;
  }
}
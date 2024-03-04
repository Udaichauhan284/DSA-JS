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
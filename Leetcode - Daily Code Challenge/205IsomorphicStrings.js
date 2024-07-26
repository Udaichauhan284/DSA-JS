/* 205. Isomorphic Strings
s = egg, t = add
o/p true
*/
//Approach 1. use of indexOf TC O(n^2), O(n) is for indexOf, SC : O(1)
const isIsomorphicString = (s,t) => {
  if(s.length !== t.length ){
    return false;
  }

  for(let i=0; i<s.length; i++){
    if(s.indexOf(s[i]) !== t.indexOf(t[i])){
      return false;
    }
  }
  return true;
}
// console.log(isIsomorphicString("egg","add"));
// console.log(isIsomorphicString("foo","bar"));

//Approach 2 - instend use of indexof use Map for storing index of cha and then macth the s and t
const isIsomorphicString1 = (s,t) => {
  if(s.length !== t.length){
    return false;
  }
  let sMap = {};
  let tMap = {};
  for(let i=0; i<s.length; i++){
    if(sMap[s[i]] !== tMap[t[i]]){
      return false;
    }
    sMap[s[i]] = i+1;
    tMap[t[i]] = i+1;
  }
  return true;
}
console.log(isIsomorphicString1("egg","add"));
console.log(isIsomorphicString1("foo","bar"));
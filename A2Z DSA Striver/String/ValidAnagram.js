/* 242. Valid Anagram
*/
//Apprach 1- using sort O(nlogn), SC - O(1)
const validAnagram = (s,t) =>{
  if(s.length !== t.length) return false;
  let sortS = s.split("").sort().join(""); //sorting of string
  let sortT = t.split("").sort().join("");
  if(sortS === sortT){
    return true;
  }else{
    return false;
  }
}

//Approach 2. using char Arr TC-O(n), SC - O(26) ~~ O(1)
const optimalValidAnagram = (s,t) => {
  if(s.length !== t.length) return false;

  const charArr = new Array(26).fill(0); // if there unicode ask take array of 128
  for(let i=0; i<s.length; i++){
    charArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    charArr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  for(let count of charArr){
    if(count !== 0){
      return false;
    }
  }
  return true;
}
let s = "anagram";
let t = "nagaram";
console.log(validAnagram(s,t));
console.log(optimalValidAnagram(s,t));
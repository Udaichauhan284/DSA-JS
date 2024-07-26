/* 1 April 2024
58. Length of Last Word
s = "Hello World"
o/p : 5 {World}

s = "   fly me.    to    the moon.  "
o/p: 4 {moon}
*/
//Approach 1. use of Trim of JS. TC O(n), SC : O(n) for trim and store in new str
const lengthOfLastWord = (s) => {
  let newS = s.trim();
  let n = newS.length;
  let i = n-1; //i start from back
  let length = 0; // for counting the length of last word

  while(i >= 0){
    if(newS[i] !== ' '){
      length++;
    }else if(length > 0){
      break;
    }
    i--;
  }
  return length;
}
const s = "Hello World";
const s1 = "     fly  me to    the moon     "
// console.log(lengthOfLastWord(s)); //5
// console.log(lengthOfLastWord(s1)); //4

//Approach 2. without use of Trim first remove the white spaces from last, then count the word TC O(n), SC O(1)
const lengthOfLastWord1 = (s) => {
  let n = s.length;
  let length = 0;
  let i=n-1;

  //remove the white spaces from the last - trim
  while(i>=0 && s[i] === ' '){
    i--;
  }

  //now count the length
  while(i>=0 && s[i] !== ' '){
    length++;
    i--;
  }
  return length;
}
console.log(lengthOfLastWord1(s)); // 5
console.log(lengthOfLastWord1(s1)); // 4
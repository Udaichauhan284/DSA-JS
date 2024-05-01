/* 2000. Reverse Prefix of Word
Example 1:
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
*/
 //Method 1- use of simple JS inbuild method
const reversePrefix = (word,ch) => {
  let charIndex = word.indexOf(ch);
  let prefix = word.substr(0,charIndex+1);
  let remainingWord = word.substr(charIndex+1);
  prefix = prefix.split("").reverse().join("");
  return prefix+remainingWord;
}
console.log(reversePrefix("abcdefd","d"));

//Method 2: use of for..loop for finding the index and then using the two pointer approach for reversing the string
const reversePrefix1 = (word,ch) => {
  let n = word.length;
  let charIndex = -1;
  let wordArr = word.split("");

  //for loop for finding the index
  for(let i=0; i<n; i++){
    if(word[i] === ch){
      charIndex = i;
      break;
    }
  }

  if(charIndex === -1) return word;

  //two pointer for reverse
  let i=0; 
  while(i < charIndex){
    let temp = wordArr[i];
    wordArr[i] = wordArr[charIndex];
    wordArr[charIndex] = temp;
    i++;
    charIndex--;
  }

  return wordArr.join("");
}
console.log(reversePrefix1("abcdefd","d"));
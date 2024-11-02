/*2490 Cicular Sentence
02 Nov 2024, Leetcode POTD, String

Input: sentence = "leetcode exercises sound delightful"
Output: true
Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
- leetcode's last character is equal to exercises's first character.
- exercises's last character is equal to sound's first character.
- sound's last character is equal to delightful's first character.
- delightful's last character is equal to leetcode's first character.
The sentence is circular.
*/

//O(n), SC: O(1)
const isCircular = (sentence) => {
    let len = sentence.length;
    for(let i=0; i<len; i++){
        if(sentence[i] === " " && sentence[i-1] !== sentence[i+1]){
            return false;
        }
    }
    return sentence[0] === sentence[len-1]; 
}
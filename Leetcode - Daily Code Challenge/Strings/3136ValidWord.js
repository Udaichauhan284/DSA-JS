/* 3136. Valid Word
15 July 2025, Leetcode POTD, EASY
Input: word = "234Adas"

Output: true

Explanation:

This word satisfies the conditions.
*/

//TC: O(n), SC: O(1)
var isValid = function(word) {
    let len = word.length;
    if(len < 3){
        return false;
    }
    let hasVowel = false;
    let hasConsonant = false;

    for(let ch of word){
        if(ch >= 'a' && ch <= 'z' || (ch >= 'A' && ch <= 'Z')){
            let char = ch.toLowerCase();
            if(char === 'a' || char === 'e' || char === 'o' || char === 'i' || char === 'u'){
                hasVowel = true;
            }else{
                hasConsonant = true;
            }
        }else if(!(ch >= 0 && ch <= 9)){
            return false
        }
    }
    return hasVowel && hasConsonant;
};
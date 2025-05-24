/* 2942. Find Words Containing Charaters
24 May 25, Leetcode POTD, EASY
Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
*/

var findWordsContaining = function(words, x) {
    let result = [];
    for(let i=0; i<words.length; i++){
        for(let ch of words[i]){
            if(ch === x){
                result.push(i);
                break;
            }
        }
    }
    return result;
};
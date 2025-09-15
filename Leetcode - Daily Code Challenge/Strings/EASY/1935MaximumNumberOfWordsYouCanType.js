/*1935. Maximum Number of Words You can Type
15 Sept 2025, Leetcode POTD, EASY
Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" because the 'd' key is broken.
*/

//TC: O(n+m), SC: O(26)
var canBeTypedWords = function(text, brokenLetters) {
    let set = new Set(brokenLetters);
    let result = 0;
    let canType = true;
    for(let ch of text){
        if(ch === ' '){
            //we see the space, measn we have complete the one word
            if(canType){
                result++;
            }
            canType = true;
        }else if(set.has(ch)){
            canType = false;
        }
    }
    if(canType){
        result++;
    }
    return result;
};
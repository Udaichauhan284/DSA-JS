/* 2900. Longest Unequal Adjacent Groups Subsequence I
15 May 25, Leetcode POTD Easy
Input: words = ["e","a","b"], groups = [0,0,1]

Output: ["e","b"]

Explanation: A subsequence that can be selected is ["e","b"] because groups[0] != groups[2]. Another subsequence that can be selected is ["a","b"] because groups[1] != groups[2]. It can be demonstrated that the length of the longest subsequence of indices that satisfies the condition is 2.
*/


//TC: O(n), SC: O(1), for len 1 TC: O(1)
var getLongestSubsequence = function(words, groups) {
    let result = [];
    let len = words.length;
    if(len === 1){
        return words;
    }
    for(let i=0; i<len; i++){
        //In this for loop, i am checking if i === 0 -> yes,
        //so add that one in result, and if not check groups[1] !== to groups[0], if not, add that one in result.
        if(i===0 || groups[i] !== groups[i-1]){
            result.push(words[i]);
        }
    }
    return result;
};
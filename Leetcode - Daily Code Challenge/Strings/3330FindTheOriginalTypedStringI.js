/* 3330. Find the Original Typed String I
01 July 25, Leetcode POTD, EASY
Input: word = "abbcccc"

Output: 5

Explanation:

The possible strings are: "abbcccc", "abbccc", "abbcc", "abbc", and "abcccc".
*/

/*01 Jul 2025, Leetcode POTD
in this we can check if next char is same we will
increase the count, and at last we will return the
count+1, for original string
TC:O(n), SC: O(1)
*/
var possibleStringCount = function(word) {
    let len = word.length;
    let count = 0;
    for(let i=1; i<len; i++){
        if(word[i] === word[i-1]){
            count++;
        }
    }
    return count+1; //+1 for original string, means alice doesnt make any mistake
};
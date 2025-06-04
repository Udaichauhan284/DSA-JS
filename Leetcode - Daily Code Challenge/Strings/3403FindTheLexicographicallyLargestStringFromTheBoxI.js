/* 3403. Find the Lexicographically Largest String From the Box I
04 June 2025, Leetcode POTD

Input: word = "dbca", numFriends = 2

Output: "dbc"

Explanation: 

All possible splits are:

"d" and "bca".
"db" and "ca".
"dbc" and "a".
*/

//TC: O(n^2), SC: O(1)
var answerString = function(word, numFriends) {
    let n = word.length;
    if (numFriends === 1) {
        return word;
    }

    let result = "";
    let longestPossible = n - (numFriends - 1);

    for (let i = 0; i < n; i++) {
        let canTakeLength = Math.min(longestPossible, n - i);
        let sub = word.substring(i, i + canTakeLength);
        if (sub > result) {
            result = sub;
        }
    }

    return result;
};

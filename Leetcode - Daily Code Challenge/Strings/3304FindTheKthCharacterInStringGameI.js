/* 3304. Find the Kth Character in String Game I
03 July 25, Leetcode POTD, EASY
Input: k = 5

Output: "b"

Explanation:

Initially, word = "a". We need to do the operation three times:

Generated string is "b", word becomes "ab".
Generated string is "bc", word becomes "abbc".
Generated string is "bccd", word becomes "abbcbccd".
*/

var kthCharacter = function (k) {
    let idx = k - 1;
    let result = 'a';

    while (result.length < k) {
        let n = result.length;
        for (let i = 0; i < n; i++) {
            let ch = result[i] === 'z' ? 'a' : String.fromCharCode(result.charCodeAt(i) + 1);
            result += ch;
        }
    }

    return result[idx];
};
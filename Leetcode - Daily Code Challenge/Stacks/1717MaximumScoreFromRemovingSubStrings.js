/* 1717. Maximum Score From Removing Substrings
23 July 2025, Leetcode POTD, Medium
Input: s = "cdbcbbaaabab", x = 4, y = 5
Output: 19
Explanation:
- Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.
*/

var maximumGain = function(s, x, y) {
    let score = 0;
    let maxStr = (x > y) ? 'ab' : 'ba';
    let minStr = (x > y) ? 'ba' : 'ab'; 

    // First pass: remove higher value pair
    let tempFirst = removeSubString(s, maxStr);
    let lenOfFirst = tempFirst.length;
    let removePairCount = Math.floor((s.length - lenOfFirst) / 2);
    score += removePairCount * Math.max(x, y); 

    // Second pass: remove remaining lower value pair
    let tempSecond = removeSubString(tempFirst, minStr);
    let lenOfSecond = tempSecond.length;
    removePairCount = Math.floor((lenOfFirst - lenOfSecond) / 2);
    score += removePairCount * Math.min(x, y);

    return score;
};

function removeSubString(s, matchStr){
    let st = [];
    for (let ch of s) {
        if (st.length !== 0 && ch === matchStr[1] && st[st.length - 1] === matchStr[0]) {
            st.pop();
        } else {
            st.push(ch);
        }
    }

    // return the remaining string
    return st.join('');
}

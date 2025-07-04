/* 3307. Find the Kth Character in String Game II
04 July 25, Leetocde POTD, HARD
Input: k = 5, operations = [0,0,0]

Output: "a"

Explanation:

Initially, word == "a". Alice performs the three operations as follows:

Appends "a" to "a", word becomes "aa".
Appends "aa" to "aa", word becomes "aaaa".
Appends "aaaa" to "aaaa", word becomes "aaaaaaaa".

*/

var kthCharacter = function (k, operations) {
    let ans = 0;
    while (k !== 1) {
        let t = Math.floor(Math.log2(k));
        if (Number(1n << BigInt(t)) === k) {
            t--;
        }
        k -= Number(1n << BigInt(t));
        if (operations[t]) {
            ans++;
        }
    }
    return String.fromCharCode("a".charCodeAt(0) + (ans % 26));
};
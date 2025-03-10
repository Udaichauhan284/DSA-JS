/*3306. Count of Substrings Containing Every Vowel and K Consonants II
10 March 25, Leetcode POTD

You are given a string word and a non-negative integer k.

Return the total number of substrings of word that contain every vowel ('a', 'e', 'i', 'o', and 'u') at least once and exactly k consonants.


*/

//T.C : O(2*n) ~ O(n)
//S.C : O(n)
var countOfSubstrings = function (word, k) {
    const n = word.length;
    const mp = new Map(); // to keep count of vowels in a current window

    // Preprocessing to find the index of the next consonant
    const nextCons = new Array(n).fill(n);
    let lastConsIdx = n;

    for (let i = n - 1; i >= 0; i--) {
        nextCons[i] = lastConsIdx;
        if (!isVowel(word[i])) { // consonant
            lastConsIdx = i;
        }
    }

    let i = 0, j = 0;
    let count = 0;
    let cons = 0;

    while (j < n) {
        let ch = word[j];
        if (isVowel(ch)) {
            mp.set(ch, (mp.get(ch) || 0) + 1);
        } else {
            cons++;
        }

        // Ensure cons is always equal to k
        while (cons > k) {
            let ch = word[i];
            if (isVowel(ch)) {
                mp.set(ch, mp.get(ch) - 1);
                if (mp.get(ch) === 0) {
                    mp.delete(ch);
                }
            } else {
                cons--;
            }
            i++;
        }

        while (i < n && mp.size === 5 && cons === k) { // valid window
            let idx = nextCons[j]; // next consonant after jth index
            count += idx - j;
            let ch = word[i];
            if (isVowel(ch)) {
                mp.set(ch, mp.get(ch) - 1);
                if (mp.get(ch) === 0) {
                    mp.delete(ch);
                }
            } else {
                cons--;
            }
            i++;
        }

        j++;
    }

    return count;
};
function isVowel(ch) {
    return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u';
}
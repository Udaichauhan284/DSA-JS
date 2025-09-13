/*
3541. Find Most Frequent Vowel and Consonant
13 sept 2025, leetcode potd, EASY
Input: s = "successes"

Output: 6

Explanation:

The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.
*/

//TC: O(n +n +n) ~ O(3n) ~ O(n), SC : O(2*26) ~ O(1)
var maxFreqSum = function (s) {
    let consonants = new Map();
    let vowels = new Map();
    for (let ch of s) {
        if (isVowel(ch)) {
            vowels.set(ch, (vowels.get(ch) || 0) + 1);
        } else {
            consonants.set(ch, (consonants.get(ch) || 0) + 1);
        }
    }

    let maxVowel = 0;
    for (let [, freq] of vowels) {
        maxVowel = Math.max(maxVowel, freq);
    }

    let maxConsonant = 0;
    for (let [, freq] of consonants) {
        maxConsonant = Math.max(maxConsonant, freq);
    }

    return maxVowel + maxConsonant;
};
function isVowel(ch) {
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        return true;
    }
    return false;
}
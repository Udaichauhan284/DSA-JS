/* 2785. Sort Vowels in a String
11 Sept 2025, leetcode potd, medium
Input: s = "lEetcOde"
Output: "lEOtcede"
Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.
*/

//TC: O(k + nlogn) ~ O(nlogn), SC: O(n)
var sortVowels = function(s) {
   const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

    // collect vowels only
    let vowelArr = [];
    for (let ch of s) {
        if (vowels.has(ch)) {
            vowelArr.push(ch);
        }
    }

    // sort vowels by charCode, O(nlogn)
    vowelArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    // rebuild string
    let result = "";
    let j = 0;
    for (let ch of s) { //O(k)
        if (vowels.has(ch)) {
            result += vowelArr[j++];
        } else {
            result += ch;
        }
    }

    return result;
};
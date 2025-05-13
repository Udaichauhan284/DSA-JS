/* 3335. Total Characters in String After Transformations I
13 May 2025, Leetcode POTD, Medium
Input: s = "abcyy", t = 2

Output: 7

Explanation:

First Transformation (t = 1):
'a' becomes 'b'
'b' becomes 'c'
'c' becomes 'd'
'y' becomes 'z'
'y' becomes 'z'
String after the first transformation: "bcdzz"
Second Transformation (t = 2):
'b' becomes 'c'
'c' becomes 'd'
'd' becomes 'e'
'z' becomes "ab"
'z' becomes "ab"
String after the second transformation: "cdeabab"
Final Length of the string: The string is "cdeabab", which has 7 characters.
*/


/*In this, we make changes in map/arr, 
first we count the freq of digit in map and then
in next loop till t times, we create another
temp arr/map to store new str elem, from 
prev map, with added that freq.
TC: O(t*26) ~ O(t), SC: O(1)
*/
const M = 1e9 + 7;

var lengthAfterTransformations = function(s, t) {
    // Frequency array to count each character 'a' to 'z'
    let freq = Array(26).fill(0);

    // Count initial frequencies of characters in the string
    for (let ch of s) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Repeat the transformation t times
    for (let count = 1; count <= t; count++) { //O(t)
        // Temporary array to store updated frequencies
        let temp = Array(26).fill(0);

        for (let i = 0; i < 26; i++) { //O(26)
            let time = freq[i]; // Frequency of current character

            if (i !== 25) {
                // If current character is not 'z', it turns into next character
                temp[i + 1] = (temp[i + 1] + time) % M;
            } else {
                // If current character is 'z', it turns into 'a' and 'b'
                temp[0] = (temp[0] + time) % M;
                temp[1] = (temp[1] + time) % M;
            }
        }

        // Update the frequency array for next iteration
        freq = temp;
    }

    // Calculate the final length (sum of all frequencies)
    let result = 0;
    for (let i = 0; i < 26; i++) {
        result = (result + freq[i]) % M;
    }

    return result;
};

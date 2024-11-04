/* 3163 String Compression III
04 Nov 2024, Leetcode POTD, String

Input: word = "abcde"

Output: "1a1b1c1d1e"

Explanation:

Initially, comp = "". Apply the operation 5 times, choosing "a", "b", "c", "d", and "e" as the prefix in each operation.

For each prefix, append "1" followed by the character to comp.
*/

//Simple count the char in while loop till count < 9
//TC: O(n), SC: O(1)
const compressedString = (word) => {
    let len = word.length;
    let comp = ""; //return string
    let idx = 0; //mobing pointer
    while(idx < len){
        let count = 0;
        let char = word[idx]; //curr idx
        while(idx < len && char === word[idx] && count < 9){
            count++;
            idx++;
        }
        comp += String(count)+char; //9a
    }
    return comp;
}
/* 1790 Check if One String Swap Can Make Strings Equal
05 Feb 25, Leetcode POTD, String

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
*/

/*In this we use the freqArray of 26 size,
and also maintain the diff to size the difference if that
cross the 2, we will return false
TC: O(n), SC: O(26)~ O(1);
*/
var areAlmostEqual = function (s1, s2) {
    let len = s1.length;
    let s1Freq = Array(26).fill(0);
    let s2Freq = Array(26).fill(0);
    let diff = 0;
    if (s1 === s2) return true;
    for (let i = 0; i < len; i++) {
        if (s1[i] !== s2[i]) {
            diff++;
        }
        if (diff > 2) {
                return false;
        }


        s1Freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
        if (s1Freq[i] !== s2Freq[i]) {
            return false;
        }
    }
    return true;
};


/*In Optimal Method, simple, we can maintain the diff and first and last index of change, and then check
TC: O(n), SC: O(1)
*/
var areAlmostEqual = function(s1, s2) {
    let len = s1.length;
    let diff = 0;
    let firstIndex = 0;
    let secondIndex = 0;
    for(let i=0; i<len; i++){
        if(s1[i] !== s2[i]){
            diff++;
            if(diff > 2){
                return false;
            }else if(diff === 1){
                firstIndex = i;
            }else{
                secondIndex = i;
            }
        }
    }
    return s1[firstIndex] === s2[secondIndex] && s1[secondIndex] === s2[firstIndex];
};
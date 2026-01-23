/* 424. Longest Repeating Character Replacement
24 Jan 2026, leetcode, medium
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
*/

/*Brute Method, in this take a map, and in that put the freq of
letters and then have the maxFreq one and from len minus the max
one we will get the diff, now this diff we need to change
TC:O(n^2), SC: O(1)
*/
var characterReplacement = function(s, k) {
    let len = s.length;
    let maxLen = 0;
    for(let i=0; i<len; i++){
        let maxFreq = 0;
        let hashFreq = Array(26).fill(0);
        for(let j=i; j<len; j++){
            hashFreq[s.charCodeAt(j) - 'A'.charCodeAt(0)]++;
            let len = j-i+1;
            maxFreq = Math.max(maxFreq, hashFreq[s.charCodeAt(j)-'A'.charCodeAt(0)]);
            let diff = len - maxFreq;
            if(diff <= k){
                //means we find the ans
                maxLen = Math.max(maxLen, j-i+1);
            }
        }
    }
    return maxLen;
};


/*In optimal we also do the same, but we will
use the SLiding window
TC: O(n), SC: O(26)~ O(1) for freq map
*/
var characterReplacement = function(s, k) {
    let len = s.length;
    let low = 0;
    let maxLen = 0;
    let maxFreq = 0;
    let freq = Array(26).fill(0);

    for (let high = 0; high < len; high++) {
        let idx = s.charCodeAt(high) - 'A'.charCodeAt(0);
        freq[idx]++;
        maxFreq = Math.max(maxFreq, freq[idx]);

        // shrink window if replacements needed > k
        while ((high - low + 1) - maxFreq > k) {
            freq[s.charCodeAt(low) - 'A'.charCodeAt(0)]--;
            low++;
        }

        maxLen = Math.max(maxLen, high - low + 1);
    }

    return maxLen;
};
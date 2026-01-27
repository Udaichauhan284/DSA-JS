/* 76. Minimum Window Substring
27 Jan 2026, leetcode potd, HARD
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/


/*
Minimum Window Substring (Sliding Window)

Goal:
Find the smallest substring in s that contains all characters of t
(including duplicates).

Approach:
1. Store frequency of characters of t in a map.
2. Use two pointers (low, high) to create a sliding window on s.
3. Expand window using high pointer:
   - If current char is required, decrease requiredCount.
   - Decrease its frequency in map.
4. When requiredCount becomes 0:
   - Current window is valid.
   - Try shrinking from left (low) to minimize window size.
5. While shrinking:
   - Update min window length.
   - Restore frequency of removed char.
   - If a required char is removed, increase requiredCount.
6. Continue until high reaches end.

Key Idea:
requiredCount tracks how many characters of t are still missing.
TC: O(n), SC: O(m)
*/

var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    // Frequency map for characters in t
    let freq = new Map();
    for (let ch of t) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let low = 0;
    let requiredCount = t.length;
    let minLen = Infinity;
    let startIdx = 0;

    // Expand window using high pointer
    for (let high = 0; high < s.length; high++) {

        // If current char is needed, reduce requiredCount
        if (freq.has(s[high]) && freq.get(s[high]) > 0) {
            requiredCount--;
        }

        // Reduce frequency (even for non-t chars, goes negative)
        freq.set(s[high], (freq.get(s[high]) || 0) - 1);

        // When all characters of t are included
        while (requiredCount === 0) {

            // Update minimum window
            if (high - low + 1 < minLen) {
                minLen = high - low + 1;
                startIdx = low;
            }

            // Remove left character from window
            freq.set(s[low], freq.get(s[low]) + 1);

            // If removed char was required, window becomes invalid
            if (freq.get(s[low]) > 0) {
                requiredCount++;
            }
            low++;
        }
    }

    return minLen === Infinity ? "" : s.substring(startIdx, startIdx + minLen);
};

/* 2901. Longest Unequal Adjacent groups Subsequence II
16 May 2025, Leetcode POTD, Medium Section
Input: words = ["bab","dab","cab"], groups = [1,2,2]

Output: ["bab","cab"]

Explanation: A subsequence that can be selected is [0,2].

groups[0] != groups[2]
words[0].length == words[2].length, and the hamming distance between them is 1.
So, a valid answer is [words[0],words[2]] = ["bab","cab"].

Another subsequence that can be selected is [0,1].

groups[0] != groups[1]
words[0].length == words[1].length, and the hamming distance between them is 1.
So, another valid answer is [words[0],words[1]] = ["bab","dab"].

It can be shown that the length of the longest subsequence of indices that satisfies the conditions is 2.
*/

// This question is releated to Longest Increasing Subsequence

/*
Time Complexity: 
- O(n^2 * L), where n = number of words, L = average word length
  - Outer loop: O(n^2)
  - Hamming distance check: O(L)

Space Complexity: 
- O(n) for dp[]
- O(n) for parent[]
- O(n) for result[]

Overall: O(n * (n * L)) time and O(n) space
*/
var getWordsInLongestSubsequence = function(words, groups) {
    const n = words.length;

    // dp[i]: Length of longest subsequence ending at index i
    const dp = Array(n).fill(1);
    const parent = Array(n).fill(-1);
    
    let longestSub = 1;
    let longestSubIdx = 0;

    // Time Complexity: O(n^2 * L), where L is the word length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (
                groups[i] !== groups[j] &&
                words[i].length === words[j].length &&
                checkHammingDistanceOne(words[i], words[j])
            ) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    parent[i] = j;

                    if (dp[i] > longestSub) {
                        longestSub = dp[i];
                        longestSubIdx = i;
                    }
                }
            }
        }
    }

    // Reconstruct the result sequence using parent[]
    const result = [];
    while (longestSubIdx !== -1) {
        result.push(words[longestSubIdx]);
        longestSubIdx = parent[longestSubIdx];
    }

    result.reverse(); // Reverse to get correct order

    return result;
};

function checkHammingDistanceOne(s1, s2) {
    let diff = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff++;
        }

        // Early exit if more than one difference found
        if (diff > 1) return false;
    }

    return diff === 1;
}
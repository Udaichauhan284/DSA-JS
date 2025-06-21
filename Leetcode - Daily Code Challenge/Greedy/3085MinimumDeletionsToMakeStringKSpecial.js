/* 3085. Minimum Deletions to make string k special

21 June 2025, leetcode POTD, medium
Input: word = "aabcaba", k = 0

Output: 3

Explanation: We can make word 0-special by deleting 2 occurrences of "a" and 1 occurrence of "c". Therefore, word becomes equal to "baba" where freq('a') == freq('b') == 2.
*/

var minimumDeletions = function(word, k) {
    let freq = Array(26).fill(0);
    let result = word.length;

    for(let ch of word){
        freq[ch.charCodeAt(0)-"a".charCodeAt(0)]++;
    }

    for(let i=0; i<26; i++){
        let del = 0;
        for(let j=0; j<26; j++){
            if(i === j) continue;
            if(freq[j] < freq[i]){
                del += freq[j];
            }else if(Math.abs(freq[j]-freq[i]) > k){
                del += Math.abs(freq[j]-freq[i]-k);
            }
        }
        result = Math.min(result,del);
    }
    return result;
};
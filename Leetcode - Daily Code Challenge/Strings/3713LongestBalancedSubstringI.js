/* 3713. Longest Balanced Substring I
12 Feb 2026, Leetcode POTD, Medium
Input: s = "abbac"

Output: 4

Explanation:

The longest balanced substring is "abba" because both distinct characters 'a' and 'b' each appear exactly 2 times.


*/


var longestBalanced = function(s) {
    let len = s.length;
    let maxL = 0;
    for(let i=0; i<len; i++){
        let freq = Array(26).fill(0);
        for(let j=i; j<len; j++){
            freq[s.charCodeAt(j)-'a'.charCodeAt(0)]++;
            if(balance(freq)){
                maxL = Math.max(maxL, j-i+1);
            }
        }
    }
    return maxL;
};
function balance(freq){
    let common = 0;
    for(let i=0; i<26; i++){
        if(freq[i] === 0) continue;
        if(common === 0){
            common = freq[i]
        }else if(common !== freq[i]){
            return false;
        }
    }
    return true;
}
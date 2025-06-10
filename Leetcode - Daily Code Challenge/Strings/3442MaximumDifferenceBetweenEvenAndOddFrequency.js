/* 3442. Maximum Difference Between Even and Odd Frequency I
10 June 2025, Leetcode POTD, Easy

Input: s = "aaaaabbc"

Output: 3

Explanation:

The character 'a' has an odd frequency of 5, and 'b' has an even frequency of 2.
The maximum difference is 5 - 2 = 3.
*/

//TC: O(n+n) ~ O(2n) ~ O(n), SC: O(n)
var maxDifference = function(s) {
    let len = s.length;
    let map = new Map();
    for(let ch of s){
        map.set(ch, (map.get(ch) || 0)+1);
    }

    //we want diff of min and max diff
    let maxOdd = 0;
    let minEven = len+1;
    for(let [char, freq] of map){
        if(freq === 0) continue
        if(freq%2 === 0){
            minEven = Math.min(minEven, freq);
        }else{
            maxOdd = Math.max(maxOdd, freq);
        }
    }
    return maxOdd - minEven;
};
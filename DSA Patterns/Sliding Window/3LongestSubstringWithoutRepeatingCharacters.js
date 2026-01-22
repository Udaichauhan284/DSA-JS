/* 3. Longest Substring Without Repeating Charaters
23 jan 2026, leetcode medium
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
*/

/*Brute Method
TC: O(n^2), SC: O(1)
*/
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    let sArr = s.split('');
    let maxLen = 0;
    for(let i=0; i<len; i++){
        let set = new Set();
        for(let j=i; j<len; j++){
            set.add(sArr[j]);
            let k = j-i+1;
            if(set.size < k){
                break;
            }
            maxLen = Math.max(maxLen, j-i+1);

        }
    }
    return maxLen;
};


/*In optimal method, this is string and substr
ques, we can apply sliding window, but for that
we need k, so for that, we will find longest
substring high-low+1, that will act as k
and it will change as we move it into string
TC: O(n), SC: O(1) ~ O(26)
*/
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    let sArr = s.split('');
    let low = 0, high = 0;
    let maxLen = 0;
    let unique = new Map();
    while(high < len){
        //now add the high one
        unique.set(sArr[high], (unique.get(sArr[high]) || 0)+1);

        // shrink if duplicate exists
        while(unique.get(sArr[high]) > 1){
            unique.set(sArr[low], (unique.get(sArr[low])-1));
            if(unique.get(sArr[low]) === 0){
                unique.delete(sArr[low]);
            }
            low++;
        }
        maxLen = Math.max(maxLen, high-low+1);
        high++;
    }
    return maxLen;
};
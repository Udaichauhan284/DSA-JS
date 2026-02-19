/* 696. Count Binary Substrings
19 Feb 2026, leetcode potd, easy
Input: s = "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
*/

var countBinarySubstrings = function(s) {
    let len = s.length;
    let prevGroup = 0;
    let currGroup = 1;
    let count = 0;
    for(let i=1; i<len; i++){
        if(s[i] === s[i-1]){
            currGroup++;
        }else{
            count += Math.min(prevGroup, currGroup);
            prevGroup = currGroup;
            currGroup = 1;
        }
    }
    count += Math.min(prevGroup, currGroup);
    return count;
};
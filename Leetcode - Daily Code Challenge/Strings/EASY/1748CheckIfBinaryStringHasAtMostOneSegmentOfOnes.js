/* 1784. Check if Binary String Has At Most One Segment Of Ones
06 Mar 2026, leetcode potd, easy
Input: s = "1001"
Output: false
Explanation: The ones do not form a contiguous segment.
*/

var checkOnesSegment = function(s) {
    return (s.indexOf("01") === -1);
};
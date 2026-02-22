/* 868. Binary Gap
22 Feb 2026, leetcode potd, easy

Input: n = 22
Output: 2
Explanation: 22 in binary is "10110".
The first adjacent pair of 1's is "10110" with a distance of 2.
The second adjacent pair of 1's is "10110" with a distance of 1.
The answer is the largest of these two distances, which is 2.
Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.
*/

var binaryGap = function(n) {
    let curr = 0;
    let prev = -1;
    let result = 0;
    while(n > 0){
        //now check if bit is set
        if((n&1) > 0){
            result = (prev !== -1) ? Math.max(result, curr-prev) : 0;
            prev = curr; //now change the pointer
        }
        curr++; //increase the curr;
        n >>= 1; //right shift one, to remove that 1;
    }
    return result;
};
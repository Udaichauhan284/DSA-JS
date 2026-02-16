/* 190. Reverse Bits
16 Feb 2026, leetcode potd, easy
Input: n = 43261596

Output: 964176192
*/

//TC: O(1), SC: O(1)
var reverseBits = function(n) {
    let result = 0;
    if(n === 0) return result;

    for(let i=0; i<32; i++){
        //1.need to add zero spacing to result, do the left shift
        result = result << 1;
        //now need to add the LSB to result, for add DO OR
        result = result | (n & 1); //n&1 will give the LSB
        //now remove the LSB from n, as we used that already
        n >>= 1; //do the right shift, > one more because need to do for 32 bit
    }
    return result;
};
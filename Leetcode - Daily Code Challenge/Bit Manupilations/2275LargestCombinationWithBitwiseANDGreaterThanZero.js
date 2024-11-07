/*2275 Largest Combination WIth Bitwise AND Greater Than Zero
07 Nov 2024, Array, Bit Manupilation

Input: candidates = [16,17,71,62,12,24,14]
Output: 4
Explanation: The combination [16,17,62,24] has a bitwise AND of 16 & 17 & 62 & 24 = 16 > 0.
The size of the combination is 4.
It can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.
Note that more than one combination may have the largest size.
For example, the combination [62,12,24,14] has a bitwise AND of 62 & 12 & 24 & 14 = 8 > 0.

*/

/*In this we need to find the set bit in all number, so that 
we can form the largest group. check the setbit increase the 
count TC: O(32 * n), SC: O(32) if we see the constraints
TC: O(24 * n), because we need 24 bits to write 10^7.
*/
var largestCombination = function(candidates) {
    let countBit = Array(32).fill(0);
    let maxRange = Number.MIN_VALUE;
    for(let bitPos=0; bitPos < 32; bitPos++){
        for(let num of candidates){
            //now check the set bit
            if(num & (1 << bitPos)){
                countBit[bitPos]++; //increase that bit value
            }
        }
        maxRange = Math.max(maxRange, countBit[bitPos]);
    }
    return maxRange;
};

/*Method 3, simple use bit till 24, because for highest value
10^7 we need 24 bit-> logbase2(10^7) = logbase10(10^7) + 
logbase2(10^7) + 1 => 24. TC: O(24 * n), SC: O(1)
*/
var largestCombination = function(candidates) {
    let maxRange = Number.MIN_VALUE;
    for(let bitPos=0; bitPos<24; bitPos++){
        let count = 0;
        for(let num of candidates){
            //find the set bit 
            if(num & (1 << bitPos)){
                count++;
            }
        }
        maxRange = Math.max(maxRange, count);
    }
    return maxRange;
};
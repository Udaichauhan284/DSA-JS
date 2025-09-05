/*2749. Minimum Operations To Make the Integer Zero
05 Sept 2025, leetcode potd, medium
Input: num1 = 3, num2 = -2
Output: 3
Explanation: We can make 3 equal to 0 with the following operations:
- We choose i = 2 and subtract 22 + (-2) from 3, 3 - (4 + (-2)) = 1.
- We choose i = 2 and subtract 22 + (-2) from 1, 1 - (4 + (-2)) = -1.
- We choose i = 0 and subtract 20 + (-2) from -1, (-1) - (1 + (-2)) = 0.
It can be proven, that 3 is the minimum number of operations that we need to perform.
*/

function makeTheIntegerZero(num1, num2) {
    let t = 0;

    while (true) {
        let val = num1 - t * num2;

        if (val < 0) return -1;

        // count set bits (popcount)
        let popcount = val.toString(2).split('0').join('').length;

        if (popcount <= t && t <= val) {
            return t;
        }

        t++;
    }
}
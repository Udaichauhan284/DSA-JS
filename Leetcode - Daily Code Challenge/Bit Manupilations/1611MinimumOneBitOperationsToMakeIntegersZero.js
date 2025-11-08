/* 1611. Minimum One Bit Operations To Make Integers Zero
08 Nov 2025, leetcode potd, hard
Input: n = 3
Output: 2
Explanation: The binary representation of 3 is "11".
"11" -> "01" with the 2nd operation since the 0th bit is 1.
"01" -> "00" with the 1st operation.
*/

function minimumOneBitOperations(n) {
    if (n === 0) return 0;

    // function[i] = operations needed to flip ith bit
    const func = Array(32).fill(0);
    func[0] = 1;

    for (let i = 1; i <= 31; i++) {
        func[i] = 2 * func[i - 1] + 1;
    }

    let result = 0;
    let sign = 1;

    for (let i = 30; i >= 0; i--) {
        const ithBit = (n & (1 << i));

        if (ithBit === 0) continue;

        if (sign > 0) result += func[i];
        else result -= func[i];

        sign *= -1;
    }

    return result;
}

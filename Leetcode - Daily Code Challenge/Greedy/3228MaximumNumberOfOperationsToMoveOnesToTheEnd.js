/* 3228. Maximum Number of Operations to move ones to the end
13 nov 2025, leetcode potd, medium 
Input: s = "1001101"

Output: 4

Explanation:

We can perform the following operations:

Choose index i = 0. The resulting string is s = "0011101".
Choose index i = 4. The resulting string is s = "0011011".
Choose index i = 3. The resulting string is s = "0010111".
Choose index i = 2. The resulting string is s = "0001111".
*/

function maxOperations(s) {
    const n = s.length;
    let result = 0;
    let i = 0;
    let count1seen = 0;

    while (i < n) {
        if (s[i] === '0') {
            result += count1seen;
            while (i < n && s[i] === '0') {
                i++; // move past consecutive zeros
            }
        } else {
            count1seen++;
            i++;
        }
    }

    return result;
}

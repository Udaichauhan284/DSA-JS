/*2264. Largest 3 Same Digit Number in String
14 Aug 2025, Leetcode POTD, EASY
Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".
*/

//TC: O(n), SC: O(1)
var largestGoodInteger = function(num) {
    let maxDigit = ''; // Store the largest repeating digit

    for (let i = 0; i <= num.length - 3; i++) {
        // Check if 3 consecutive digits are the same
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            // Update maxDigit if this triplet is larger
            if (num[i] > maxDigit) {
                maxDigit = num[i];
            }
        }
    }

    // If we found a digit, return it repeated 3 times
    return maxDigit ? maxDigit.repeat(3) : '';
};
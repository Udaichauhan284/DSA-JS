/* 2999. Count the number of powerful integers
10 April 2025, Leetcode POTD
Input: start = 1, finish = 6000, limit = 4, s = "124"
Output: 5
Explanation: The powerful integers in the range [1..6000] are 124, 1124, 2124, 3124, and, 4124. All these integers have each digit <= 4, and "124" as a suffix. Note that 5124 is not a powerful integer because the first digit is 5 which is greater than 4.
It can be shown that there are only 5 powerful integers in this range.
*/

var numberOfPowerfulInt = function (start, finish, limit, s) {
    const start_ = (start - 1).toString();
    const finish_ = finish.toString();
    return calculate(finish_, s, limit) - calculate(start_, s, limit);
};

function calculate(x, s, limit) {
    if (x.length < s.length) {
        return 0;
    }
    if (x.length === s.length) {
        return x >= s ? 1 : 0;
    }

    const suffix = x.slice(-s.length);
    let count = 0;
    const preLen = x.length - s.length;

    for (let i = 0; i < preLen; i++) {
        const digit = parseInt(x[i]);
        if (limit < digit) {
            count += Math.pow(limit + 1, preLen - i);
            return count;
        }
        count += digit * Math.pow(limit + 1, preLen - 1 - i);
    }
    if (suffix >= s) {
        count++;
    }
    return count;
}
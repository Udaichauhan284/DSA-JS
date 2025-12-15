/* 2110. Number of Smooth Descent Periods of a Stock
15 Dec 2025, leetcode potd, medium
Input: prices = [3,2,1,4]
Output: 7
Explanation: There are 7 smooth descent periods:
[3], [2], [1], [4], [3,2], [2,1], and [3,2,1]
Note that a period with one day is a smooth descent period by the definition.
*/

//TC: O(n), SC:O(1)
var getDescentPeriods = function (prices) {
    let result = 1;
    let count = 1;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] - prices[i] === 1) {
        count++;
        } else {
        count = 1;
        }
        result += count;
    }
    return result;
};

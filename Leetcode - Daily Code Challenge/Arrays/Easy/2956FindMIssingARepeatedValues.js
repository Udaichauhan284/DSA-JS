/*2965 Find Missing and Repeated Values
06/03/25 Leetcode POTD, Easy
You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

Example 1:
Input: grid = [[1,3],[2,2]]
Output: [2,4]
Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].

*/


/*use of set to find the repeating the num, and then find the
natural sum and array sum-repeated num, give the ans
TC: O(n^2), SC: O(n)
*/
var findMissingAndRepeatedValues = function(grid) {
    let len = grid.length ** 2; // n^2

    let set = new Set();
    let ans = [];
    let sum = 0;
    let repeatedNum = -1;

    // Flatten the grid and find the repeated number
    for (let row of grid) { //TC: O(n^2)
        for (let num of row) {
            if (set.has(num)) {
                repeatedNum = num; // Found repeating number
            } else {
                set.add(num);
            }
            sum += num; // Sum of all elements
        }
    }


    let expectedSum = (len * (len + 1)) / 2;
    let missingNum = expectedSum - (sum - repeatedNum); 

    ans.push(repeatedNum);
    ans.push(missingNum);

    return ans;
};
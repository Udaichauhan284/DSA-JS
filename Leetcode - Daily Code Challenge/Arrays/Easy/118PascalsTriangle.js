/*118. Pascal's Triangle
1 August 2025, Leetcode POTD, Easy
Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

/*In first col and last col both have one
the addition col val is add of above one 
and above left one. in first row the col = 1
the application of pascal is 4C2 = 6
TC: O(numRows*numRows), SC: O(n) for result
O(1)
*/
var generate = function (numRows) {
    let result = Array(numRows);
    for (let i = 0; i < numRows; i++) {
        //2d array of 1
        result[i] = Array(i + 1).fill(1);
        //now iterate over the col
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j] + result[i - 1][j - 1];
        }
    }
    return result;
};
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

/* 3 oct 2025,
check this out, this is nice approach to follow the Pascal question
*/

/*In this we need to think about the 2d array, where i=0, have 1 elem
and i=1 have 2 elem, so in i row have i+1 eleme
and then we need to add above elem and digonally eleme i-1,j and 
i-1,j-1
TC: O(numRows * numRows) worst case, SC: O(n) for result ~ O(1)
*/
var generate = function(numRows) {
    let result = Array(numRows);
    for(let i=0; i<numRows; i++){
        //now we need to build the 2d array, at i we have i+1 elem
        result[i] = Array(i+1).fill(1);
        for(let j=1; j<i; j++){
            //now add the above elem and diagonally elem
            result[i][j] = result[i-1][j]+result[i-1][j-1];
        }
    }
    return result;
};
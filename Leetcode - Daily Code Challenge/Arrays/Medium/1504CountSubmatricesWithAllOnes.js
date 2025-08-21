/* 1504. Count Submatrices With All Ones
21 Aug 2025, Leetcode POTD, Medium
Input: mat = [[1,0,1],[1,1,0],[1,1,0]]
Output: 13
Explanation: 
There are 6 rectangles of side 1x1.
There are 2 rectangles of side 1x2.
There are 3 rectangles of side 2x1.
There is 1 rectangle of side 2x2. 
There is 1 rectangle of side 3x1.
Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.
*/
/*In this we use 1D array logic and count the
consicutive 1's and add them into variable
for rows we need to traverse rows using the
startRow and endRow
TC: O(m*m*n), SC: O(n)
*/
var numSubmat = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let result = 0;
    for(let startRow=0; startRow<m; startRow++){
        let rowsArr = Array(n).fill(1);
        for(let endRow=startRow; endRow<m; endRow++){
            for(let col=0; col<n; col++){
                rowsArr[col] = rowsArr[col] & mat[endRow][col];
            } 
            result += oneDArrLogic(rowsArr);
        }
    }
    return result;
};
function oneDArrLogic(arr) {
    let cons = 0;
    let total = 0;
    for (let el of arr) {
        if (el === 0) {
            cons = 0;
        } else {
            cons++;
            total += cons; // add at each step
        }
    }
    return total;
}

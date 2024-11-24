/* 1975 Maximum Matrix Sum
24 Nov 2024, Leetcode POTD, Array, Matrix

Input: matrix = [[1,-1],[-1,1]]
Output: 4
Explanation: We can follow the following steps to reach sum equals 4:
- Multiply the 2 elements in the first row by -1.
- Multiply the 2 elements in the first column by -1.

*/
/*In this we need to count the neg, if neg is odd
then we need to take the min abs number, so thta we 
can subtract from wholeSum, if neg is even means
it become pos so return the sum.
TC: O(row * col)
*/
var maxMatrixSum = function(matrix) {
    let n = matrix.length;
    let sum = 0;
    let countNeg = 0;
    let minAbsNum = Number.MAX_VALUE;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            sum += Math.abs(matrix[i][j]);
            //now check the neg nums
            if(matrix[i][j] < 0){
                countNeg++;
            }
            minAbsNum = Math.min(minAbsNum, Math.abs(matrix[i][j]));
        }
    }
    if(countNeg%2 === 0){
        //even number of neg number
        return sum;
    }
    //odd number of neg num, so minus it 2 times->1 time we add first
    //time and second time for that neg sign
    return sum-2*minAbsNum;
};
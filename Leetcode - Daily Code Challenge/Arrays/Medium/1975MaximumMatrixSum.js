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


/*In this we need to count the neg val, if neg values
are even, simple return the sum of all, if not
means they are odd, so from overall sum we need to 
remove the min Neg value, and then minus it from 
whole sum, so we need to sum-2*minNeg
TC: O(n^2), SC: O(1)
*/
var maxMatrixSum = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let countNeg = 0;
    let minNeg = Number.MAX_VALUE;
    let sum = 0;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            sum += Math.abs(matrix[i][j]);
            if(matrix[i][j] < 0){
                countNeg++;
            }
            //now also find the minNeg
            minNeg = Math.min(minNeg, Math.abs(matrix[i][j]));
        }
    }
    if(countNeg%2 === 0){
        //means neg is in even
        return sum;
    }
    return sum-(2*minNeg); //neg is in odd, so we need to first remove the neg num, and then add the neg num, i.e minus from sum
};
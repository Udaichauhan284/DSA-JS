/* 73. Set Matrix Zeroes
21 May 2025, Leetcode POTD, Medium
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/


//TC: O(n*m * (n+m) + (n*m)), TC: O(n^3)
var setZeroes = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    //now iterate over the martix , TC: O(n*m)
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matrix[i][j] === 0){
                markRow(i, m, matrix); //markRow elem -1, O(m)
                markCol(j, n, matrix); //markCol elem -1, O(n)
            }
        }
    }

    //now again iterate over the matrix, TC: O(n*m)
    for(let i=0; i<n; i++){ 
        for(let j=0; j<m; j++){
            if(matrix[i][j] === -1){
                matrix[i][j] = 0;
            }
        }
    }
};
function markRow(i, m, matrix){
    //need to mark row elem, so need to traverse over the col in that 
    //row
    for(let j=0; j<m; j++){
        if(matrix[i][j] !== 0){
            matrix[i][j] = -1;
        }
    }
}
function markCol(j, n, matrix){
    //need to mark col elem, so need to traverse over the row in that
    for(let i=0; i<n; i++){
        if(matrix[i][j] !== 0){
            matrix[i][j] = -1;
        }
    }
}







/*Better Method-In this we will take col and row 
seprate array, and when we see the zero for that
row and col we mark 1, and then again traverse 
if any row and col arr is 1, mark that one o
TC: O((n*m)+(n*m)) ~ O(2*(n*m)), SC: O(n+m)
*/
var setZeroes = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    //now take two array, row and col
    let row = Array(n).fill(0);
    let col = Array(m).fill(0);
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matrix[i][j] === 0){
                row[i] = 1; //mark 1, means need to change
                col[j] = 1; //mark 1, means need to change
            }
        }
    }

    //now again traverse over the matrix and check the row and col
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(row[i] === 1 || col[j] === 1){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};


/*In Optimal Method, we can use the row and col, which
we taking outer inside the matrix, row will be the col[0]
and for col will be row[0]. but in this matrix[0][0] will
be common one, so for that we will take the other variable 
col0, to keep that marking
TC: O((n*m) + (n*m)) ~ O(2 * (n*m)), SC: O(1)
*/
var setZeroes = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let col0 = 1;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matrix[i][j] === 0){
                //mark the ith row, means col=0, i will change
                matrix[i][0] = 0;
                //mark the jth col, means row=0, j will change
                if(j !== 0){
                    matrix[0][j] = 0;
                }else{
                    col0 = 0;
                }
            }
        }
    }

    //now mark 1 to n-1 and 1 to m-1 matrix with 0
    for(let i=1; i<n; i++){
        for(let j=1; j<m; j++){
            if(matrix[i][j] !== 0){
                if(matrix[i][0] === 0 || matrix[0][j] === 0){
                    matrix[i][j] = 0;
                }
            }
        }
    }

    //now need to chnage the uper row and left col
    if(matrix[0][0] === 0){
        for(let j=0; j<m; j++){
            matrix[0][j] = 0;
        }
    }

    if(col0 === 0){
        for(let i=0; i<n; i++){
            matrix[i][0] = 0;
        }
    }
    return matrix;
};
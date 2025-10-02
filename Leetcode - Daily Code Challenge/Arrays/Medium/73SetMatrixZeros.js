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




/*
=======> 02 Oct 2025 <=======
Go thorugh these explaination, these are good
*/

/*02 Oct 2025
Method 1, Brute Method, use of extra Row and col to 
maintain where i need to make the changes in matrix
TC: O(m*n + m*n) ~ O(2(m*n)) ~ O(m*n), SC: O(m+n)
*/
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    //now take row and col for maintain the flag
    let row = Array(m).fill(false);
    let col = Array(n).fill(false);

    //now traverse over the matrix O(m*n)
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j] === 0){
                //mark that ith and jth place true
                row[i] = true; //need to make the change
                col[j] = true;
            }
        }
    }

    //now traverse over again to make it zero using 
    //the row and col array
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(row[i] === true || col[j] === true){
                //mark that index 0
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;    
};


/*02 Oct 2025
Method 2: Optimal Method, use of first row and col
as a marker to mark the other elements zero in the matrix
first take two markers firstRowZero and firstColZero
these are for to mark that row and col zero if there
is zero in the first row and col, if yes make that zero
in later part.
TC: O(m*n), SC: O(1)
*/
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    //now mark the first row and col zero if there is zero in it
    //first check the row, so for that col will move
    for(let j=0; j<n; j++){
        if(matrix[0][j] === 0){
            firstRowZero = true;
            break;
        }
    }

    //now check the col, so for that row will move
    for(let i=0; i<m; i++){
        if(matrix[i][0] === 0){
            firstColZero = true;
            break;
        }
    }

    //Step 2: now use the first row and col as marker and traverse over the matrix and mark 0 in first row and col
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0; //col
                matrix[0][j] = 0; //row
            }
        }
    }

    //Step 3: now with the help of first row and col as marker make the zero in main matrix
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }

    //Step 4 and 5 mark the first row and col zero
    //if we have those two variable true
    if(firstRowZero){
        for(let j=0; j<n; j++){
            matrix[0][j] = 0;
        }
    }

    if(firstColZero){
        for(let i=0; i<m; i++){
            matrix[i][0] = 0;
        }
    }
    return matrix;
};
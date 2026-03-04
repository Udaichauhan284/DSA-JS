/* 1582. Special Positions In A Binary Matrix
04 March 2026, leetcode potd, easy

Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
*/

//TC: O(2(n*m)) ~ O(n*m), SC: O(1)
var numSpecial = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let rowCounts = Array(rows).fill(0);
    let colCounts = Array(cols).fill(0);

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(mat[i][j] === 1){
                rowCounts[i]++;
                colCounts[j]++;
            }
        }
    }

    let ans = 0;
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(mat[i][j] === 1){
                if(rowCounts[i] === 1 && colCounts[j] === 1){
                    ans++;
                }
            }
        }
    }
    return ans;
};
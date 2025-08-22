/* 3195. Find the Minimum Area to cover All ones 1
22 Aug 2025, Leetcode POTD, Medium

Input: grid = [[0,1,0],[1,0,1]]

Output: 6
*/

/*Find the 1 at the minRow and maxRow so this way
we can find the length and same goes for col
maxCol and maxCol where i can see the 1
TC: O(m*n), SC: O(1)
*/
var minimumArea = function(grid) {
    let m  = grid.length;
    let n = grid[0].length;
    let minRow = m; //this is top row where i see
    //the 1
    let maxRow = -1;
    let minCol = n;
    let maxCol = -1;

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === 1){
                minRow = Math.min(minRow, i);
                maxRow = Math.max(maxRow, i);

                minCol = Math.min(minCol, j);
                maxCol = Math.max(maxCol, j);
            }
        }
    }
    let length = maxRow - minRow + 1;
    let width = maxCol - minCol + 1;
    return length * width;
};
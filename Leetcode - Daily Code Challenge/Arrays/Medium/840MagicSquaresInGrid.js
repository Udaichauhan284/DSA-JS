/* 840 Magic Squares In Grid
09 August 2024, Leetcode POTD, Array, Set, Matrix 

A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.
Given a row x col grid of integers, how many 3 x 3 contiguous magic square subgrids are there?
Note: while a magic square can only contain numbers from 1 to 9, grid may contain numbers up to 15.

Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
Output: 1
*/

/*In method we know we need to find the 3*3 so run loop for 
rows and col till row-3 and cols-3 and this check for magic
square, for checking the distinct number use set, then find
the sum of row,col and diagonal and alternative diagonal
TC: O(n*m) for row-3 and col-3, O(1) for magic square
SC: O(3*3) set ~ O(1)
*/
var numMagicSquaresInside = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;
    for(let i=0; i<=(rows-3); i++){
        for(let j=0; j<=(cols-3); j++){
            if(isMagicSquare(grid,i,j)){
                count++;
            }
        }
    }
    return count;
    };
    function isMagicSquare(grid, r, c){
    let set = new Set(); //SC: O(3*3)~ O(1), for distinct 
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            let num = grid[r+i][c+j]; //0+0=0, 1+0=1
            if(num < 1 || num > 9 || set.has(num)){
                return false; // not distinct and not in 1-9
            }else{
                set.add(num);
            }
        }
    }

    //row sum
    let rSum = grid[r][c]+grid[r][c+1]+grid[r][c+2];
    //lets find out row sun and col sum
    for(let i=0; i<3; i++){
        if(grid[r+i][c]+grid[r+i][c+1]+grid[r+i][c+2] !== rSum){
            return false;
        }
        //now move col
        if(grid[r][c+i]+grid[r+1][c+i]+grid[r+2][c+i] !== rSum){
            return false;
        }
    }

    //diagonal sum
    if(grid[r][c]+grid[r+1][c+1]+grid[r+2][c+2] !== rSum){
        return false;
    }
    //alerative diagonal sum
    if(grid[r][c+2]+grid[r+1][c+1]+ grid[r+2][c] !== rSum){
        return false;
    }
    return true;
}
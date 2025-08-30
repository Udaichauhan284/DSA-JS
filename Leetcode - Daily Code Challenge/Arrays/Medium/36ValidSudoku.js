/*36.Valid Sudoku
30 Aug 2025, Leetcode POTD, Medium

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
*/


/*Approch1, we can validate through from rows and 
cols and box, for box we need to sr=0, er=sr+2
same for col and in that we check if we see that
elem or not
TC: O(9*9)+O(9*9)+O(9*9) ~ O(1)
SC: O(1)
*/
var isValidSudoku = function(board) {
    //validate through rows
    for(let row=0; row<9; row++){
        let uniqueElem = new Set();
        for(let col=0; col<9; col++){
            if(board[row][col] === '.') continue;
            if(uniqueElem.has(board[row][col])){
                return false;
            }
            uniqueElem.add(board[row][col]);
        }
    }

    //validate through cols
    for(let col=0; col<9; col++){
        let uniqueElem = new Set();
        for(let row=0; row<9; row++){
            if(board[row][col] === '.') continue;
            if(uniqueElem.has(board[row][col])){
                return false;
            }
            uniqueElem.add(board[row][col]);
        }
    }

    //validate through the box 3*3
    for(let sr=0; sr<9; sr+=3){
        let er = sr+2;
        for(let sc=0; sc<9; sc+=3){
            let ec = sc+2;
            let valid = checkBoxes(board,sr,er,sc,ec);
            if(!valid) return false;
        }
    }
    return true;
};
function checkBoxes(board,sr,er,sc,ec){
    let uniqueElem = new Set();
    for(let i=sr; i<=er; i++){
        for(let j=sc; j<=ec; j++){
            if(board[i][j] === '.') continue;
            if(uniqueElem.has(board[i][j])){
                return false;
            }
            uniqueElem.add(board[i][j]);
        }
    }
    return true;
}



/*Approach 2, we can form the string, where we find the 
elem, and push into set and later we see from same row
or col or box we get the same string, is yes we already see
that elem, return false
for box, in any 3*3 box, we can chekc i/3 and j/3 for any
indices in box we will get the same value for i and j
TC: O(9*9)~O(1), SC: O(1)
*/
var isValidSudoku = function(board) {
    let unique = new Set();
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(board[i][j] === '.') continue;
            let row = `${board[i][j]} at ROW ${i}`;
            let col = `${board[i][j]} at COL ${j}`;
            let box = `${board[i][j]} at BOX ${Math.floor(i/3)}-${Math.floor(j/3)}`

            if(unique.has(row) || unique.has(col) || unique.has(box)){
                return false;
            }
            //else, add in set
            unique.add(row);
            unique.add(col);
            unique.add(box);
        }
    }
    return true;
};
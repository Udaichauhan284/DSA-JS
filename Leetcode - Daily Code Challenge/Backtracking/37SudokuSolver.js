/*37. Sudoku Solver
31 Aug 2025, Leetcode POTD, HARD
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
*/

/*In this we need to use the Backtracking, at each cell
we need to Do, explore and undo, we need to write the
valid function where we check if we have seen in row
and col and in box, for box first we need to find the
subBoxRow and Col 3*M.F(row/3) and same goes for col
then in that box we need to find the currRow and currCol
for currRow subBOXRow+M.F(i/3) for col i%3
TC: O(9^emptyCell) in worst case O(9^9) ~ TC: O(81)
SC: O(1)
*/
var solveSudoku = function(board) {
    return solve(board);
};
const solve = (board) => {
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(board[i][j] !== '.') continue;

            //now start puting the digit
            for(let d=1; d<=9; d++){
                let strCh = d.toString();
                if(isValid(board,i,j,strCh)){
                    //if that elem is valid, put in board
                    board[i][j] = strCh; //DO
                    if(solve(board)) return true; //EXPLORE
                    board[i][j] = '.'; //UNDO
                }
            }
            return false;
        }
    }
    return true;
}
const isValid = (board,row,col,char) => {
    let subBoxRow = 3*Math.floor(row/3);
    let subBoxCol = 3*Math.floor(col/3);
    //now iterate over the 9 digits
    for(let i=0; i<9; i++){
        //iterate over the changing col
        if(board[row][i] === char) return false;

        //iterate over the chaging row
        if(board[i][col] === char) return false;

        //now check in row and col in box
        let currRow = subBoxRow+Math.floor(i / 3);
        let currCol = subBoxCol+Math.floor(i % 3);
        if(board[currRow][currCol] === char) return false;
    }
    return true;
}
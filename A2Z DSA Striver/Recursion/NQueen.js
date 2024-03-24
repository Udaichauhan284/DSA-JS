/* 51. N Queens
n=4
o/p [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

1.first create a board of nxn and fill with '.',
2.i will call recursion function solve(board,row,result)
3.isValid function to check, kee we put Q in that rowcol box or not
*/
//TC O(n!), SC O(n)
const solveQueens = function(n){
  if(n===0){
    return [];
  }

  //2d array fill wilh '.'
  let board = Array.from(Array(n), () => Array(n).fill("."));
  let result = [];
  solve(board,0,result);
  return result;
}

function solve(board,row,result){
  if(row === board.length){
    result.push([...board].map(el => el.join("")));
    return;
  }

  //main code now go row and col wise
  for(let i=0; i<board.length; i++){
    if(isValid(board,row,i)){ //i col
      board[row][i] = 'Q';
      solve(board,row+1,result);
      board[row][i] = '.';
    }
  }
}

function isValid(board, row, col){
  //look for up, kee uper koi Q toh nhi
  for(let i=row; i>=row; i--){
    if(board[i][col] === 'Q'){
      return false;
    }
  }

  //look for left diagonal - in this both row and col is decrease
  for(let i=row, j=col; i>=0 && j>=0; i--,j--){
    if(board[i][j] === 'Q'){
      return false;
    }
  }

  //look for right diagonal - in this row is decreaseing and col is increasing
  for(let i=row, j=col; i>=0 && j<board.length; i--, j++){
    if(board[i][j] === 'Q'){
      return false;
    }
  } 
  return true;
}
console.log(solveQueens(4));

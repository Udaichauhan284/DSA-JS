/* 79. Word Search
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCCED"
o/p true;

this solve using backtracking and recursiobn - go direction top(1,0), bottom (-1,0), left (0,-1), right (0,1).
 if you visted any char mark that vistsred "$".
*/
var exist = function(board, word) {
  let m = board.length;
  let n = board[0].length;

  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
      if(board[i][j] === word[0] && find(board,i,j, 0, word, m ,n)){
        return true;
      }
    }
  }
  return false;
};

function find(board,i,j,idx,word,m,n){
if(idx === word.length){
  return true;
}
if(i<0 || j<0 || i>=m || j>=n || board[i][j] === '$'){
  return false; //board[i][j] === '$' means visted
}

if(board[i][j] !== word[idx]){
  return false;
}
                  //top.bottom right. left
let directions = [[1,0],[-1,0],[0,1],[0,-1]];
let temp = board[i][j];
board[i][j] = '$'; //making char in board visited

for(let dir of directions){
  let new_i = i+dir[0];
  let new_j = j+dir[1];

  if(find(board,new_i, new_j, idx+1, word, m, n)){
    return true;
  }
}
board[i][j] = temp;
return false;
}
let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word = "SEE";
console.log(exist(board,word));
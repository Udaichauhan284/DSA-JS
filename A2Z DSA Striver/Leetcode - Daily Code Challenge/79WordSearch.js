/* 79. Word Search
find the word in the baord
this question i also solve in Recursion backtracking section.
this is solve by backtraking and recusion , we have to move in 4 direction top [1,0], bottom [-1,0], left : [0,-1] right [0,1]
TC : O(m*n*4^l) 4 is for direction and l is for length of word.
*/
const exist = function(board,word){
  let m = board.length;
  let n = board[0].length;
  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
      if(board[i][j] === word[0] && find(board,word,i,j,0,m,n)){
        return true;
      }
    }
  }
  return false;
}
function find(board,word,idx,i,j,m,n){
  //base condition when idx(moving index of word) will equal to word.length return true
  if(idx === word.length){
    return true;
  }

  //fasle conditon, board[i][j] === "$" measn visted.
  if(i<0 || j<0 || i>=m || j>=n || board[i][j] === "$"){
    return false;
  }
  
  if(board[i][j] !== word[idx]){
    return false;
  }

  //main code
  let direction = [[1,0],[-1,0],[0,1],[0,-1]];
  let temp = board[i][j];
  board[i][j] = "$"; //marking visted.
  //for loop for moving in direction
  for(let dir of direction){
    let newI = i+dir[0]; //moving in next direction from that old one
    let newJ = j+dir[1];

    if(find(board,word,idx+1,newI,newJ,m,n)){
      return true;
    }
  }
  //out of for loop, change the visted, backtraking
  board[i][j] = temp;
  return false;
}
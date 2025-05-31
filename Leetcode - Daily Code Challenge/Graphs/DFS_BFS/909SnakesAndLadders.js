/* 909.Snakes and Ladders

*/

var snakesAndLadders = function(board) {
    let len = board.length;
    let visited = Array.from({length: len}, () => Array(len).fill(false));
    let queue = [];
    visited[len - 1][0] = true;
    queue.push(1);
    let steps = 0;
  
    while (queue.length > 0) {
      let size = queue.length;
      while (size--) {
        let x = queue.shift();
        if (x === len * len) return steps;
  
        for (let k = 1; k <= 6; k++) {
          if (x + k > len * len) break;
  
          let [r, c] = getCoord(x + k, len);
          if (!visited[r][c]) {
            visited[r][c] = true;
            if (board[r][c] === -1) {
              queue.push(x + k);
            } else {
              queue.push(board[r][c]);
            }
          }
        }
      }
      steps++;
    }
  
    return -1;
  };
  
  function getCoord(num, len) {
    let row = len - 1 - Math.floor((num - 1) / len);
    let col = (num - 1) % len;
    if ((len - 1 - row) % 2 === 1) {
      col = len - 1 - col;
    }
    return [row, col];
  }
/* 773 Sliding Puzzle
25 Nov 2024, Leetcode POTD, Array, Matrix, BFS, String, Level Order

Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
*/

//Use of BFS, we need to find the mini level/moves
//to change it from start to target.
//TC: for one position we have 6 option => O(6!)~O(1)
//SC: O(6!)~O(1)
var slidingPuzzle = function (board) {
    let start= "";
    let row= board.length;
    let col = board[0].length;
    let target= "123450";

    //now change matrix ot string, easy to use BFS
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            start += String(board[i][j]);
        }
    }

    let queue= [];
    queue.push(start); //push the initial one
    let visited= new Set();
    visited.add(start);

    //now take index to whom each index will swap
    const map = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4]
    }

    let level = 0;
    while (queue.length > 0) {
        let len = queue.length;
        while (len--) {
            let curr = queue.shift();
            //first check curr with target
            if (curr === target) {
                return level;
            }

            //find the index of zero
            let idxOfZero = curr.indexOf('0');
            //now check that index, to who it can swap
            for (let swapIdx of map[idxOfZero]) {
                let newState = curr.split(''); //arr
                //now swap it
                [newState[idxOfZero], newState[swapIdx]] = [newState[swapIdx], newState[idxOfZero]];
                //now arr to string
                newState = newState.join('');
                if (!visited.has(newState)) {
                    queue.push(newState);
                    visited.add(newState);
                }
            }
        }
        level++;
    }
    return -1;
};
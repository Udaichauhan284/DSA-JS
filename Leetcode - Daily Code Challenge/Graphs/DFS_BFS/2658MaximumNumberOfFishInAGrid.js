/* 2658. Maximum Number of FIsh in A Grid
28 Jan 25, Leetcode POTD, Array, BFS, DFS, Grid

Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
Output: 7
Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and collect 4 fish.
*/


/*In this, we can use BFS, for every fish cell, we hit the
bfs, and find the fishCount and return it.
TC: O(n*m), SC: O(n*m) 
*/
var findMaxFish = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let maxFish = 0;
    for(let row=0; row<n; row++){
        for(let col=0; col<m; col++){
            if(grid[row][col] > 0){
                maxFish = Math.max(maxFish, BFS(row,col,grid,m,n));
            }
        }
    }
    return maxFish;
};
function BFS(row,col,grid,m,n){
    let directions = [[1,0],[-1,0],[0,1],[0,-1]];
    //in BFS we need to take a queue
    let fishCount = grid[row][col]; //currOne fihs count
    grid[row][col] = 0; //mark currOne zero
    let queue = [];
    queue.push([row,col]); //push the currOne in queue

    while(queue.length > 0){
        let [currRow, currCol] = queue.shift();

        //now we need to move into the direction
        for(let [dx,dy] of directions){
            let newRow = dx+currRow;
            let newCol = dy+currCol;

            if(newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && grid[newRow][newCol] > 0){
                fishCount += grid[newRow][newCol];
                queue.push([newRow, newCol]);
                grid[newRow][newCol] = 0;
            }
        }
    }
    return fishCount;
}


/*In Method2, we can also use the DFS
TC: O(n*m), SC: O(n*m)
*/
var findMaxFish = function(grid) {
    let n = grid.length;
    let m = grid[0].length;

    let maxFish = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] > 0){
                maxFish = Math.max(maxFish, DFS(i,j,grid,n,m));
            }
        }
    }
    return maxFish;
};
function DFS(row,col,grid,n,m){
    //base case
    if(row < 0 || row >= n || col < 0 || col >= m || grid[row][col] === 0){
        return 0; // nothin found, return
    }

    let directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let fishCount = grid[row][col]; //take the currOne
    grid[row][col] = 0; //mark currOne 0;

    for(let [dx,dy] of directions){
        let newRow = dx+row;
        let newCol = dy+col;

        fishCount += DFS(newRow, newCol, grid, n,m);
    }
    return fishCount;
}
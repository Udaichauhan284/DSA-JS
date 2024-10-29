/* 2684 Maximum Number of Moves in a Grid
29 Oct 2024, Leetcode POTD, BFS and DFS
Input: grid = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]
Output: 3
Explanation: We can start at the cell (0, 0) and make the following moves:
- (0, 0) -> (0, 1).
- (0, 1) -> (1, 2).
- (1, 2) -> (2, 3).
It can be shown that it is the maximum number of moves that can be made.
*/

/*Use of BFS method 
TC: O(n*m), SC: O(n*m)
*/
var maxMoves = function(grid) {
    let que = [];
    let n = grid.length;
    let m = grid[0].length;
    let vis = Array.from({length: n}, () => Array(m).fill(0));
    let dir = [-1, 0, 1];
    let maxMoves = 0;
    for(let i=0; i<n; i++){
        vis[i][0] = 1;
        //need to push the first col value 
        que.push([i,0,0]); //row, col, count 
    }
    while(que.length > 0){
        let len = que.length;
        while(len--){
            let [row, col, count] = que.shift();
            maxMoves = Math.max(maxMoves, count);
            for(let d of dir){
                let newRow = row + d;
                let newCol = col + 1;

                if(newRow >=0 && newCol >= 0 && newRow < n && newCol < m && grid[row][col] < grid[newRow][newCol] && !vis[newRow][newCol]){
                    vis[newRow][newCol] = 1;
                    que.push([newRow, newCol, count+1]);
                }
            }
        }
    }
    return maxMoves;
};

/*Use of DFS with DP array memoization, only row and col is changing
TC: O(n*m), SC: O(n*m)
*/
const maxMoves = (grid) => {
    let n = grid.length;
    let m = grid[0].length;
    let dp = Array.from({length: n}, () => Array(m).fill(-1));
    let result = 0;

    for(let i=0; i<n; i++){
        result = Math.max(result, dfs(i, 0, grid,n,m,dp));
    }
    return result;
}

function dfs(row, col, grid,n,m, dp){
    let dir = [-1,0,1]; //row will change in these direction
    if(dp[row][col] !== -1){
        return dp[row][col];
    }

    let maxMove = 0;
    for(let d of dir){
        let newRow = row+d;
        let newCol = col+1;
        if(newRow >=0 && newCol >= 0 && newRow < n && newCol < m && grid[row][col] < grid[newRow][newCol]){
            maxMove = Math.max(maxMove, 1+dfs(newRow, newCol, grid,n,m, dp));
        }
    }
    dp[row][col] = maxMove;
    return dp[row][col];
}
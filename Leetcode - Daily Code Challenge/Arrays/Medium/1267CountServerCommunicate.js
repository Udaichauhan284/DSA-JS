/* 1267. Count Server Communicate
23 Jan 25, Leetcode POTD, Array, Grid

Input: grid = [[1,0],[1,1]]
Output: 3
Explanation: All three servers can communicate with at least one other server.
*/

/*In Brute Method, we do iterate over the row and 
col, when i see the 1, i will check for nextCol
and in nextCol, if there is one, i mark the
canCommuincate boolean true and break, same
i will do for row.
TC: O(n*m)*(n+m), SC: O(1)
*/
var countServers = function(grid) {
    let n = grid.length;
    let m = grid[0].length;

    let serverCount = 0;
    //now move over the grid
    for(let row=0; row<n; row++){
        for(let col=0; col<m; col++){
            if(grid[row][col] === 1){

                //now i iterarte over the next col
                let canCommunicate = false;
                for(let nextCol=0; nextCol<m; nextCol++){
                    if(nextCol !== col && grid[row][nextCol] === 1){
                        canCommunicate = true;
                        break;
                    }
                }

                if(canCommunicate){
                    serverCount++;
                }else{
                    
                    //now look for next row
                    for(let nextRow = 0; nextRow < n; nextRow++){
                        if(nextRow !== row && grid[nextRow][col] === 1){
                            canCommunicate = true;
                            break;
                        }
                    }
                    if(canCommunicate){
                        serverCount++;
                    }
                }
            }
        }
    }
    return serverCount;
};



/*In this method, we will traverse first and count the 1 in each row and col
in grid, and then again traverse over the grid and see if grid[row][col] === 1
and countofRow and countOfCol > 1, there is other computer to commincate
increase the count.
TC: O(n*m + n*m) ~ O(n*m), SC: O(n+m)
*/
var countServers = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let serverCount = 0;

    let indexOfOnesRow = Array(n).fill(0);
    let indexOfOnesCol = Array(m).fill(0);

    //now traverse over the row and col
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] === 1){
                indexOfOnesRow[i] += 1;
                indexOfOnesCol[j] += 1;
            }
        }
    }

    //now traverse over the grid
    for(let row=0; row<n; row++){
        for(let col=0; col<m; col++){
            if(grid[row][col] === 1 && (indexOfOnesRow[row] > 1 || indexOfOnesCol[col] > 1)){
                serverCount++;
            }
        }
    }

    return serverCount;
};
/*3459. Length of Longest V-Shaped Diagonal Segment
27 August 2025, Leetcode POTD, HARD

Input: grid = [[2,2,1,2,2],[2,0,2,2,0],[2,0,1,1,0],[1,0,2,2,2],[2,0,0,2,2]]

Output: 5

The longest V-shaped diagonal segment has a length of 5 and follows these coordinates: (0,2) → (1,3) → (2,4), takes a 90-degree clockwise turn at (2,4), and continues as (3,3) → (4,2).
*/


/*In this we moving by 90 direction, so we maintain the
direction array, by 90 degree direction from prev one
when we see the 1, we will used the solve fucntion
and pass i,j,d(direction) in which we are moving
and canturn variable, means direction can turn or not
and val==2, so that next one follow the pattern
*/
const directions = [[1,1],[1,-1],[-1,-1],[-1,1]];
var lenOfVDiagonal = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let result = 0;
    //now need to iterate over teh grid
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === 1){
                //now move in the direction
                for(let d=0; d<=3; d++){
                    result = Math.max(result, 1+solve(i,j,d,grid,true,2,m,n));
                }
            }
        }
    }
    return result;
};
function solve(i,j,d,grid,canTurn,val,m,n){
    //now evalute the new i and j
    let newI = i+directions[d][0]; //we take direction, we want
    //move in that direction only
    let newJ = j+directions[d][1];
    //now check the new i and j
    if(newI < 0 || newI >= m || newJ < 0 || newJ >= n || grid[newI][newJ] !== val){
        return 0; //we cant move forward;
    }
    let result = 0;
    let keepMoving = 1+solve(newI,newJ,d,grid,canTurn,(val===2)?0:2, m,n);
    result = Math.max(result, keepMoving);

    //now check we can turn or not, we only turn one time
    if(canTurn){
        let turnMoving = 1+solve(newI,newJ,(d+1)%4,grid,false,(val===2)?0:2,m,n);
        result = Math.max(result,turnMoving);
    }
    return result;
}
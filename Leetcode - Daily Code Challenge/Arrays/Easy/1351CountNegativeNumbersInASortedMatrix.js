var countNegatives = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let result = 0;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(grid[i][j] < 0){
                result++;
            }
        }
    }
    return result;
};
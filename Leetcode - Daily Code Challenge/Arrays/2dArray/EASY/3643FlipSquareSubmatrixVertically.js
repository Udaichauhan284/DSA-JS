var reverseSubmatrix = function(grid, x, y, k) {

    let startRow = x;
    let endRow = x + k - 1;

    let startCol = y;
    let endCol = y + k - 1;

    // Swap rows from top and bottom
    while (startRow < endRow) {

        for (let col = startCol; col <= endCol; col++) {

            // Swap elements
            let temp = grid[startRow][col];
            grid[startRow][col] = grid[endRow][col];
            grid[endRow][col] = temp;
        }

        startRow++;
        endRow--;
    }

    return grid;
};

/* 1765. Map of Highest Peak
22 Jan 25, Leetcode POTD, BFS, that too Multi Source BFS

Input: isWater = [[0,1],[0,0]]
Output: [[1,0],[2,1]]
Explanation: The image shows the assigned heights of each cell.
The blue cell is the water cell, and the green cells are the land cells.
*/


/*In this, where is land which denotes 1, at that place
we need to place 0, andin adjacent cells, we need to add height
of 1, so that abs difference is 1. so in this we will start from
0 cell, and use multi source bfs
TC: O(n*m), SC: O(n*m)
*/
var highestPeak = function(isWater) {
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let rows = isWater.length;
    let cols = isWater[0].length;

    // Initialize the height matrix and queue
    let height = Array.from({ length: rows }, () => Array(cols).fill(-1));
    let queue = [];

    // Push all water cells into the queue and set their height to 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    // Pointer-based queue implementation to avoid TLE
    let front = 0;
    while (front < queue.length) {
        let [row, col] = queue[front];
        front++;

        for (let [dx, dy] of directions) {
            let newRow = row + dx;
            let newCol = col + dy;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && height[newRow][newCol] === -1) {
                height[newRow][newCol] = height[row][col] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }

    return height;
};
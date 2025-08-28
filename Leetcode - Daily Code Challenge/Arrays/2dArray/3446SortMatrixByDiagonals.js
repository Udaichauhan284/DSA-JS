/*3446. Sort Matrix by Diagonals
29 Aug 2025, Leetcode POTD, Medium

Input: grid = [[1,7,3],[9,8,2],[4,5,6]]

Output: [[8,2,3],[9,6,7],[4,5,1]]
*/

var sortMatrix = function (grid) {
    const n = grid.length;

    for (let i = 0; i < n; i++) {
        let tmp = [];
        for (let j = 0; i + j < n; j++) {
            tmp.push(grid[i + j][j]);
        }
        tmp.sort((a, b) => b - a);
        for (let j = 0; i + j < n; j++) {
            grid[i + j][j] = tmp[j];
        }
    }

    for (let j = 1; j < n; j++) {
        let tmp = [];
        for (let i = 0; j + i < n; i++) {
            tmp.push(grid[i][j + i]);
        }
        tmp.sort((a, b) => a - b);
        for (let i = 0; j + i < n; i++) {
            grid[i][j + i] = tmp[i];
        }
    }

    return grid;
};
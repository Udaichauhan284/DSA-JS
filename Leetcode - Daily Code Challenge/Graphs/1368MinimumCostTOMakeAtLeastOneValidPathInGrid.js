/* 1368. Minimum COst to Make at Least One Valid Path in a Grid
18 Jan 2024, Leetcode POTD, Graph, Backtracking, DFS
Input: grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]
Output: 3
Explanation: You will start at point (0, 0).
The path to (3, 3) is as follows. (0, 0) --> (0, 1) --> (0, 2) --> (0, 3) change the arrow to down with cost = 1 --> (1, 3) --> (1, 2) --> (1, 1) --> (1, 0) change the arrow to down with cost = 1 --> (2, 0) --> (2, 1) --> (2, 2) --> (2, 3) change the arrow to down with cost = 1 --> (3, 3)
The total cost = 3.
*/

/*Use of Backtracking, find the minCost, trying all path
T.C : O(4^(m*n))
S.C : O(m*n)
*/
var minCost = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    // Initialize visited array
    let visited = Array.from({ length: m }, () => Array(n).fill(false));

    return dfs(0, 0, grid, visited, 0, m, n);
};

function dfs(i, j, grid, visited, cost, m, n) {
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // right, left, down, up

    // Base case: Reached bottom-right corner
    if (i === m - 1 && j === n - 1) {
        return cost;
    }

    visited[i][j] = true;
    let minCost = Infinity;

    for (let dirIndex = 0; dirIndex < 4; dirIndex++) {
        let newI = i + directions[dirIndex][0];
        let newJ = j + directions[dirIndex][1];

        // Validity check for the new cell
        if (
            newI >= 0 &&
            newI < m &&
            newJ >= 0 &&
            newJ < n &&
            !visited[newI][newJ]
        ) {
            // Calculate the cost for the next step
            let nextCost = cost + (grid[i][j] - 1 !== dirIndex ? 1 : 0);

            // Recursive call for DFS
            minCost = Math.min(
                minCost,
                dfs(newI, newJ, grid, visited, nextCost, m, n)
            );
        }
    }

    visited[i][j] = false; // Backtrack
    return minCost;
}


/*Use of DFS
//T.C : O((m*n) * log(m*n))
//S.C : O(m*n)
*/
var minCost = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    const directions = [
        [0, 1],  // right
        [0, -1], // left
        [1, 0],  // down
        [-1, 0], // up
    ];

    const minHeap = new MinPriorityQueue({ priority: (item) => item[0] }); // Min-Heap for [cost, row, col]
    const result = Array.from({ length: m }, () => Array(n).fill(Infinity)); // Store minimum cost to reach each cell

    minHeap.enqueue([0, 0, 0]); // [cost, row, col]
    result[0][0] = 0;

    while (!minHeap.isEmpty()) {
        const [currCost, i, j] = minHeap.dequeue().element;

        // If the current cost is greater than the already calculated cost, skip this cell
        if (currCost > result[i][j]) continue;

        // Explore all possible directions
        for (let dirIndex = 0; dirIndex < 4; dirIndex++) {
            const newI = i + directions[dirIndex][0];
            const newJ = j + directions[dirIndex][1];

            if (newI >= 0 && newI < m && newJ >= 0 && newJ < n) {
                const gridDir = grid[i][j] - 1; // Direction from grid value (1-indexed to 0-indexed)
                const dirCost = gridDir === dirIndex ? 0 : 1; // 0 if moving in the same direction, else 1

                const newCost = currCost + dirCost;

                // If the new cost is smaller, update the cost and push to the heap
                if (newCost < result[newI][newJ]) {
                    result[newI][newJ] = newCost;
                    minHeap.enqueue([newCost, newI, newJ]);
                }
            }
        }
    }

    return result[m - 1][n - 1]; // Minimum cost to reach the bottom-right corner
};
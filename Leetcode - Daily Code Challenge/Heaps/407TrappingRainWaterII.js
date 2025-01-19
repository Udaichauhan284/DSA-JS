/*407 Trapping Rain Water II
19 Jan 25, Leetcode POTD, Heap, MinHeap

Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
Output: 4
Explanation: After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4.
*/

/*In this we can use the minHeap and dfs, as we need
to move in all 4 direction, and also in this
we need to mark visited the boundry cell into visted
T.C : O(m*n log(m*n))
S.C : O(m*n)
*/
var trapRainWater = function(heightMap) {
    let m = heightMap.length;
    if (m === 0) return 0;
    let n = heightMap[0].length;

    let visited = Array.from({ length: m }, () => Array(n).fill(false));
    let boundaryCells = new MinPriorityQueue({ priority: (cell) => cell.height });

    // Mark the boundary cells as visited and add them to the priority queue
    for (let row = 0; row < m; row++) {
        boundaryCells.enqueue({ height: heightMap[row][0], row, col: 0 });
        visited[row][0] = true;

        boundaryCells.enqueue({ height: heightMap[row][n - 1], row, col: n - 1 });
        visited[row][n - 1] = true;
    }

    for (let col = 0; col < n; col++) {
        boundaryCells.enqueue({ height: heightMap[0][col], row: 0, col });
        visited[0][col] = true;

        boundaryCells.enqueue({ height: heightMap[m - 1][col], row: m - 1, col });
        visited[m - 1][col] = true;
    }

    let water = 0;
    let directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    // Process the priority queue
    while (!boundaryCells.isEmpty()) {
        let { height, row, col } = boundaryCells.dequeue().element;

        // Check all directions
        for (let [dx, dy] of directions) {
            let newRow = row + dx;
            let newCol = col + dy;

            // If the new cell is within bounds and not visited
            if (
                newRow >= 0 && newRow < m &&
                newCol >= 0 && newCol < n &&
                !visited[newRow][newCol]
            ) {
                visited[newRow][newCol] = true;

                // Calculate trapped water
                water += Math.max(0, height - heightMap[newRow][newCol]);

                // Enqueue the cell with the maximum of current height and the cell's height
                boundaryCells.enqueue({
                    height: Math.max(height, heightMap[newRow][newCol]),
                    row: newRow,
                    col: newCol
                });
            }
        }
    }

    return water;
};
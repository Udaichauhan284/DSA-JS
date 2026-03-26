/* 3548. Equal Sum Grid Partition II
26 March 2026, leetcode potd
*/

var canPartitionGrid = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let total = 0;

    // Calculate total sum
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            total += grid[i][j];
        }
    }

    // Helper function for horizontal cuts
    function checkHorCuts(grid) {
        const m = grid.length;
        const n = grid[0].length;

        const st = new Set();
        let top = 0;

        for (let i = 0; i <= m - 2; i++) {

            for (let j = 0; j < n; j++) {
                st.add(grid[i][j]);
                top += grid[i][j];
            }

            let bottom = total - top;
            let diff = top - bottom;

            // Perfect split
            if (diff === 0) return true;

            // Edge cases (corners / edges)
            if (diff === grid[0][0]) return true;
            if (diff === grid[0][n - 1]) return true;
            if (diff === grid[i][0]) return true;

            // General case using set
            if (i > 0 && n > 1 && st.has(diff)) {
                return true;
            }
        }

        return false;
    }

    // 1️⃣ Horizontal cuts
    if (checkHorCuts(grid)) return true;

    // 2️⃣ Reverse rows and check again
    grid.reverse();
    if (checkHorCuts(grid)) return true;

    // Restore original grid
    grid.reverse();

    // 3️⃣ Transpose grid (to reuse horizontal logic for vertical)
    const transposeGrid = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            transposeGrid[j][i] = grid[i][j];
        }
    }

    // 4️⃣ Check vertical cuts (via transpose)
    if (checkHorCuts(transposeGrid)) return true;

    // 5️⃣ Reverse transpose and check again
    transposeGrid.reverse();
    if (checkHorCuts(transposeGrid)) return true;

    return false;
};

/* 2536. Increment Submatrices by One
14 Nov 2025, leetcode potd, medium
Input: n = 3, queries = [[1,1,2,2],[0,0,1,1]]
Output: [[1,1,0],[1,2,1],[0,1,1]]
Explanation: The diagram above shows the initial matrix, the matrix after the first query, and the matrix after the second query.
- In the first query, we add 1 to every element in the submatrix with the top left corner (1, 1) and bottom right corner (2, 2).
- In the second query, we add 1 to every element in the submatrix with the top left corner (0, 0) and bottom right corner (1, 1).
*/

var rangeAddQueries = function(n, queries) {
    // Step 0: Create n x n matrix filled with 0
    const diff = Array.from({ length: n }, () => Array(n).fill(0));

    // Step 1: Process each query using 1D difference array logic on each row
    for (const q of queries) {
        const [row1, col1, row2, col2] = q;

        for (let i = row1; i <= row2; i++) {
            diff[i][col1] += 1;

            if (col2 + 1 < n) {
                diff[i][col2 + 1] -= 1;
            }
        }
    }

    // Step 2: Prefix sum row-wise
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            diff[i][j] += diff[i][j - 1];
        }
    }

    return diff;
};
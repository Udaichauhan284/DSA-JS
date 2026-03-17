var largestSubmatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let result = 0;

    for (let row = 0; row < m; row++) {

        // Step 1: Build heights (like histogram)
        for (let col = 0; col < n; col++) {

            if (matrix[row][col] === 1 && row > 0) {
                matrix[row][col] += matrix[row - 1][col];
            }
        }

        // Step 2: Sort current row in descending order
        let currRow = [...matrix[row]]; // copy to avoid modifying original
        currRow.sort((a, b) => b - a);

        // Step 3: Calculate max area
        for (let col = 0; col < n; col++) {

            let base = col + 1;     // width
            let height = currRow[col];

            result = Math.max(result, base * height);
        }
    }

    return result;
};

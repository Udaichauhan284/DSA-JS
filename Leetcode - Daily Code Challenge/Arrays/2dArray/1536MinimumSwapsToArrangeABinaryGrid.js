var minSwaps = function(grid) {
    const n = grid.length;

    // endZeros[i] = number of trailing zeros in row i
    const endZeros = new Array(n).fill(0);

    // Count trailing zeros for each row
    for (let i = 0; i < n; i++) {
        let j = n - 1;
        let count = 0;

        while (j >= 0 && grid[i][j] === 0) {
            count++;
            j--;
        }

        endZeros[i] = count;
    }

    let steps = 0;

    // Try to place correct row at each position
    for (let i = 0; i < n; i++) {
        const need = n - i - 1;

        let j = i;

        // Find row that satisfies requirement
        while (j < n && endZeros[j] < need) {
            j++;
        }

        if (j === n) {
            return -1;
        }

        steps += j - i;

        // Bubble the found row up to position i
        while (j > i) {
            [endZeros[j], endZeros[j - 1]] = [endZeros[j - 1], endZeros[j]];
            j--;
        }
    }

    return steps;
};

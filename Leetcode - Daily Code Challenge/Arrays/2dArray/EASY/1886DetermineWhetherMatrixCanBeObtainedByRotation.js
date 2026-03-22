var findRotation = function(mat, target) {
    const n = mat.length;

    // Rotate matrix 90° clockwise
    function rotate(mat) {
        // Step 1: Transpose
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                let temp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = temp;
            }
        }

        // Step 2: Reverse each row
        for (let i = 0; i < n; i++) {
            mat[i].reverse();
        }
    }

    // Check if two matrices are equal
    function isEqual(mat, target) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] !== target[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Try all 4 rotations
    for (let c = 0; c < 4; c++) {
        if (isEqual(mat, target)) return true;
        rotate(mat);
    }

    return false;
};

/*498. Diagonal Traverse
25 Aug 2025, Leetcode POTD
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
*/

var findDiagonalOrder = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let mp = new Map();
    let result = [];

    // Fill the map using [i + j]
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let key = i + j;
            if (!mp.has(key)) {
                mp.set(key, []);
            }
            mp.get(key).push(mat[i][j]);
        }
    }

    let flip = true;
    for (let [key, arr] of mp.entries()) {
        if (flip) {
            arr.reverse();
        }
        for (let num of arr) {
            result.push(num);
        }
        flip = !flip;
    }

    return result;
};
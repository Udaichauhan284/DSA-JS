/*3363. Find The Maximum Number of Fruits Collected
07 August 2025, Leetcode POTD, HARD

Input: fruits = [[1,2,3,4],[5,6,8,7],[9,10,11,12],[13,14,15,16]]

Output: 100
*/

function maxCollectedFruits(fruits) {
    const n = fruits.length;
    const t = Array.from({ length: n }, () => Array(n).fill(0));

    // Diagonal elements collected by child1
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += fruits[i][i];
    }

    // Nullify cells that can't be visited by child2 and child3
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < j && i + j < n - 1) {
                t[i][j] = 0;
            } else if (i > j && i + j < n - 1) {
                t[i][j] = 0;
            } else {
                t[i][j] = fruits[i][j];
            }
        }
    }

    // Child2 collects fruits (i < j) → upper triangle right
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let fromLeftDiagonal = i - 1 >= 0 && j - 1 >= 0 ? t[i - 1][j - 1] : 0;
            let fromAbove = i - 1 >= 0 ? t[i - 1][j] : 0;
            let fromRightDiagonal = i - 1 >= 0 && j + 1 < n ? t[i - 1][j + 1] : 0;

            t[i][j] += Math.max(fromLeftDiagonal, fromAbove, fromRightDiagonal);
        }
    }

    // Child3 collects fruits (i > j) → lower triangle left
    for (let j = 1; j < n; j++) {
        for (let i = j + 1; i < n; i++) {
            let fromTopLeft = i - 1 >= 0 && j - 1 >= 0 ? t[i - 1][j - 1] : 0;
            let fromLeft = j - 1 >= 0 ? t[i][j - 1] : 0;
            let fromBottomLeft = i + 1 < n && j - 1 >= 0 ? t[i + 1][j - 1] : 0;

            t[i][j] += Math.max(fromTopLeft, fromLeft, fromBottomLeft);
        }
    }

    // Add values collected by child2 and child3 just before bottom-right corners
    return result + t[n - 2][n - 1] + t[n - 1][n - 2];
}
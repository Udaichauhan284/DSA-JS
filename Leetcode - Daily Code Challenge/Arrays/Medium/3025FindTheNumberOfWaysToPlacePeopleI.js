/*3025. Find the Number of Ways to place People I
02 Sep 2025, leetcode POTD

Input: points = [[1,1],[2,2],[3,3]]

Output: 0
*/

function numberOfPairs(points) {
    let n = points.length;

    // Sort: x ascending, if x same then sort y descending
    points.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]; // y descending
        }
        return a[0] - b[0]; // x ascending
    });

    let result = 0;

    for (let i = 0; i < n; i++) {
        let [x1, y1] = points[i]; // upper left
        let bestY = -Infinity;

        for (let j = i + 1; j < n; j++) {
            let [x2, y2] = points[j]; // lower right

            // Condition: (x2, y2) must not be above (x1, y1)
            if (y2 > y1) continue;

            if (y2 > bestY) {
                result++;
                bestY = y2;
            }
        }
    }

    return result;
}

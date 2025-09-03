/*3027. Find the Number of Ways to place people II
03 Sept 2025, leetcode POTD MEDIUM

Input: points = [[1,1],[2,2],[3,3]]
Output: 0
Explanation: There is no way to place Alice and Bob such that Alice can build a fence with Alice's position as the upper left corner and Bob's position as the lower right corner. Hence we return 0. 
*/

function numberOfPairs(points) {
    const n = points.length;

    // Sort: x ascending, if x same then sort y descending
    points.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]; // y descending
        }
        return a[0] - b[0]; // x ascending
    });

    let result = 0;

    for (let i = 0; i < n; i++) {
        const [x1, y1] = points[i];  // upper left

        let bestY = -Infinity; // same as INT_MIN in C++

        for (let j = i + 1; j < n; j++) {
            const [x2, y2] = points[j]; // lower right

            // Condition: (x2, y2) must not be above (x1, y1)
            if (y2 > y1) {
                continue;
            }

            if (y2 > bestY) {
                result++;
                bestY = y2;
            }
        }
    }

    return result;
}

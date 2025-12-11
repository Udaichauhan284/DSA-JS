/* 3531. Count Covered Buildings
11 Dec 2025, leetcode potd, medium
Input: n = 3, buildings = [[1,2],[2,2],[3,2],[2,1],[2,3]]

Output: 1

Explanation:

Only building [2,2] is covered as it has at least one building:
above ([1,2])
below ([3,2])
left ([2,1])
right ([2,3])
Thus, the count of covered buildings is 1.

*/

function countCoveredBuildings(n, buildings) {
    const yToMinMaxX = new Map();
    const xToMinMaxY = new Map();

    for (const [x, y] of buildings) {

        if (!yToMinMaxX.has(y)) {
            yToMinMaxX.set(y, { min: Infinity, max: -Infinity });
        }

        if (!xToMinMaxY.has(x)) {
            xToMinMaxY.set(x, { min: Infinity, max: -Infinity });
        }

        const xr = yToMinMaxX.get(y);
        xr.min = Math.min(xr.min, x);
        xr.max = Math.max(xr.max, x);

        const yr = xToMinMaxY.get(x);
        yr.min = Math.min(yr.min, y);
        yr.max = Math.max(yr.max, y);
    }

    let result = 0;

    for (const [x, y] of buildings) {
        const xr = yToMinMaxX.get(y);
        const yr = xToMinMaxY.get(x);

        if (xr.min < x && x < xr.max &&
            yr.min < y && y < yr.max) {
            result++;
        }
    }

    return result;
}
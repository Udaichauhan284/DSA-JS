/*3623. Count Number of Trapezoids I
02 Dec 2025, leetcode potd, medium

*/

function countTrapezoids(points) {
    const M = 1e9 + 7;

    // Map to count occurrences of each y-coordinate
    const mp = new Map();

    for (let [x, y] of points) {
        mp.set(y, (mp.get(y) || 0) + 1);
    }

    let result = 0n;                // BigInt result
    let prevHorizontalLines = 0n;   // BigInt

    for (let [y, count] of mp) {
        count = BigInt(count);

        // countC2 = count * (count - 1) / 2
        let horizontalLines = (count * (count - 1n)) / 2n;

        result += horizontalLines * prevHorizontalLines;

        prevHorizontalLines += horizontalLines;
    }

    return Number(result % BigInt(M));
}



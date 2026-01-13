/*3453. Separate Squares I
13 Jan 2026, leetcode potd, medium
Input: squares = [[0,0,1],[2,2,1]]

Output: 1.00000
*/

function check(squares, midY, total) {
    let bottomArea = 0;

    for (const square of squares) {
        const y = square[1];
        const l = square[2];

        const bottomY = y;
        const topY = y + l;

        if (midY >= topY) {
            // full square below
            bottomArea += l * l;
        } else if (midY > bottomY) {
            // partial square below
            bottomArea += (midY - bottomY) * l;
        }
    }

    // Is bottom area >= top area?
    return bottomArea >= total / 2.0;
}

var separateSquares = function(squares) {
    let low = Infinity;
    let high = -Infinity;
    let total = 0.0;

    for (const square of squares) {
        const y = square[1];
        const l = square[2];

        total += l * l;
        low = Math.min(low, y);
        high = Math.max(high, y + l);
    }

    let resultY = 0.0;

    while (high - low > 1e-5) {
        const midY = low + (high - low) / 2;
        resultY = midY;

        if (check(squares, midY, total)) {
            // bottom area is larger → move cut downward
            high = midY;
        } else {
            low = midY;
        }
    }

    return resultY;
};
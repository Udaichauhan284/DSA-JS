var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    // 1st Step: Sort the inputs
    hBars.sort((a, b) => a - b);
    vBars.sort((a, b) => a - b);

    let maxConsecutiveHBars = 1;
    let maxConsecutiveVBars = 1;

    // Find longest consecutive horizontal bars
    let currConsecutiveHBars = 1;
    for (let i = 1; i < hBars.length; i++) {
        if (hBars[i] - hBars[i - 1] === 1) {
            currConsecutiveHBars++;
        } else {
            currConsecutiveHBars = 1;
        }
        maxConsecutiveHBars = Math.max(
            maxConsecutiveHBars,
            currConsecutiveHBars
        );
    }

    // Find longest consecutive vertical bars
    let currConsecutiveVBars = 1;
    for (let i = 1; i < vBars.length; i++) {
        if (vBars[i] - vBars[i - 1] === 1) {
            currConsecutiveVBars++;
        } else {
            currConsecutiveVBars = 1;
        }
        maxConsecutiveVBars = Math.max(
            maxConsecutiveVBars,
            currConsecutiveVBars
        );
    }

    // Square side length = min(consecutive horizontal, consecutive vertical) + 1
    const side = Math.min(maxConsecutiveHBars, maxConsecutiveVBars) + 1;

    return side * side;
};
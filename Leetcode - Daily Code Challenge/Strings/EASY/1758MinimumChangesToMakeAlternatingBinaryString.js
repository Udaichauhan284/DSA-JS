var minOperations = function(s) {
    const n = s.length;
    let startWith0 = 0;
    let startWith1 = 0;

    // pattern1 -> 010101
    // pattern2 -> 101010
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            if (s[i] === '0') {
                startWith1++;
            } else {
                startWith0++;
            }
        } else {
            if (s[i] === '1') {
                startWith1++;
            } else {
                startWith0++;
            }
        }
    }

    return Math.min(startWith0, startWith1);
};

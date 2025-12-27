var bestClosingTime = function(customers) {
    const n = customers.length;

    // prefixN[i] = number of 'N' in customers[0..i-1]
    const prefixN = new Array(n + 1).fill(0);

    // suffixY[i] = number of 'Y' in customers[i..n-1]
    const suffixY = new Array(n + 1).fill(0);

    // Build prefixN
    for (let i = 1; i <= n; i++) {
        prefixN[i] = prefixN[i - 1] + (customers[i - 1] === 'N' ? 1 : 0);
    }

    // Build suffixY
    for (let i = n - 1; i >= 0; i--) {
        suffixY[i] = suffixY[i + 1] + (customers[i] === 'Y' ? 1 : 0);
    }

    let minPenalty = Infinity;
    let minHour = 0;

    // Try closing at every hour from 0 to n
    for (let i = 0; i <= n; i++) {
        const currPenalty = prefixN[i] + suffixY[i];

        if (currPenalty < minPenalty) {
            minPenalty = currPenalty;
            minHour = i;
        }
    }

    return minHour;
};


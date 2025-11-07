/* leetcode potd hard, 07 nov 2025
*/
function check(mid, diff, r, k, n) {
    const tempDiff = [...diff]; // copy the array
    let cumSum = 0n; // cumulative power (use BigInt for large numbers)
    let remainingK = BigInt(k);

    for (let i = 0; i < n; i++) {
        cumSum += tempDiff[i];

        if (cumSum < mid) {
        const need = mid - cumSum;

        if (need > remainingK) return false;

        remainingK -= need;
        cumSum += need; // greedily add stations to maximize range

        // Apply difference array update
        if (i + 2 * r + 1 < n) {
            tempDiff[i + 2 * r + 1] -= need;
        }
        }
    }

    return true;
    }

    function maxPower(stations, r, k) {
    const n = stations.length;
    const diff = Array(n).fill(0n);

    // Build difference array
    for (let i = 0; i < n; i++) {
        const left = Math.max(0, i - r);
        diff[left] += BigInt(stations[i]);

        if (i + r + 1 < n) {
        diff[i + r + 1] -= BigInt(stations[i]);
        }
    }

    let left = BigInt(Math.min(...stations));
    let right = BigInt(stations.reduce((a, b) => a + b, 0)) + BigInt(k);
    let result = 0n;

    // Binary search on power
    while (left <= right) {
        const mid = left + ((right - left) >> 1n);

        if (check(mid, diff, r, k, n)) {
        result = mid;
        left = mid + 1n;
        } else {
        right = mid - 1n;
        }
    }

    return Number(result); // convert BigInt result to number
}
/*2141. Maximum Running Time of N Computers
01 Dec 2025, leetcode potd, HARD
*/

var maxRunTime = function(n, batteries) {

    // Check if a given mid_time is possible
    function possible(batteries, mid_time, n) {
        let target = BigInt(n) * BigInt(mid_time);

        for (let b of batteries) {
            target -= (b < mid_time ? b : mid_time);
            if (target <= 0n) return true;
        }
        return target <= 0n;
    }

    // Convert battery values to BigInt
    batteries = batteries.map(b => BigInt(b));

    // Binary search boundaries
    let l = batteries.reduce((a,b) => a < b ? a : b);        // min element
    let total = batteries.reduce((a, b) => a + b, 0n);        // total sum
    let r = total / BigInt(n);                                // max possible time

    let result = 0n;

    while (l <= r) {
        let mid = l + (r - l) / 2n;

        if (possible(batteries, mid, n)) {
            result = mid;
            l = mid + 1n;
        } else {
            r = mid - 1n;
        }
    }

    return Number(result);
};

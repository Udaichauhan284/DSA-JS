/* 474. Ones and Zeros
leetcode potd, medium, 11 nov 2025
*/

function findMaxForm(strs, m, n) {
    const N = strs.length;

    // Precompute zeros & ones count for each string
    const count = strs.map(str => {
        let zeros = 0, ones = 0;
        for (const ch of str) {
            if (ch === '0') zeros++;
            else ones++;
        }
        return [zeros, ones];
    });

    // 3D DP memo table (m+1) x (n+1) x (N+1)
    const t = Array.from({ length: m + 1 }, () =>
        Array.from({ length: n + 1 }, () =>
            Array(N + 1).fill(-1)
        )
    );

    function solve(index, zeros, ones) {
        if (index >= N || (zeros === 0 && ones === 0)) return 0;

        if (t[zeros][ones][index] !== -1) {
            return t[zeros][ones][index];
        }

        const [cz, co] = count[index];

        // Option 1: include current string if allowed
        let include = 0;
        if (cz <= zeros && co <= ones) {
            include = 1 + solve(index + 1, zeros - cz, ones - co);
        }

        // Option 2: exclude current string
        const exclude = solve(index + 1, zeros, ones);

        t[zeros][ones][index] = Math.max(include, exclude);
        return t[zeros][ones][index];
    }

    return solve(0, m, n);
}
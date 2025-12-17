/* 3573.

*/
const NEG_INF = Number.MIN_SAFE_INTEGER;

// t[i][k][state]
// state:
// 0 → nothing held
// 1 → bought (normal), waiting to sell
// 2 → short sold, waiting to buy back
let t;

function solve(i, k, state, prices) {
    if (i === prices.length) {
        if (state === 0) return 0;
        return NEG_INF; // unfinished transaction
    }

    if (t[i][k][state] !== NEG_INF) {
        return t[i][k][state];
    }

    let take = NEG_INF;
    let dontTake = solve(i + 1, k, state, prices);

    if (k > 0) {
        if (state === 1) {
            // Sell today (complete normal transaction)
            take = prices[i] + solve(i + 1, k - 1, 0, prices);
        }
        else if (state === 2) {
            // Buy back today (complete short transaction)
            take = -prices[i] + solve(i + 1, k - 1, 0, prices);
        }
        else {
            // state === 0 → start a transaction
            take = Math.max(
                -prices[i] + solve(i + 1, k, 1, prices), // buy
                 prices[i] + solve(i + 1, k, 2, prices)  // short sell
            );
        }
    }

    t[i][k][state] = Math.max(take, dontTake);
    return t[i][k][state];
}

function maximumProfit(prices, k) {
    const n = prices.length;

    // Initialize DP array
    t = Array.from({ length: n }, () =>
        Array.from({ length: k + 1 }, () =>
            Array(3).fill(NEG_INF)
        )
    );

    return solve(0, k, 0, prices);
}

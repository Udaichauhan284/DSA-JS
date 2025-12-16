function DFS(
    u,
    present,
    future,
    adj,
    statesProfit,
    budget
) {
    // childrenStatesProfit:
    // [0] -> child profit if parent NOT bought
    // [1] -> child profit if parent IS bought
    const childrenStatesProfit = [];

    // Process children first
    for (const v of (adj.get(u) || [])) {
        DFS(v, present, future, adj, statesProfit, budget);
        childrenStatesProfit.push([
            statesProfit[v][0],
            statesProfit[v][1]
        ]);
    }

    // parentBought = 0 or 1
    for (let parentBought = 0; parentBought <= 1; parentBought++) {

        const price  = parentBought === 1 ? Math.floor(present[u] / 2) : present[u];
        const profit = future[u] - price;

        let bestProfitAtU = new Array(budget + 1).fill(0);

        /* ---------------- Case 1: Do NOT buy node u ---------------- */
        let childrenProfitIfUNotBought = new Array(budget + 1).fill(0);

        for (const child of childrenStatesProfit) {
            const temp = new Array(budget + 1).fill(0);

            for (let used = 0; used <= budget; used++) {
                for (let take = 0; used + take <= budget; take++) {
                    temp[used + take] = Math.max(
                        temp[used + take],
                        childrenProfitIfUNotBought[used] + child[0][take]
                    );
                }
            }
            childrenProfitIfUNotBought = temp;
        }

        for (let b = 0; b <= budget; b++) {
            bestProfitAtU[b] = Math.max(bestProfitAtU[b], childrenProfitIfUNotBought[b]);
        }

        /* ---------------- Case 2: Buy node u ---------------- */
        if (price <= budget) {
            let childrenProfitIfUBought = new Array(budget + 1).fill(0);

            for (const child of childrenStatesProfit) {
                const temp = new Array(budget + 1).fill(0);

                for (let used = 0; used <= budget; used++) {
                    for (let take = 0; used + take <= budget; take++) {
                        temp[used + take] = Math.max(
                            temp[used + take],
                            childrenProfitIfUBought[used] + child[1][take]
                        );
                    }
                }
                childrenProfitIfUBought = temp;
            }

            for (let b = price; b <= budget; b++) {
                bestProfitAtU[b] = Math.max(
                    bestProfitAtU[b],
                    childrenProfitIfUBought[b - price] + profit
                );
            }
        }

        statesProfit[u][parentBought] = bestProfitAtU;
    }
}

function maxProfit(
    n,
    present,
    future,
    hierarchy,
    budget
) {
    const adj = new Map();

    for (const [u, v] of hierarchy) {
        const from = u - 1;
        const to   = v - 1;
        if (!adj.has(from)) adj.set(from, []);
        adj.get(from).push(to);
    }

    // statesProfit[u][0][b] → parent NOT bought
    // statesProfit[u][1][b] → parent bought
    const statesProfit = Array.from({ length: n }, () =>
        Array.from({ length: 2 }, () => new Array(budget + 1).fill(0))
    );

    DFS(0, present, future, adj, statesProfit, budget);

    let ans = 0;
    for (let b = 0; b <= budget; b++) {
        ans = Math.max(ans, statesProfit[0][0][b]);
    }
    return ans;
}
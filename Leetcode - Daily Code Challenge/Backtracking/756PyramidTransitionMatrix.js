var pyramidTransition = function(bottom, allowed) {
    // Map: "AB" -> ['C', 'D', ...]
    const mp = new Map();

    for (let pattern of allowed) {
        const key = pattern.slice(0, 2);
        const val = pattern[2];

        if (!mp.has(key)) mp.set(key, []);
        mp.get(key).push(val);
    }

    // Memoization map
    const memo = new Map();

    function solve(curr, idx, above) {
        // Base case: reached top of pyramid
        if (curr.length === 1) return true;

        const key = `${curr}_${idx}_${above}`;
        if (memo.has(key)) return memo.get(key);

        // Finished current row → move to next row
        if (idx === curr.length - 1) {
            const res = solve(above, 0, "");
            memo.set(key, res);
            return res;
        }

        const pair = curr.substring(idx, idx + 2);
        if (!mp.has(pair)) {
            memo.set(key, false);
            return false;
        }

        for (let ch of mp.get(pair)) {
            // DO
            const nextAbove = above + ch;

            // EXPLORE
            if (solve(curr, idx + 1, nextAbove)) {
                memo.set(key, true);
                return true;
            }
            // UNDO happens naturally because strings are immutable
        }

        memo.set(key, false);
        return false;
    }

    return solve(bottom, 0, "");
};
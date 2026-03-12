class DSU {
    constructor(n) {
        this.parent = new Array(n);
        this.rank = new Array(n).fill(1);

        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }

    find(x) {
        if (x === this.parent[x]) return x;

        // Path compression
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x, y) {
        let xParent = this.find(x);
        let yParent = this.find(y);

        if (xParent === yParent) return false;

        if (this.rank[xParent] > this.rank[yParent]) {
            this.parent[yParent] = xParent;
        } else if (this.rank[xParent] < this.rank[yParent]) {
            this.parent[xParent] = yParent;
        } else {
            this.parent[xParent] = yParent;
            this.rank[yParent]++;
        }

        return true;
    }
}

var maxStability = function(n, edges, k) {

    function check(n, edges, k, mid) {

        const dsu = new DSU(n);
        const upgradeCandidates = [];

        for (const edge of edges) {

            const u = edge[0];
            const v = edge[1];
            const s = edge[2];
            const m = edge[3];

            if (m === 1) {

                if (s < mid) return false;

                dsu.union(u, v);

            } else {

                if (s >= mid) {

                    dsu.union(u, v);

                } else if (2 * s >= mid) {

                    upgradeCandidates.push([u, v]);
                }
            }
        }

        for (const edge of upgradeCandidates) {

            const u = edge[0];
            const v = edge[1];

            if (dsu.find(u) !== dsu.find(v)) {

                if (k <= 0) return false;

                dsu.union(u, v);
                k--;
            }
        }

        const root = dsu.find(0);

        for (let node = 1; node < n; node++) {
            if (dsu.find(node) !== root) return false;
        }

        return true;
    }

    // First check must edges don't form cycle
    const dsu = new DSU(n);

    for (const edge of edges) {

        const u = edge[0];
        const v = edge[1];
        const m = edge[3];

        if (m === 1) {

            if (dsu.find(u) === dsu.find(v)) {
                return -1;
            }

            dsu.union(u, v);
        }
    }

    let result = -1;
    let l = 1;
    let r = 200000;

    while (l <= r) {

        const mid = Math.floor(l + (r - l) / 2);

        if (check(n, edges, k, mid)) {
            result = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return result;
};

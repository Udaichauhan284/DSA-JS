class SegmentTree {
    constructor(xs) {
        this.xs = xs; // sorted x coordinates
        this.n = xs.length - 1;
        this.count = new Array(4 * this.n).fill(0);
        this.covered = new Array(4 * this.n).fill(0);
    }

    update(qleft, qright, qval, left, right, pos) {
        if (this.xs[right + 1] <= qleft || this.xs[left] >= qright) {
            return; // no overlap
        }
        if (qleft <= this.xs[left] && this.xs[right + 1] <= qright) {
            this.count[pos] += qval;
        } else {
            const mid = Math.floor((left + right) / 2);
            this.update(qleft, qright, qval, left, mid, pos * 2 + 1);
            this.update(qleft, qright, qval, mid + 1, right, pos * 2 + 2);
        }

        if (this.count[pos] > 0) {
            this.covered[pos] = this.xs[right + 1] - this.xs[left];
        } else {
            if (left === right) {
                this.covered[pos] = 0;
            } else {
                this.covered[pos] =
                    this.covered[pos * 2 + 1] + this.covered[pos * 2 + 2];
            }
        }
    }

    query() {
        return this.covered[0];
    }
}

var separateSquares = function (squares) {
    // save events: [y-coordinate, type, left boundary, right boundary]
    const events = [];
    const xsSet = new Set();

    for (const sq of squares) {
        const [x, y, l] = sq;
        const xr = x + l;
        events.push([y, 1, x, xr]);
        events.push([y + l, -1, x, xr]);
        xsSet.add(x);
        xsSet.add(xr);
    }

    // sort events by y-coordinate
    events.sort((a, b) => a[0] - b[0]);
    // discrete coordinates
    const xs = Array.from(xsSet).sort((a, b) => a - b);
    // initialize the segment tree
    const segTree = new SegmentTree(xs);

    const psum = [];
    const widths = [];
    let total_area = 0;
    let prev = events[0][0];

    // scan: calculate total area and record intermediate states
    for (const event of events) {
        const [y, delta, xl, xr] = event;
        const length = segTree.query();
        total_area += length * (y - prev);
        segTree.update(xl, xr, delta, 0, segTree.n - 1, 0);
        // record prefix sums and widths
        psum.push(total_area);
        widths.push(segTree.query());
        prev = y;
    }

    // calculate the target area (half rounded up)
    const target = Math.floor((total_area + 1) / 2);
    // find the first position greater than or equal to target using binary search
    let left = 0,
        right = psum.length - 1;
    let i = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (psum[mid] < target) {
            i = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // get the corresponding area, width, and height
    const area = psum[i];
    const width = widths[i];
    const height = events[i][0];

    return height + (total_area - area * 2) / (width * 2.0);
};
/* 3479. Fruits Into Baskets III
06 Aug 2025, leetcode potd
*/

function build(i, l, r, baskets, segmentTree) {
    if (l === r) {
        segmentTree[i] = baskets[l];
        return;
    }
    let m = Math.floor((l + r) / 2);
    build(2 * i + 1, l, m, baskets, segmentTree);
    build(2 * i + 2, m + 1, r, baskets, segmentTree);

    segmentTree[i] = Math.max(segmentTree[2 * i + 1], segmentTree[2 * i + 2]);
}

function querySegmentTree(i, l, r, segmentTree, val) {
    if (segmentTree[i] < val) {
        return false; // No basket in this segment can hold the fruit
    }

    if (l === r) {
        segmentTree[i] = -1; // Mark this basket as used
        return true;
    }

    let mid = Math.floor((l + r) / 2);
    let placed = false;

    if (segmentTree[2 * i + 1] >= val) {
        placed = querySegmentTree(2 * i + 1, l, mid, segmentTree, val);
    } else {
        placed = querySegmentTree(2 * i + 2, mid + 1, r, segmentTree, val);
    }

    segmentTree[i] = Math.max(segmentTree[2 * i + 1], segmentTree[2 * i + 2]);
    return placed;
}

function numOfUnplacedFruits(fruits, baskets) {
    const n = fruits.length;
    const segmentTree = new Array(4 * n).fill(-1);

    build(0, 0, n - 1, baskets, segmentTree);

    let unplaced = 0;
    for (let fruit of fruits) {
        if (!querySegmentTree(0, 0, n - 1, segmentTree, fruit)) {
            unplaced++;
        }
    }

    return unplaced;
}

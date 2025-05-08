/* 3342 Find Minimum Time TO Reach Last Room II
08 May 2025, Leetcode POTD

*/

var minTimeToReach = function (moveTime) {
    const n = moveTime.length,
        m = moveTime[0].length;
    const d = Array.from({ length: n }, () => Array(m).fill(Infinity));
    const v = Array.from({ length: n }, () => Array(m).fill(false));
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    const q = new PriorityQueue((a, b) => {
        return a.dist < b.dist ? -1 : 1;
    });

    d[0][0] = 0;
    q.enqueue({ x: 0, y: 0, dist: 0 });
    while (!q.isEmpty()) {
        const s = q.dequeue();
        if (v[s.x][s.y]) {
            continue;
        }
        if (s.x == n - 1 && s.y == m - 1) {
            break;
        }
        v[s.x][s.y] = 1;
        for (let i = 0; i < 4; i++) {
            let nx = s.x + dirs[i][0];
            let ny = s.y + dirs[i][1];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }
            let dist =
                Math.max(d[s.x][s.y], moveTime[nx][ny]) + ((s.x + s.y) % 2) + 1;
            if (d[nx][ny] > dist) {
                d[nx][ny] = dist;
                q.enqueue({ x: nx, y: ny, dist: dist });
            }
        }
    }

    return d[n - 1][m - 1];
};
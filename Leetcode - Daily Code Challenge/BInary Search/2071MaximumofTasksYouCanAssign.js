/* 2071. Maximum Number of Tasks You can Assign
01 May 25, Leetcode POTD, HARD
*/
var maxTaskAssign = function (tasks, workers, pills, strength) {
    let n = tasks.length,
        m = workers.length;
    tasks.sort((a, b) => a - b);
    workers.sort((a, b) => a - b);

    const check = (mid) => {
        let p = pills;
        let ws = new Deque();
        let ptr = m - 1;
        // Enumerate each task from largest to smallest
        for (let i = mid - 1; i >= 0; --i) {
            while (ptr >= m - mid && workers[ptr] + strength >= tasks[i]) {
                ws.pushFront(workers[ptr]);
                --ptr;
            }
            if (ws.isEmpty()) {
                return false;
            }
            // If the largest element in the deque is greater than or equal to tasks[i]
            else if (ws.back() >= tasks[i]) {
                ws.popBack();
            } else {
                if (!p) {
                    return false;
                }
                --p;
                ws.popFront();
            }
        }
        return true;
    };

    let left = 1,
        right = Math.min(m, n),
        ans = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
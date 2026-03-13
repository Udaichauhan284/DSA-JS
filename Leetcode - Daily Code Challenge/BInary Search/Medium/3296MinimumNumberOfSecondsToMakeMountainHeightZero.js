/* 3296. Minimum Number of Seconds To Make Mountain Height Zero
13 March 2026, leetcode potd, MEDIUM

*/

var minNumberOfSeconds = function(mountainHeight, workerTimes) {

    function check(mid, workerTimes, mH) {

        let h = 0;

        for (let t of workerTimes) {

            // solve k(k+1)/2 * t <= mid
            // derived formula
            let units = Math.floor(Math.sqrt(2.0 * mid / t + 0.25) - 0.5);

            h += units;

            if (h >= mH) return true;
        }

        return h >= mH;
    }

    let maxTime = Math.max(...workerTimes);

    let l = 1;
    let r = maxTime * mountainHeight * (mountainHeight + 1) / 2;

    let result = 0;

    while (l <= r) {

        let mid = Math.floor(l + (r - l) / 2);

        if (check(mid, workerTimes, mountainHeight)) {
            result = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return result;
};

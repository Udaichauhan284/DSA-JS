/* 3439. Reschedule Meetings for maximum Free Time I
09 July 2025, Leetcode POTD Medium
Input: eventTime = 5, k = 1, startTime = [1,3], endTime = [2,5]

Output: 2

Reschedule the meeting at [1, 2] to [2, 3], leaving no meetings during the time [0, 2].
*/

var maxFreeTime = function (eventTime, k, startTime, endTime) {
    let n = startTime.length,
        res = 0,
        t = 0;
    for (let i = 0; i < n; i++) {
        t += endTime[i] - startTime[i];
        let left = i <= k - 1 ? 0 : endTime[i - k];
        let right = i === n - 1 ? eventTime : startTime[i + 1];
        res = Math.max(res, right - left - t);
        if (i >= k - 1) {
            t -= endTime[i - k + 1] - startTime[i - k + 1];
        }
    }
    return res;
};
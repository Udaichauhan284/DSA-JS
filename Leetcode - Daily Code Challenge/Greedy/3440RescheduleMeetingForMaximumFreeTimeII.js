/* 3440. Reschedule Meetings for Maximum Free Timr II
10 July 2025, Leetcode POTD
Input: eventTime = 5, startTime = [1,3], endTime = [2,5]

Output: 2
*/

//Approach (Greedily trying moving each event)
//T.C : O(n)
//S.C : O(n)
function maxFreeTime(eventTime, startTime, endTime) {
    const freeArray = [];

    // First free duration: time before the first event
    freeArray.push(startTime[0]);

    // Middle free durations: gaps between end of previous and start of next
    for (let i = 1; i < startTime.length; i++) {
        freeArray.push(startTime[i] - endTime[i - 1]);
    }

    // Final free duration: time after the last event
    freeArray.push(eventTime - endTime[endTime.length - 1]);

    const n = freeArray.length;
    const maxRightFree = Array(n).fill(0);
    const maxLeftFree = Array(n).fill(0);

    // Precompute max right free times
    for (let i = n - 2; i >= 0; i--) {
        maxRightFree[i] = Math.max(maxRightFree[i + 1], freeArray[i + 1]);
    }

    // Precompute max left free times
    for (let i = 1; i < n; i++) {
        maxLeftFree[i] = Math.max(maxLeftFree[i - 1], freeArray[i - 1]);
    }

    let result = 0;

    // Iterate over the events
    for (let i = 1; i < n; i++) {
        const currEventTime = endTime[i - 1] - startTime[i - 1];

        // Case 1: Move completely out if space allows
        if (currEventTime <= Math.max(maxLeftFree[i - 1], maxRightFree[i])) {
            result = Math.max(result, freeArray[i - 1] + currEventTime + freeArray[i]);
        }

        // Case 2: Shift slightly (left or right)
        result = Math.max(result, freeArray[i - 1] + freeArray[i]);
    }

    return result;
}

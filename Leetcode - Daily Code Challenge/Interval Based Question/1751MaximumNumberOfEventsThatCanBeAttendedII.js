/* 1751. Maximum Number of Events That Can Be Attended II
08 July 2025, Leetcode POTD, HARD
Input: events = [[1,2,4],[3,4,3],[2,3,1]], k = 2
Output: 7
Explanation: Choose the green events, 0 and 1 (0-indexed) for a total value of 4 + 3 = 7.
*/

/*Method, in this we can use the take and skip
DP method, because in this we need to pick those
who's start date is bigger than end date
TC: O(n*k*n), SC: O(n*k) 
*/
var maxValue = function(events, k) {
    let len = events.length;
    //now i need to sort the events, based on the
    //start date
    events.sort((a,b) => a[0]-b[0]);
    let dp = Array.from({length: len+1}, () => Array(k+1).fill(-1));
    return solve(events, 0, k, len, dp);
};
function solve(events, idx, k, len, dp){
    //base condition
    if(k <= 0 || idx >= len){
        return 0;
    }
    //now check the dp
    if(dp[idx][k] !== -1){
        return dp[idx][k];
    }
    //now take all the values from events
    let start = events[idx][0];
    let end = events[idx][1];
    let value = events[idx][2];

    let skip = solve(events, idx+1, k, len, dp);
    let j = idx+1;
    while(j < len){
        if(events[j][0] > events[idx][1]){
            //if next event start date is bigger then idx prev end date
            //means we can use the events, iteration
            break;
        }
        j++;
    }

    //now lets take the events
    let take = value + solve(events, j, k-1, len, dp);
    dp[idx][k] = Math.max(take, skip);
    return dp[idx][k];
}


/*Method 2, in this we can use the take and skip
DP method, because in this we need to pick those
who's start date is bigger than end date
TC: O(n*k*nlogn), last logn, is for searching the next events, 
SC: O(n*k) 
*/
var maxValue = function(events, k) {
    let len = events.length;
    events.sort((a, b) => a[0] - b[0]);
    let dp = Array.from({length: len + 1}, () => Array(k + 1).fill(-1));
    return solve(events, 0, k, len, dp);
};

function solve(events, idx, k, len, dp) {
    if (k <= 0 || idx >= len) {
        return 0;
    }

    if (dp[idx][k] !== -1) {
        return dp[idx][k];
    }

    let [start, end, value] = events[idx];

    // skip current event
    let skip = solve(events, idx + 1, k, len, dp);

    // find the next event that starts after current event ends
    let j = binarySearch(end, len, events);

    // take current event
    let take = value + solve(events, j, k - 1, len, dp);

    dp[idx][k] = Math.max(take, skip);
    return dp[idx][k];
};
//searching for next events, in binary search
function binarySearch(target, len, events) {
    let low = 0, high = len - 1;
    let ans = len; // default to len if no valid event is found
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (events[mid][0] > target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}
/*873. Length of Longest Fibonacci Subsequence
27 Feb 25, Leetcode POTD, Array, Fibnoacci, HashMap, DP
Input: arr = [1,2,3,4,5,6,7,8]
Output: 5
Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].

*/

/*In Method 1, we can use two loop i and j
this we act like two values and we add them to
find the next for that we will take the map,
when we find sum in map, we make sum prev and 
find curr. TC: worst case when whole arr is fibo
TC: O(n^3), SC: O(1), average case TC: O(n^2logn)
SC: O(1)
*/
var lenLongestFibSubseq = function(arr) {
    let len = arr.length;
    let map = new Map();
    //now set arr in map
    for(let i=0; i<len; i++){
        map.set(arr[i]);
    }
    let maxLen = 0;
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            let prev = arr[j];
            let curr = arr[i]+arr[j];
            let len = 2; //already set with i and j
            while(map.has(curr)){
                let temp = curr;
                curr += prev;
                prev = temp;
                maxLen = Math.max(maxLen, ++len)
            }
        }
    }
    return maxLen;
};

/*Method 2, we can use the DP
TC: O(n^2), SC: O(n^2)
*/
var lenLongestFibSubseq = function(arr) {
    let len = arr.length;
    let maxLen = 0;
    let dp = Array.from({length: len}, () => Array(len).fill(0)); // Fix DP initialization

    for(let curr = 2; curr < len; curr++) {
        let start = 0;
        let end = curr - 1;
        
        while (start < end) {
            let sum = arr[start] + arr[end];

            if (sum < arr[curr]) {
                start++;
            } else if (sum > arr[curr]) {
                end--;
            } else {
                dp[end][curr] = dp[start][end] > 0 ? dp[start][end] + 1 : 2;
                maxLen = Math.max(maxLen, dp[end][curr]);
                start++; // Move start pointer
            }
        }
    }

    return maxLen === 0 ? 0 : maxLen + 1; // Fix final return to include length correctly
};

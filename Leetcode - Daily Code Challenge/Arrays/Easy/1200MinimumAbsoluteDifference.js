/* 1200. Minimum Absolute Difference
26 Jan 2026, leetcode potd, easy
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Example 2:

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
*/


/*In this we need to find the abs minDiff, then we 
need to compare the diff of other to minDiff and push
in result
TC: O(n + nlogn) ~ O(nlogn), SC: O(1), if we ignore result
*/
var minimumAbsDifference = function(arr) {
    let len = arr.length;
    arr.sort((a,b) => a-b);

    let minDiff = Number.MAX_VALUE;
    for(let i=1; i<len; i++){
        minDiff = Math.min(minDiff, (arr[i]-arr[i-1]));
    }
    //now we will find the pair
    let result = [];
    for(let i=1; i<len; i++){
        let diff = arr[i]-arr[i-1];
        if(diff === minDiff){
            result.push([arr[i-1], arr[i]]);
        }
    }
    return result;
};
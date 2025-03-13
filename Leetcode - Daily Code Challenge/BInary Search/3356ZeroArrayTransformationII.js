/*3356. Zero Array Transformation II
13 March 25, leetcode POTD,
Example 1:

Input: nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]

Output: 2

Explanation:

For i = 0 (l = 0, r = 2, val = 1):
Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
The array will become [1, 0, 1].
For i = 1 (l = 0, r = 2, val = 1):
Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
The array will become [0, 0, 0], which is a Zero Array. Therefore, the minimum value of k is 2.
*/

/*Method1, in this we can use the Difference Array Method, we can 
check till i in difference array and return the i+1.
TC: O(Q * (Q+n))
*/
var minZeroArray = function(nums, queries) {
    let nLen = nums.length;
    let qLen = queries.length;

    // Check if nums is already all zeros
    if (nums.every((ele) => ele === 0)) {
        return 0;
    }

    for (let i = 0; i < qLen; i++) {
        if (checkInDifferenceArray(nums, queries, i)) {
            return i + 1;
        }
    }
    return -1;
};

function checkInDifferenceArray(nums, queries, k) {
    let nLen = nums.length;

    let diff = Array(nLen + 1).fill(0); // Difference array

    // Apply queries up to index k
    for (let i = 0; i <= k; i++) {
        let l = queries[i][0];
        let r = queries[i][1];
        let val = queries[i][2];

        // Update difference array
        diff[l] += val;
        if (r + 1 < nLen) {
            diff[r + 1] -= val;
        }
    }

    let cumSum = 0;
    for (let i = 0; i < nLen; i++) {
        cumSum += diff[i];
        if (nums[i] - cumSum > 0) {
            return false;
        }
    }
    return true;
}


/*Method2, in this we can use the Difference Array Method, we can 
check till i in difference array and return the i+1.
use of Binary Search
TC: O(log(Q) * (Q+n))
*/
var minZeroArray = function(nums, queries) {
    let nLen = nums.length;
    let qLen = queries.length;

    // Check if nums is already all zeros
    if (nums.every((ele) => ele === 0)) {
        return 0;
    }

    let low = 0;
    let high = qLen - 1;
    let k = -1;
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(checkInDifferenceArray(nums,queries,mid)){
            k = mid+1; //possible answer
            high = mid - 1; //for less index ans
        }else{
            low = mid+1;
        }
    }

    return k;
};

function checkInDifferenceArray(nums, queries, k) {
    let nLen = nums.length;

    let diff = Array(nLen + 1).fill(0); // Difference array

    // Apply queries up to index k
    for (let i = 0; i <= k; i++) {
        let l = queries[i][0];
        let r = queries[i][1];
        let val = queries[i][2];

        // Update difference array
        diff[l] += val;
        if (r + 1 < nLen) {
            diff[r + 1] -= val;
        }
    }

    let cumSum = 0;
    for (let i = 0; i < nLen; i++) {
        cumSum += diff[i];
        if (nums[i] - cumSum > 0) {
            return false;
        }
    }
    return true;
}
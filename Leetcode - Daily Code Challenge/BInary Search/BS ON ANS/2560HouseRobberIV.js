/*2560. House Robber IV
15 March 25, Leetcode POTD

Input: nums = [2,3,5,9], k = 2
Output: 5
Explanation: 
There are three ways to rob at least 2 houses:
- Rob the houses at indices 0 and 2. Capability is max(nums[0], nums[2]) = 5.
- Rob the houses at indices 0 and 3. Capability is max(nums[0], nums[3]) = 9.
- Rob the houses at indices 1 and 3. Capability is max(nums[1], nums[3]) = 9.
Therefore, we return min(5, 9, 9) = 5.
*/

/*Method1, in this robber have the options, so we can use the 
Recursion and then memoize it, in this robber have option to rob
from current house or not, if yes then move i+2, k-1, otherwise
i+1, k will be same, as he not robed from it.
TC: O(n*k), SC: O(n*k)
*/
var minCapability = function (nums, k) {
    let len = nums.length;
    let dp = Array.from({ length: len }, () => Array(k + 1).fill(-1));
    // dp[i][j] means the minimum max capability of robbing j houses from index i

    return solve(nums, 0, k, len, dp);
};

function solve(nums, i, k, len, dp) {
    if (k === 0) {
        return 0; // If no more houses left to rob, return 0
    }

    if (i >= len) {
        return Number.MAX_VALUE; // If index exceeds array, return a large number
    }

    if (dp[i][k] !== -1) {
        return dp[i][k]; // Use memoized result
    }

    // Option 1: Rob current house and move to i+2
    let take = Math.max(nums[i], solve(nums, i + 2, k - 1, len, dp));

    // Option 2: Skip current house and move to i+1
    let skip = solve(nums, i + 1, k, len, dp);

    return (dp[i][k] = Math.min(take, skip)); // Memoize and return the minimum value
}


/*Method2, in this we want mini of max capability, so we can use the BS
on Ans method
TC: O(n*log(maxC)), SC: O(1)
*/
var minCapability = function(nums, k) {
    let len = nums.length;
    let low = Math.min(...nums);
    let high = Math.max(...nums);

    //now apply the BS
    let result = high;
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);

        if(isPossible(nums,k,mid,len)){
            result = mid;
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return result;
};
function isPossible(nums,k,mid,len){
    let house = 0;
    for(let i=0; i<len; i++){
        if(nums[i] <= mid){
            house++;
            i++; //skipping adjacent house
        }
    }

    return house >= k;
}

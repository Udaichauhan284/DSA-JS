/* 2563 COunt the Number of Fair Pairs
13 Nov 2024, Leetcode POTD, Array, Binary Search, Sort, Lower and Upper Bound

Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
Output: 6
Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).
*/

/* 19Apr25, LeetcodePOTD
in this we need to use the lower and upper bound, low <= pairSum 
<= upper, xPairSum < lower and yPairSum <= upper
y-x will give the result, and for finding the nums, we can use the
lower and upper bound
TC: O(nlogn), SC: O(1)
*/
var countFairPairs = function(nums, lower, upper) {
    let len = nums.length;
    nums.sort((a,b) => a-b);

    let result = 0;
    for(let i=0; i<len; i++){
        let lowerIdx = lowerBound(i+1,len-1,lower-nums[i],nums);
        let x = lowerIdx - 1 - i;
        let upperIdx = upperBound(i+1,len-1,upper-nums[i],nums);
        let y = upperIdx - 1 - i;
        result += (y-x);
    }
    return result;
};
function lowerBound(low, high, target, nums){
    let ans = high+1;
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(nums[mid] >= target){
            ans = mid;
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return ans;
}
function upperBound(low, high, target, nums){
    let ans = high+1;
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(nums[mid] > target){
            ans = mid;
            high = mid - 1;
        }else{
            low = mid+1;
        }
    }
    return ans;
}
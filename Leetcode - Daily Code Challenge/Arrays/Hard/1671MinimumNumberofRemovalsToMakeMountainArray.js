/* 1671 Minimum Number of Removals TO Male Mountain Array
30 Oct 2024, Leetcode POTD, Array, LIS, LDS

Input: nums = [2,1,1,5,6,2,3,1]
Output: 3
Explanation: One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].
*/

/*I this we need to find the LIS(longest increasing subsequence lefr) and LDS
(longest decreasing subsequence left). then n - LIS[i] - lDS[i] + 1
O(n^2)
*/
var minimumMountainRemovals = function(nums) {
    let len = nums.length;

    //now find the LIS and LDS using botton UP approach
    let LIS = Array(len).fill(1);
    let LDS = Array(len).fill(1);
    //now for LIS
    for(let i=1; i<len; i++){
        for(let j=i-1; j>=0; j--){
            if(nums[i] > nums[j]){
                LIS[i] = Math.max(LIS[i], LIS[j]+1);
            }
        }
    }
    //now for LDS
    for(let i=len-1; i>=0; i--){
        for(let j=i+1; j<len; j++){
            if(nums[i] > nums[j]){
                LDS[i] = Math.max(LDS[i], LDS[j]+1);
            }
        }
    }

    //now find the ans
    let minMountain = len;
    for(let i=0; i<len; i++){
        if(LIS[i] > 1 && LDS[i] > 1){
            //moutain length 3
            minMountain = Math.min(minMountain, (len-LIS[i]-LDS[i]+1));
        }
    }
    return minMountain;
};
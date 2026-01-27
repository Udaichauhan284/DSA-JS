/*1004. Max Consecutive Ones III
24 Jan 2026, leetcode, medium
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

*/

/*Basically in this i need to find the longest
window zero atmost k
TC: O(n^2), SC: O(1)
*/
var longestOnes = function(nums, k) {
    let len = nums.length;
    let maxLen = 0;
    for(let i=0; i<len; i++){
        let countZero = 0;
        for(let j=i; j<len; j++){
            if(nums[j] === 0){
                //need to increase the count of zeros
                countZero++;
            }
            //now check the zeros
            if(countZero <= k){
                maxLen = Math.max(maxLen, j-i+1);
            }else{
                break; //break is not count0 <=k
            }
        }
    }
    return maxLen;
};


/*Follow the same method, just implement by 
Sliding window, need to find the longest subarr
of zero atmost k
TC: O(n), SC: O(1)
*/
var longestOnes = function(nums, k) {
    let len = nums.length;
    let low = 0, high = 0;
    let zeros = 0;
    let maxLen = 0;
    while(high < len){
        //now check the zeros
        if(nums[high] === 0){
            zeros++;
        }

        //now. check if zero cross the k
        if(zeros > k){
            //remove it from left, shrink
            if(nums[low] === 0) zeros--;
            low++;
        }

        //now if zero matchs the k
        if(zeros <= k){
            maxLen = Math.max(maxLen, high-low+1);
        }
        high++;
    }
    return maxLen;
};


//After learning about the maxWindow and minWindow concept on 28 jan
/*Follow the same method, just implement by 
Sliding window, need to find the longest subarr
of zero atmost k
TC: O(n), SC: O(1)
*/
var longestOnes = function(nums, k) {
    let len = nums.length;
    let low = 0, high = 0;
    let zeros = 0;
    let maxLen = 0;
    while(high < len){
        //now check the zeros
        if(nums[high] === 0){
            zeros++;
        }

        //in this need to find the maxWindow, so in till infor
        //is wrong shrink the window
        while(zeros > k){
            if(nums[low] === 0) zeros--;
            low++;
        }

        maxLen = Math.max(maxLen, high-low+1);
        high++;
    }
    return maxLen;
};
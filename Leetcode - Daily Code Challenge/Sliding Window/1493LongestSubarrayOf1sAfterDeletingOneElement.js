/* 1493. Longest Subarray of 1's After Deleting One Element
25 Aug 2025, Leetcode POTD, Medium
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
*/

/*In this we use the skip i iteration
where nums[i]=0, in that if condition
we use the other func to find the max
len of subarray of 1's where we need to 
skip the ith iteration
TC: O(n^2). SC: O(1)
*/
var longestSubarray = function(nums) {
    let len = nums.length;
    let result = 0;
    let countZeros = 0;
    for(let i=0; i<len; i++){
        if(nums[i] === 0){
            countZeros++;
            result = Math.max(result, findMaxSubArr(nums,i,len))
        }
    }
    if(countZeros === 0){
        //measn no 0 in array, return the len of all 1's array
        return len-1;
    }
    return result;
};
function findMaxSubArr(nums,skipIdx,len){
    let maxLen = 0;
    let currLen = 0;
    for(let i=0; i<len; i++){
        if(i === skipIdx) continue; //means skip that 0 ith iteration

        if(nums[i] === 1){
            //now count the 1's 
            currLen++;
            maxLen = Math.max(maxLen, currLen);
        }else{
            currLen=0;
        }
    }
    return maxLen;
}



/*Appraoch 2, we can use the sliding window, we count the zeros
and then we use the window, to shrink that till zeroCount > 1,
in shrink window, we minus from countZero-nums[i], i++
TC: O(n), SC: O(1)
*/
var longestSubarray = function (nums) {
    let result = 0;
    let len = nums.length;
    let zeroCounts = 0;
    let i = 0, j = 0;
    while (j < len) {
        if (nums[j] === 0) {
            zeroCounts++;
        }

        //now shrink the window
        while (zeroCounts > 1) {
            if (nums[i] === 0) {
                zeroCounts--;
            }
            i++;
        }

        result = Math.max(result, j - i);
        j++;
    }
    return result;
};



/*Appraoch 2, we can use the sliding window, we count the zeros
and then we use the window, to shrink that till zeroCount > 1,
in shrink window, we minus from countZero-nums[i], i++
TC: O(n), SC: O(1)
*/
var longestSubarray = function (nums) {
    let result = 0;
    let len = nums.length;
    let countZeros = 0;
    let i=0, j=0;
    //sliding window
    while(j < len){
        if(nums[j] === 0){
            countZeros++;
        }
        //now when in one window if countZeros exceed more then
        //1 then we need to shrink the window
        while(countZeros > 1){
            if(nums[i] === 0) countZeros--;
            i++; //shrink the window;
        }
        result = Math.max(result, j-i);
        j++;
    }
    return result;
};

/*Approach 3, in this we maintain the
lastZeroIdx pointer, which points the zero
when j sees it, and from there it start the 
new window, so when j see the zero, 
lastZeroIdx+1, and lastZeroIdx = j
TC: O(n), SC: O(1)
*/
var longestSubarray = function(nums) {
    let len = nums.length;
    let i=0, j=0;
    let lastZeroIdx = -1;
    let result = 0;
    while(j < len){
        if(nums[j] === 0){
            //make i pointer lzi+1, so that we can count the window
            i = lastZeroIdx+1;
            lastZeroIdx=j;
        }
        result = Math.max(result, j-i);
        j++;
    }
    return result;
};
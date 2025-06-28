/*2099. Find Subsequence of Length K with the Largest Sum
28 June 2025, Leetcode POTD, Easy
Input: nums = [2,1,3,3], k = 2
Output: [3,3]
Explanation:
The subsequence has the largest sum of 3 + 3 = 6.
*/

/*In this we need to return the func, to which
we need to maintain the index, so create the
index val, in array
TC: O(nlogn), SC: O(1)
*/
var maxSubsequence = function(nums, k) {
    let len = nums.length;
    if(len === k) return nums;

    let newNums = [];
    for(let i=0; i<len; i++){
        newNums.push([i,nums[i]]);
    }

    //now sort the array on based of val
    newNums.sort((a,b) => b[1]-a[1]);

    //now take out the topK elem
    let topK = newNums.slice(0,k);
    //now sort the topK array, based on ind
    topK.sort((a,b) => a[0]-b[0]);

    let result = topK.map((pair) => pair[1]);
    return result;
};
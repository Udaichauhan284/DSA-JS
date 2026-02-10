/*3719. Longest Balanced Subarray I
10 Feb 2026, Leetcode POTD, MEIDUM

*/

//TC: O(n^2), SC: O(n)
var longestBalanced = function(nums) {
    let len = nums.length;
    let maxLen = 0;
    for(let i=0; i<len; i++){
        let evenSet = new Set();
        let oddSet = new Set();
        for(let j=i; j<len; j++){
            if(nums[j]%2 === 0){
                evenSet.add(nums[j]);
            }else{
                oddSet.add(nums[j]);
            }
            if(evenSet.size === oddSet.size){
                maxLen = Math.max(maxLen, j-i+1);
            }
        }
    }
    return maxLen;
};
/* 2962. COunt Subarrays Where Max Element Apperars at Least K Times
29 April 2025, Leetcode POTD
Input: nums = [1,3,2,3,3], k = 2
Output: 6
Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].
*/

/*In this first we find the maxElem, then
i use the sliding window approach, where i 
check if nums[j]==maxE, we increase the maxC++
and then check if maxC is greater then k, and
check nums[i]==maxE, we remove the maxCount
TC: O(n), SC: O(1)
*/
var countSubarrays = function(nums, k) {
    let len = nums.length;
    let maxE = nums[0];
    for(let i=1; i<len; i++){
        maxE = Math.max(nums[i], maxE);
    }
    let maxCount = 0;
    let result = 0;
    let i=0, j=0;
    while(j < len){
        //now check the maxE 
        if(nums[j] === maxE){
            maxCount++;
        }
        //now check in while loop for 
        //maxCount >= k
        while(maxCount >= k){
            result += len-j;
            //now remove the i elem
            if(nums[i] === maxE){
                maxCount--;
            }
            i++;
        }
        j++;
    }
    return result;
};
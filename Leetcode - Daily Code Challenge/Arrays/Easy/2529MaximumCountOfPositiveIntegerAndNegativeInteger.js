/*2529. Maximum Count of Positive Integer and Negative Integer
12 March 25, Leetcode POTD, Array Easy

Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
*/

/*Method 1, simple use of loop to count the neg and
pos and then we will see which one is bigger and 
small
TC: O(n), SC: O(1) 
*/
var maximumCount = function(nums) {
    let neg = 0;
    let pos = 0;
    let len = nums.length;
    for(let i=0; i<len; i++){
        if(nums[i] === 0){
            continue; //skip that nor pos and neg
        }else if(nums[i] < 0){
            neg++;
        }else{
            pos++;
        }
    }
    return Math.max(neg, pos);
};